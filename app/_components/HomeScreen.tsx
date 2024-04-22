import React from 'react';

import { Meal } from '../_lib/definitions';
import MealCard from './MealCard';
import { deleteMeal, saveNotes } from '../_lib/data';

interface HomeProps {
    meals: Meal[];
};

const HomeScreen = ({ meals }: HomeProps) => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className='flex flex-col items-center h-[80vh] md:h-4/5 md:grid md:grid-cols-2 
                lg:grid-cols-[500px_minmax(500px,_1fr)_500px]'>
                {meals.map((meal: Meal) => 
                    <MealCard key={meal.id} meal={meal} saveNotes={saveNotes} deleteMeal={deleteMeal}/>)}
            </div>
        </div>
    )
};

export default HomeScreen;