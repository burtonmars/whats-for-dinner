'use server';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

import Header from './_components/Header';
import HomeScreen from './_components/HomeScreen';
import { fetchMeals } from './_lib/data';
import { Meal } from './_lib/definitions';
import LandingPage from './_components/LandingPage';

export default async function Home() {
  const { userId } = auth();
  const meals: Meal[] = await fetchMeals();

  return (
   <main className='flex flex-col h-full'>
    <div className='flex justify-center mt-6'>
      <Header userId={userId} meals={meals}/>
    </div>
    <SignedOut >
      <div className='flex justify-center items-center w-full h-full'>
        <LandingPage />
      </div>
    </SignedOut>
    <SignedIn>
        <div className='flex justify-center items-center'>
            <HomeScreen meals={meals} />
        </div>
    </SignedIn>
   </main>
  )
}
