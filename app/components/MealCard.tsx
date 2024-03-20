import React from 'react';
import ViewMealButton from './ViewMealButton';

interface MealCardProps {
    id: number;
    mainTitle: string;
    secondaryTitle: string;
    imagePath: string;
    tags: string[];
    ingredients: string[];
    notes: string;
}

const MealCard = (props: {meal: MealCardProps}) => {
  return (
    <div  className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure><img src="/Mac-and-Cheese.webp" alt="mac and cheese" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.meal.mainTitle}</h2>
            <h3>{props.meal.secondaryTitle}</h3>
            <div>
                <ul>
                    {props.meal.tags.map(tag => 
                        <li className='badge mx-1'>{tag}</li>
                    )}
                </ul>
            </div>
            <div className="card-actions justify-end">
            <ViewMealButton />
        </div>
  </div>
    </div>
  );
};

export default MealCard;