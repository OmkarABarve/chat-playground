import { streamText, type CoreMessage } from 'ai'
import { createGoogleAI } from '../config/ai-config.js'
import {
  ConversationCompletionTool,
  ToolUsageGatheringTool,
  GetCompanyInfoTool,
  GetAiProductsToolsUsedTool,
  ConfirmUsageClaimsTool,
  GetImplementedAiUseCasesTool,
  GetDataAwarenessTool,
  GetUnitsDepartmentsUsingAiTool,
  GetStrategyAndPlanningTool,
  GetAdditionalCommentsTool,
  ExitTool,
  MoveOnTool,
} from '../tools/index.js'

export interface IAIChatService {
  generateStreamingResponse(
    messages: CoreMessage[],
    systemPrompt: string,
  ): Promise<unknown>
}

export class AIChatService implements IAIChatService {
  private googleAI

  constructor() {
    this.googleAI = createGoogleAI()
  }

  async generateStreamingResponse(
    messages: CoreMessage[],
    systemPrompt: string,
  ) {
    try {
      const result = streamText({
        model: this.googleAI.model,
        system: systemPrompt,
        messages,
        tools: {
          conversationCompletion: ConversationCompletionTool,
          toolUsageGathering: ToolUsageGatheringTool,
          getCompanyInfo: GetCompanyInfoTool,
          getAiProductsToolsUsed: GetAiProductsToolsUsedTool,
          confirmUsageClaims: ConfirmUsageClaimsTool,
          getImplementedAiUseCases: GetImplementedAiUseCasesTool,
          getDataAwareness: GetDataAwarenessTool,
          getUnitsDepartmentsUsingAi: GetUnitsDepartmentsUsingAiTool,
          getStrategyAndPlanning: GetStrategyAndPlanningTool,
          getAdditionalComments: GetAdditionalCommentsTool,
          exit: ExitTool,
          moveOn: MoveOnTool,
        },
        maxSteps: this.googleAI.config.maxSteps,
      })

      return result
    } catch (error) {
      console.error('Error generating streaming response:', error)
      throw new Error('Failed to generate streaming response')
    }
  }
}


