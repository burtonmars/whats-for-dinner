import React, { useState } from 'react';

import { Meal } from '../lib/definitions';

interface MealModalProps {
    meal: Meal;
    saveNotes: any;
    closeModal: () => void;
}

const ViewMealModal = ({ meal, saveNotes, closeModal }: MealModalProps) => {
    const [notes, setNotes] = useState(meal.notes);
    const [saving, setSaving] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(event.target.value);
    };

    const handleSave = async () => {
        setSaving(true);
        await saveNotes(meal.id, notes);
        setSaving(false);
        closeModal();
    };

  return (
    <div className="modal-box max-w-none w-8/12 md:w-6/12 xl:w-4/12">
        <form className='mb-4' method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
        </form>
        {/* todo: add image path */}
        <figure><img className='rounded-t-xl max-h-72 w-full object-cover' src={'/Mac-and-Cheese.webp'} alt={meal.mainTitle} /></figure>
        <h2 className='text-xl mt-3 font-bold'>{meal.mainTitle}</h2>
        <h3 className='text-base mb-3'>{meal.secondaryTitle}</h3>
        <div className='my-3'>
            <ul>
                {meal.tags.map((tag) => 
                    <li key={tag} className='badge mx-1 h-6 bg-accent border-none font-semibold'>{tag}</li>
                )}
            </ul>
        </div>
        <div className='my-3'>
            <h3 className='font-semibold'>Ingredients</h3>
            <ul className='text-sm list-disc mx-4'>
                {meal.ingredients.map((ingredient) => 
                    <li key={ingredient} className='mx-1'>{ingredient}</li>
                )}
            </ul>
        </div>
        <form>
            <div className='flex flex-col'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">notes</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" id='meal_modal_notes' value={notes} onChange={handleChange}></textarea>
                </label>
                <div className='flex justify-end mt-6'>
                    <button type='submit' onClick={handleSave} className='btn btn-primary w-24' disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default ViewMealModal;