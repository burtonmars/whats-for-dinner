import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchMeals() {
  const meals = await prisma.meal.findMany()
  return meals
}
