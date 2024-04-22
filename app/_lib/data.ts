'use server'

import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'
import { Meal } from './definitions'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function fetchMeals() {
  const { userId } = auth()
  if (userId) {
    const meals = await prisma.meal.findMany({
      where: {
        userId: userId,
      },
    })
    return meals
  } else {
    console.error('Error fetching meals: User not signed in')
    return []
  }
}

export async function saveNotes(id: number, notes: string): Promise<void> {
  try {
    await prisma.meal.update({
      where: {
        id: id,
      },
      data: {
        notes: notes,
      },
    })
  } catch (error) {
    console.error('Error saving notes:', error)
  }
}

export async function saveNewMeal(meal: Meal): Promise<void> {
  const { userId } = auth()
  if (!meal.imagePath) {
    meal.imagePath =
      'https://res.cloudinary.com/dv54qhjnt/image/upload/v1713567949/pexels-yente-van-eynde-1263034-2403392_nv2ihw.jpg'
  }

  if (userId) {
    try {
      await prisma.meal.create({
        data: {
          userId: userId,
          mainTitle: meal.mainTitle,
          secondaryTitle: meal.secondaryTitle,
          imagePath: meal.imagePath,
          tags: meal.tags,
          ingredients: meal.ingredients,
          notes: meal.notes,
        },
      })
    } catch (error) {
      console.error('Error saving new meal:', error)
    }
  } else {
    console.error('Error saving new meal: User not signed in')
  }
}

export async function deleteMeal(mealId: number): Promise<void> {
  try {
    await prisma.meal.delete({
      where: {
        id: mealId,
      },
    })
  } catch (error) {
    console.error('Error deleting meal:', error)
  }
}
