import React from 'react';

import MealCard from './_components/MealCard';
import { deleteMeal, fetchMeals } from './_lib/data';
import { Meal } from './_lib/definitions';

export default async function Page() {
  const meals: Meal[] = await fetchMeals();
  
  return (
    <div className='w-full h-full mt-10 md:mt-0'>
        <div className='flex md:hidden flex-col justify-center items-center'>
            {meals.map((meal: Meal) =>
                <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal}/>
            )}
        </div>
        <div className="hidden w-full h-full md:flex justify-center">
            <div className='w-full xl:w-4/5 lg:mt-36 grid justify-center gap-12'>
                <div className='grid grid-cols-mealCards md:grid-cols-mealCardsMd xl:grid-cols-mealCardsXl gap-y-10 xl:gap-y-16 w-fit'>
                    {meals.map((meal: Meal) =>
                        <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal}/>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}