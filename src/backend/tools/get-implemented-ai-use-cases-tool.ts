import { tool } from 'ai'
import { z } from 'zod'

export const GetImplementedAiUseCasesTool = tool({
  description: `Use this tool to gather information about implemented AI use cases in the organization.
  
  This tool should collect:
  - Specific use cases where AI is implemented
  - Problems that AI has solved
  - Impact of AI implementation
  - Return on investment (ROI) information
  
  This requires products_tools parameter from previous responses.`,

  parameters: z.object({
    products_tools: z.array(z.string()).describe('Array of products and tools being used'),
  }),

  execute: async ({ products_tools }) => {
    // Return a structured response that prompts for use cases information
    return {
      use_cases: [],
      problems_solved: [],
      impact: null,
      roi: null,
      prompt: `Let's discuss the practical implementation of AI in your organization with the tools you mentioned (${products_tools.join(', ')}):\n1. What specific use cases have you implemented with these AI tools?\n2. What problems have these AI solutions solved for your organization?\n3. What has been the overall impact of implementing AI?\n4. Have you measured any return on investment (ROI) from these AI implementations?`
    }
  },
})
