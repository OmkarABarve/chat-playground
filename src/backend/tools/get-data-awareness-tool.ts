import { tool } from 'ai'
import { z } from 'zod'

const SecurityInfo = z.object({
  restricted_access: z.boolean().describe('Whether there is restricted access to data'),
  encryption: z.boolean().describe('Whether data is encrypted'),
  anonymization: z.boolean().describe('Whether data is anonymized'),
  activity_tracking: z.boolean().describe('Whether user activity is tracked'),
  legal_compliance: z.boolean().describe('Whether legal compliance measures are in place'),
  backups: z.boolean().describe('Whether data backups are maintained'),
  recovery_plan: z.boolean().describe('Whether there is a data recovery plan'),
})

export const GetDataAwarenessTool = tool({
  description: `Use this tool to gather information about data awareness and security practices.
  
  This tool should collect:
  - Data readiness level
  - Data organization practices
  - Security measures in place
  - Compliance and backup procedures
  
  This helps understand the organization's data maturity and security posture.`,

  parameters: z.object({}),

  execute: async ({}) => {
    // Return a structured response that prompts for data awareness information
    return {
      data_readiness: null,
      organization: null,
      security: {
        restricted_access: null,
        encryption: null,
        anonymization: null,
        activity_tracking: null,
        legal_compliance: null,
        backups: null,
        recovery_plan: null,
      },
      prompt: "Let's discuss your organization's data practices and security:\n1. How would you describe your organization's data readiness level?\n2. How is your data organized and managed?\n3. Regarding security measures:\n   - Do you have restricted access controls?\n   - Is your data encrypted?\n   - Do you anonymize sensitive data?\n   - Do you track user activity?\n   - Are you compliant with legal requirements?\n   - Do you maintain regular backups?\n   - Do you have a data recovery plan?"
    }
  },
})
