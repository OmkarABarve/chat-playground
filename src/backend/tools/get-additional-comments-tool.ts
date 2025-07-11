import { tool } from 'ai'
import { z } from 'zod'

export const GetAdditionalCommentsTool = tool({
  description: `Use this tool to gather any additional comments or insights from the user.
  
  This tool should collect:
  - Any additional comments the user wants to share
  - Final thoughts or insights
  - Topics that weren't covered in previous questions
  
  This is typically used near the end of a conversation to capture any remaining information.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for additional comments
    return {
      comments: null,
      prompt: "Before we wrap up, is there anything else you'd like to share about AI in your organization? Any additional comments, insights, or topics we haven't covered that you think would be valuable to discuss?"
    }
  },
})
