import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { Meal, MealTag, mealTags } from '../lib/definitions';

interface AddMealModalProps { 
  saveNewMeal: (newMeal: any) => void;
  closeAddMealModal: () => void;
}

const animatedComponents = makeAnimated();

const AddMealModal = ({saveNewMeal, closeAddMealModal}: AddMealModalProps) => {
  const [tags, setMealTags] = useState<MultiValue<MealTag>>([]);
  const [saving, setSaving] = useState(false);
  const [newMealIngredients, setNewMealIngredients] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');
  const { register, handleSubmit, reset } = useForm<Meal>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNotes(event.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImageToCloudinary = async (image: string | Blob) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ml_default');

    const response = await fetch(`https://api.cloudinary.com/v1_1/dv54qhjnt/image/upload`, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();
        return data.secure_url;
    }

    throw new Error('Image upload failed');
};

  const addIngredient = () => {
    const ingredientInput = document.getElementById('ingredient') as HTMLInputElement;
    if (ingredientInput && ingredientInput.value.trim() !== '') {
      setNewMealIngredients([...newMealIngredients, ingredientInput.value]);
      ingredientInput.value = '';
    }
  };

  
  const onSubmit: SubmitHandler<Meal> = async (newMeal: Meal) => {
    setSaving(true);
    if (imageFile) {
        try {
            const imageUrl = await uploadImageToCloudinary(imageFile);
            console.log(imageUrl)
            newMeal.imagePath = imageUrl;
        } catch (error) {
            console.error(error);
            setSaving(false);
            return;
        }
    }
    newMeal.tags = tags.map((tag: any) => tag.value);
    newMeal.ingredients = newMealIngredients;
    newMeal.notes = notes;
    await saveNewMeal(newMeal);
    resetForm();
    setSaving(false);
    closeAddMealModal();
  };

  const resetForm = () => {
    reset();
    setMealTags([]);
    setNewMealIngredients([]);
    setImageFile(null);
    setNotes('');
  };

  return (
    <div className="modal-box shadow-2xlDark max-w-none w-9/12 md:w-7/12 xl:w-4/12 max-h-none h-5/6 lg:h-4/5">
        <form className='mb-4' method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeAddMealModal}>✕</button>
        </form>
        <div className="flex justify-center text-lg font-bold mb-6">
          <h1>add new meal</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              meal name
              <input type="text" className="grow" id="mainTitle" {...register("mainTitle", { required: true, maxLength: 30 })}/>
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              description
              <input type="text" className="grow" id="secondaryTitle" {...register("secondaryTitle", { required: true, maxLength: 60 })}/>
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <label className="input input-bordered flex items-center gap-2">
              ingredients
              <input type="text" className="grow" id="ingredient"/>
              <button type='button' className='btn btn-accent btn-sm' onClick={addIngredient}>add</button>
            </label>
            <div>
              <ul>
                {newMealIngredients.map((ingredient, index) => 
                  <li key={index}>{ingredient}</li>)}
              </ul>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={mealTags}
              onChange={(tag) => setMealTags(tag as any)}
              value={tags}
              id='tags'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="mealImage" className='mb-2'>image</label>
            <input 
                id="mealImage"
                type="file"
                accept=".jpg, .png, .gif, .jpeg"
                className="file-input file-input-bordered file-input-secondary file-input-sm w-full max-w-xs"
                onChange={handleImageChange}
              />
          </div>
          <div className='flex flex-col'>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">notes</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" id='meal_modal_notes' onChange={handleChange}></textarea>
            </label>
            <div className='flex justify-end mt-6'>
                <button type='submit' className='btn btn-primary w-24' disabled={saving}>{saving ? 'saving...' : 'save'}</button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default AddMealModal;