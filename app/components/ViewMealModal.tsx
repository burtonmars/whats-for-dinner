import React from 'react';

interface MealModalProps {
    meal: {
        id: number;
        mainTitle: string;
        secondaryTitle: string;
        imagePath: string;
        tags: string[];
        ingredients: string[];
        notes: string;
    }
    saveNotes: any;
}

const ViewMealModal = ({ meal, saveNotes }: MealModalProps) => {
    const handleClick = async () => {
        const notes = (document.getElementById('meal_modal_notes') as HTMLTextAreaElement).value;
        await saveNotes(meal.id, notes);
    };

  return (
    <div className="modal-box max-w-none w-7/12">
        <form className='mb-4' method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {/* todo: add image path */}
        <figure><img className='rounded-t-xl max-h-72 w-full object-cover' src={'/Mac-and-Cheese.webp'} alt={meal.mainTitle} /></figure>
        <h2 className='text-xl mt-3 font-bold'>{meal.mainTitle}</h2>
        <h3 className='text-base mb-3'>{meal.secondaryTitle}</h3>
        <div className='my-3'>
            <ul>
                {meal.tags.map((tag, index) => 
                    <li key={index} className='badge mx-1 bg-accent border-none font-semibold'>{tag}</li>
                )}
            </ul>
        </div>
        <div className='my-3'>
            <h3 className='font-semibold'>Ingredients</h3>
            <ul className='text-sm list-disc mx-4'>
                {meal.ingredients.map((ingredient, index) => 
                    <li key={index} className='mx-1'>{ingredient}</li>
                )}
            </ul>
        </div>
        <form>
            <div className='flex flex-col'>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">notes</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" id='meal_modal_notes' defaultValue={meal.notes}></textarea>
                </label>
                <div className='flex justify-end mt-6'>
                    <button type='submit' onClick={handleClick} className='btn btn-primary w-24'>save</button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default ViewMealModal;