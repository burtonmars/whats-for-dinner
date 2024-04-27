import React from 'react';

import { Meal } from '../_lib/definitions';
import MealCard from './MealCard';
import { deleteMeal } from '../_lib/data';

interface HomeProps {
    meals: Meal[];
};

const HomeScreen = ({ meals }: HomeProps) => {
    return (
        <div className='w-full h-full'>
            <div className='flex md:hidden flex-col justify-center items-center'>
                {meals.map((meal: Meal) =>
                    <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal}/>
                )}
            </div>
            <div className="hidden w-full h-full md:flex justify-center">
                <div className='w-full xl:w-4/5 mt-12 lg:mt-36 grid justify-center gap-12'>
                    <div className='grid grid-cols-mealCards md:grid-cols-mealCardsMd xl:grid-cols-mealCardsXl gap-y-10 xl:gap-y-16 w-fit'>
                        {meals.map((meal: Meal) =>
                            <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeScreen;