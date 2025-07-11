import { tool } from 'ai'
import { z } from 'zod'

export const MoveOnTool = tool({
  description: `Use this tool when the user indicates they don't know about a current topic and want to move on.
  
  Call this tool when the user says phrases like:
  - "I don't know about this topic"
  - "I'm not familiar with this"
  - "Skip this question"
  - "Move on to the next topic"
  - "I don't have information about this"
  - Similar phrases indicating they want to skip the current topic
  
  This tool returns control to the system prompt and advances to the next tool/topic.`,

  parameters: z.object({
    current_topic: z.string().describe('The current topic being discussed that the user wants to skip'),
  }),

  execute: async ({ current_topic }) => {
    // Return a response that acknowledges the skip and moves on
    return {
      status: "moved_on",
      message: `No problem! We'll skip the topic about ${current_topic} and move on to the next area of discussion.`
    }
  },
})
