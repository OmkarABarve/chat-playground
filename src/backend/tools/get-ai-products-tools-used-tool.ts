import { tool } from 'ai'
import { z } from 'zod'

export const GetAiProductsToolsUsedTool = tool({
  description: `Use this tool to gather information about AI products and tools the user/company uses.
  
  This tool should collect:
  - List of AI products used
  - List of AI tools used, and their models (if they know)
  - Models awareness (what AI models they know about)
  - Overall satisfaction with AI tools
  
  This helps understand the current AI landscape in their organization.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for AI products/tools information
    return {
      products: [],
      tools: [],
      models_awareness: [],
      satisfaction: null,
      prompt:
        "Let's talk about AI tools and products in your organization:\n1. What AI products does your company currently use?\n2. What AI tools do you personally use in your work?\n3. Which AI models are you aware of or have experience with?\n4. How would you rate your overall satisfaction with AI tools (on a scale of 1-10 or describe it)?",
    }
  },
})
