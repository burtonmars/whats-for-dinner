'use client';

import React, { useState } from 'react';
import { Image } from 'cloudinary-react';

import ViewMealModal from './ViewMealModal';
import { Meal } from '../_lib/definitions';
import { navigateHome } from '../_lib/actions';

interface MealCardProps {
    meal: Meal;
    deleteMeal: any;
}

const MealCard = ({meal, deleteMeal}: MealCardProps) => {
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
        try {
            await deleteMeal(meal.id);
        } catch (error) {
            console.error('Error deleting meal:', error);
        } finally {
            navigateHome();
            setSaving(false);
        }
    };
    
  return (
    <div className="card card-compact mb-12 md:mb-0 mx-12 w-5/6 lg:w-96 bg-base-100 shadow-xl h-[550px]">
        <figure className="w-full h-1/2">
            <Image className="w-full h-full object-cover" cloudName="dv54qhjnt" publicId={meal.imagePath}/>
        </figure>
        <div className="card-body flex flex-col justify-between" style={{ height: '40%' }}>
            <div className="truncate">
                <h2 className="card-title truncate">{meal.mainTitle}</h2>
                <h3>{meal.secondaryTitle}</h3>
            </div>
            <div style={{ height: '25%', overflow: 'auto' }}>
                <ul className='flex flex-wrap'>
                    {meal.tags.map((tag) => 
                        <li key={tag} className='badge mx-1 h-6 bg-accent border-none'>{tag}</li>
                    )}
                </ul>
            </div>
            <div className="card-actions mt-2 p-4">
                <div className='flex w-full justify-between'>
                    <form action={navigateHome}>
                        <button onClick={handleDelete} className='btn btn-outline btn-error w-24' disabled={saving}>{saving ? 'deleting...' : 'delete'}</button>
                    </form>
                    <button className="btn btn-secondary w-30" onClick={openModal}>view meal</button>
                    <dialog id="view_meal_modal" className="modal" open={showModal}>
                        <ViewMealModal meal={meal} closeModal={closeModal} />
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MealCard;