import React, { useState } from 'react';

interface AddMealModalProps { 
  saveNewMeal: (newMeal: any) => void;
  closeAddMealModal: () => void;
}

const AddMeanModal = ({saveNewMeal, closeAddMealModal}: AddMealModalProps) => {
    const [meal, setMealData] = useState({});
    const [saving, setSaving] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMealData(event.target.value);
    };

    const handleClick = async () => {
      setSaving(true);
      let newMeal = {
        mainTitle: (document.getElementById('mainTitle') as HTMLInputElement)?.value,
        secondaryTitle: (document.getElementById('secondaryTitle') as HTMLInputElement)?.value,
        tags: (document.getElementById('tags') as HTMLInputElement)?.value.split(','),
        ingredients: (document.getElementById('ingredients') as HTMLInputElement)?.value.split(','),
        notes: (document.getElementById('meal_modal_notes') as HTMLInputElement)?.value,
      }
      await saveNewMeal(newMeal);
      setSaving(false);
      closeAddMealModal();
    };

    const addIngredient = () => {
      console.log((document.getElementById('ingredient') as HTMLInputElement)?.value);
    }

  return (
    <div className="modal-box shadow-2xlDark max-w-none w-9/12 md:w-7/12 xl:w-4/12 max-h-none h-5/6 lg:h-4/5">
        <form className='mb-4' method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeAddMealModal}>✕</button>
        </form>
        <div className="flex justify-center text-lg font-bold mb-6">
          <h1>add new meal</h1>
        </div>
        <form action="submit">
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              meal name
              <input type="text" className="grow" id="mainTitle"/>
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              description
              <input type="text" className="grow" id="secondaryTitle"/>
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              ingredient
              <input type="text" className="grow" id="ingredient"/>
              <button className='btn btn-accent btn-sm' onClick={addIngredient}>add</button>
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <details className="dropdown">
              <summary className="m-1 btn w-32">tags</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
          </div>
          <div className='flex flex-col mb-4'>
            {/* todo: add image upload functionality */}
            <label htmlFor="mealImage" className='mb-2'>image</label>
            <input id="mealImage" type="file" className="file-input file-input-bordered file-input-secondary file-input-sm w-full max-w-xs" />
          </div>
          <div className='flex flex-col'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">notes</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" id='meal_modal_notes' onChange={handleChange}></textarea>
            </label>
            <div className='flex justify-end mt-6'>
                <button type='submit' onClick={handleClick} className='btn btn-primary w-24' disabled={saving}>{saving ? 'saving...' : 'save'}</button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default AddMeanModal;