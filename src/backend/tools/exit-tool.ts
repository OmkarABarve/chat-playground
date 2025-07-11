import { tool } from 'ai'
import { z } from 'zod'

export const ExitTool = tool({
  description: `Use this tool to immediately end the conversation when the user indicates they want to stop.

  Call this tool when the user says phrases like:
  - "I'm done"
  - "Stop asking questions"
  - "Exit"
  - "Quit"
  - "End conversation"
  - "That's enough"
  - Similar phrases indicating they want to stop

  This tool ends the conversation immediately without further questions.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a response that indicates the conversation has ended
    return {
      status: "exited",
      message: "Thank you for your time! The conversation has been ended as requested. Have a great day!"
    }
  },
})
