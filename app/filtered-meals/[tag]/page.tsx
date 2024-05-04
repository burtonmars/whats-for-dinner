'use server';

import MealsCollection from '@/app/_components/MealsCollection';
import { fetchMeals } from '@/app/_lib/data';
import { Meal } from '@/app/_lib/definitions';

import React from 'react';

export default async function Page({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag);
  const meals: Meal[] = await fetchMeals();
  const filteredMeals = meals.filter(meal => meal.tags.includes(tag));
  
  return (
    <div className='flex flex-col items-center w-full h-full mt-10 md:mt-0'>
        <MealsCollection meals={filteredMeals} tag={tag}></MealsCollection>
    </div>
  )
}