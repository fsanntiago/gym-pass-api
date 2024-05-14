import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'

export function makeValidadeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const validadeCheckInUseCase = new ValidateCheckInUseCase(checkInsRepository)

  return validadeCheckInUseCase
}
