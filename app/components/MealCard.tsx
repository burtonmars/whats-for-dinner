'use client';

import React from 'react';
import ViewMealModal from './ViewMealModal';

interface MealCardProps {
    meal: {
        id: number;
        mainTitle: string;
        secondaryTitle: string;
        imagePath: string;
        tags: string[];
        ingredients: string[];
        notes: string;
    },
    saveNotes: any;
}

const MealCard = ({meal, saveNotes}: MealCardProps) => {
  return (
    <div  className="card w-96 h-96 bg-base-100 shadow-xl">
        {/* todo: add image path */}
        <figure><img src="/Mac-and-Cheese.webp" alt="mac and cheese" /></figure>
        <div className="card-body max-h-54">
            <h2 className="card-title">{meal.mainTitle}</h2>
            <h3>{meal.secondaryTitle}</h3>
            <div className='h-16 mt-2'>
                <ul>
                    {meal.tags.map(tag => 
                        <li className='badge mx-1'>{tag}</li>
                    )}
                </ul>
            </div>
            <div className="card-actions justify-end">
                <div>
                <button className="btn btn-secondary" onClick={()=>(document.getElementById('view_meal_modal') as HTMLDialogElement)?.showModal()}>
                    view meal
                </button>
                <dialog id="view_meal_modal" className="modal">
                    <ViewMealModal meal={meal} saveNotes={saveNotes}/>
                </dialog>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MealCard;