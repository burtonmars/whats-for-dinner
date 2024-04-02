'use client';

import React, { useState } from 'react';
import { Image } from 'cloudinary-react';

import ViewMealModal from './ViewMealModal';
import { Meal } from '../lib/definitions';

interface MealCardProps {
    meal: Meal;
    saveNotes: any;
    deleteMeal: any;
}

const MealCard = ({meal, saveNotes, deleteMeal}: MealCardProps) => {
    const [showModal, setShowModal] = useState(false);
    const [saving, setSaving] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
        
    const handleDelete = async () => {
        setSaving(true);
        await deleteMeal(meal.id);
        setSaving(false);
        closeModal();
    };
    
  return (
    <div className="card card-compact mb-12 md:mb-0 mx-12 w-64 lg:w-96 h-4/6 bg-base-100 shadow-xl">
        <figure className="w-full h-4/5 overflow-hidden">
            <Image className="w-full h-full object-cover" cloudName="dv54qhjnt" publicId={meal.imagePath}/>
        </figure>
        <div className="card-body h-full flex flex-col justify-around">
            <div className="truncate">
                <h2 className="card-title truncate">{meal.mainTitle}</h2>
                <h3>{meal.secondaryTitle}</h3>
            </div>
            <div className='h-24 mt-2'>
                <ul className='h-full flex flex-wrap'>
                    {meal.tags.map((tag) => 
                        <li key={tag} className='badge mx-1 h-6 bg-accent border-none'>{tag}</li>
                    )}
                </ul>
            </div>
            <div className="card-actions">
                <div className='flex w-full justify-between'>
                    <button onClick={handleDelete} className='btn btn-outline btn-error w-24' disabled={saving}>delete</button>
                    <button className="btn btn-secondary w-30" onClick={openModal}>view meal</button>
                    <dialog id="view_meal_modal" className="modal" open={showModal}>
                        <ViewMealModal meal={meal} saveNotes={saveNotes} closeModal={closeModal} />
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MealCard;