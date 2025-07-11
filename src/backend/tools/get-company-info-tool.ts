import { tool } from 'ai'
import { z } from 'zod'

export const GetCompanyInfoTool = tool({
  description: `Use this tool to gather basic company information from the user.

  This tool should be called when you need to collect:
  - Company name
  - User's designation/role
  - User's vertical
  - Company's sector

  This is typically one of the first tools to use in a conversation to establish context.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for company information
    return {
      company_name: null,
      designation: null,
      vertical: null,
      sector: null,
      prompt: "I'd like to learn about your company. Could you please tell me:\n1. What's your company name?\n2. What's your role/designation?\n3. What industry vertical does your company operate in?\n4. What sector would you classify your company in?"
    }
  },
})
