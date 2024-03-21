'use server';

import Header from './components/Header';
import MealCard from './components/MealCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchMeals() {
  const meals = await prisma.meal.findMany();
  return meals;
}

async function saveNotes(id: number, notes: string): Promise<void> {
  "use server";

  try {
      await prisma.meal.update({
          where: {
              id: id,
          },
          data: {
              notes: notes,
          },
      });
      console.log('Notes saved successfully.');
  } catch (error) {
      console.error('Error saving notes:', error);
  }
}

export default async function Home() {
  const meals = await fetchMeals();

  return (
   <main className='flex flex-col justify-center'>
    <div className='flex justify-center mb-8 mt-3'>
      <Header />
    </div>
    <div className="meals_container bg-slate-100">
      <div className='flex flex-row justify-around'>
        {meals.map((meal, index) => <MealCard key={index} meal={meal} saveNotes={saveNotes} />)} 
      </div>
    </div>
   </main>
  )
}