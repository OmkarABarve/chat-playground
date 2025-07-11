import { tool } from 'ai'
import { z } from 'zod'

export const GetStrategyAndPlanningTool = tool({
  description: `Use this tool to gather information about AI strategy and planning in the organization.
  
  This tool should collect:
  - AI planning and strategy information
  - Metrics being tracked
  - ROI measurements
  - Future outlook and plans
  - Challenges faced
  - Leadership usage and support
  - Incentives for AI adoption
  
  This helps understand the strategic approach to AI in the organization.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for strategy information
    return {
      planning: null,
      metrics: [],
      roi: null,
      future_outlook: null,
      challenges: [],
      leadership_usage: null,
      incentives: null,
      prompt: "Let's discuss your organization's AI strategy and planning:\n1. Does your organization have a formal AI strategy or planning process?\n2. What metrics do you track to measure AI success?\n3. How do you measure ROI from AI investments?\n4. What's your outlook for AI in the future of your organization?\n5. What challenges have you faced in AI implementation?\n6. How does leadership use and support AI initiatives?\n7. Are there any incentives in place to encourage AI adoption?"
    }
  },
})
