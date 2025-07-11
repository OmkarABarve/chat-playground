import { tool } from 'ai'
import { z } from 'zod'

const EmployeeOpinion = z.object({
  tool: z.string().describe('The tool being discussed'),
  model: z.string().describe('The model being discussed'),
  confirmed: z.boolean().describe('Whether the usage claim was confirmed'),
  context: z.string().describe('Additional context about the confirmation'),
})

export const ConfirmUsageClaimsTool = tool({
  description: `Use this tool to confirm usage claims by gathering opinions from other employees.

  This tool should collect:
  - Other employee opinions about the tools/models mentioned
  - Confirmation of usage claims based on examples from contexts
  - Additional context from different perspectives

  This requires products_tools, models, and contexts parameters from previous responses.`,

  parameters: z.object({
    products_tools: z
      .array(z.string())
      .describe('Array of products and tools to confirm'),
    models: z.array(z.string()).describe('Array of models to confirm'),
    contexts: z
      .array(z.string())
      .optional()
      .describe('Array of context examples from previous conversations'),
  }),

  execute: async ({ products_tools, models, contexts }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _unused = { models } // Suppress unused parameter warnings (intentionally unused)
    // Generate examples from contexts if available
    let examplesText = ''

    if (contexts && contexts.length > 0) {
      // Take up to 2 examples from contexts
      const examples = contexts.slice(0, 2)

      examplesText =
        '\n\nBased on previous assessments, here are some examples:\n'

      examples.forEach((context, index) => {
        examplesText += `\nExample ${index + 1}:\n`

        // Only use actual context data, don't make up examples
        let foundContent = false

        // Look for any tool mentions from the products_tools array in the actual context
        products_tools.forEach((tool) => {
          if (context.toLowerCase().includes(tool.toLowerCase())) {
            examplesText += `- Context mentions: ${tool}\n`
            foundContent = true
          }
        })

        // If no tools found, just show that context is available
        if (!foundContent) {
          examplesText += `- Previous assessment data available\n`
        }
      })
    }

    // Return a structured response that prompts for confirmation information
    return {
      other_employee_opinions: [],
      prompt:
        contexts && contexts.length > 0
          ? `${examplesText}

1. **Tool-Department Confirmation**: Have you heard of these specific tools being used in the departments mentioned in the examples above? (Yes/No for each)

2. **Colleague Verification**: Can you confirm whether your colleagues in those departments actually use these tools for the functions described?

3. **Colleague Insights**: What have they told you about their experience?
`
          : `No previous context examples available to reference for confirmation questions.`,
    }
  },
})
