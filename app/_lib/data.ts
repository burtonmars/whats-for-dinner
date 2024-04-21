import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchMeals(userId: string) {
  const meals = await prisma.meal.findMany({
    where: {
      userId: userId,
    },
  })
  return meals
}
