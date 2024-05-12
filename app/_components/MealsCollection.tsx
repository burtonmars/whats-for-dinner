'use client';

import React, { useState, useEffect } from 'react'

import MealCard from './MealCard'
import { deleteMeal } from '../_lib/data'
import { Meal } from '../_lib/definitions'

interface MealsCollectionProps {
    meals: Meal[]
    tag: string | null
}

const MealsCollection = ({ meals, tag }: MealsCollectionProps) => {
  const focussedTag = tag ? tag : null;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (meals.length > 0) {
        setLoading(false);
    }
  }, [meals]);

  return (
    <>
        {loading ? 
        <div className='flex my-36 h-96 justify-center items-center'>
            <span className="loading loading-ring loading-lg"></span>
        </div> : 
        <>
            <div className='flex md:hidden flex-col justify-center items-center'>
                {meals.map((meal: Meal) => <MealCard
                    key={meal.id}
                    meal={meal}
                    deleteMeal={deleteMeal}
                    focussedTag={focussedTag} />
                )}
            </div><div className="hidden w-full h-full md:flex justify-center">
                <div className='w-full xl:w-4/5 lg:mt-36 grid justify-center gap-12'>
                    <div className='grid grid-cols-mealCards md:grid-cols-mealCardsMd xl:grid-cols-mealCardsXl gap-y-10 xl:gap-y-16 w-fit'>
                        {meals.map((meal: Meal) => <MealCard
                            key={meal.id}
                            meal={meal}
                            deleteMeal={deleteMeal}
                            focussedTag={focussedTag} />
                        )}
                    </div>
                </div>
            </div>
        </>}
    </>
  )
}

export default MealsCollection