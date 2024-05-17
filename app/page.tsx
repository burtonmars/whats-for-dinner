import React from 'react';

import { fetchMeals } from './_lib/data';
import { Meal } from './_lib/definitions';
import MealsCollection from './_components/MealsCollection';

export default async function Page() {
  const meals: Meal[] = await fetchMeals();
  
  return (
    <div className='w-full h-full mt-10 mb-36 md:mt-0'>
        <MealsCollection meals={meals} tag={null}></MealsCollection>
    </div>
  )
}