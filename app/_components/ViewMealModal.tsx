import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

import { Meal } from '../_lib/definitions';
import { updateMeal } from '../_lib/data';
import { navigateHome } from '../_lib/actions';

interface MealModalProps {
    meal: Meal;
    closeModal: () => void;
}

const ViewMealModal = ({ meal, closeModal }: MealModalProps) => {
    const [notes, setNotes] = useState(meal.notes);
    const [saving, setSaving] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNotes(event.target.value);
    };

    useEffect(() => {
        setNotes(meal.notes);
    }, [meal])

    const handleSubmit = async () => {
        setSaving(true);
        try {
            meal.notes = notes;
            await updateMeal(meal);
            closeModal();
        }catch (error) {
          console.error("An error occurred:", error);
      } finally {
          setSaving(false);
          await navigateHome();
      }
    };

  return (
    <div className="modal-box max-w-none w-4/5 md:w-2/3 xl:w-4/12 h-full">
        <form className='mb-4' method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
        </form>
        <figure className="w-full h-2/5">
            <Image className="w-full h-full object-cover" cloudName="dv54qhjnt" publicId={meal.imagePath}/>
        </figure>
        <form onSubmit={handleSubmit}>
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
            <div className='flex flex-col'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">notes</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" id='meal_modal_notes' value={notes} onChange={handleChange}></textarea>
                </label>
                <div className='flex justify-end mt-6'>
                    <button type='submit' className='btn btn-primary w-24' disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default ViewMealModal;