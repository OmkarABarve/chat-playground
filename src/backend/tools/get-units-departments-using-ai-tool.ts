import { tool } from 'ai'
import { z } from 'zod'

export const GetUnitsDepartmentsUsingAiTool = tool({
  description: `Use this tool to gather information about which units/departments are using AI.
  
  This tool should collect:
  - Which departments are using AI
  - Level of AI adoption across departments
  - Frequency of AI usage
  - Tasks being automated
  - Dependency on AI tools
  
  This helps understand AI adoption patterns across the organization.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for departments information
    return {
      departments: [],
      adoption_level: null,
      frequency: null,
      tasks_automated: [],
      dependency: null,
      prompt: "Let's explore AI adoption across your organization:\n1. Which departments or units in your organization are currently using AI?\n2. What would you say is the overall level of AI adoption across departments?\n3. How frequently are these departments using AI tools?\n4. What specific tasks are being automated with AI?\n5. How dependent have these departments become on AI tools?"
    }
  },
})
