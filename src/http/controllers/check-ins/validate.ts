import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeValidadeCheckInUseCase } from '@/use-cases/factories/make-validate-check-in'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckInParamsSchema.parse(request.params)

  const validateCheckInUseCase = makeValidadeCheckInUseCase()

  await validateCheckInUseCase.execute({ checkInId })

  return reply.status(204).send()
}
