'use server';

import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

import Header from './_components/Header';
import HomeScreen from './_components/HomeScreen';
import { fetchMeals } from './_lib/data';
import { Meal } from './_lib/definitions';

export default async function Home() {
  const { userId } = auth();
  const meals: Meal[] = await fetchMeals()
    .then(
        (meals) => {
        return meals.reverse();
        }
    );

  return (
   <main className='flex flex-col h-full'>
    <div className='flex justify-center mt-6'>
      <Header userId={userId} />
    </div>
    <SignedOut >
        <div className='flex flex-col w-full h-4/5 justify-center items-center gap-4'>
            <div className='text-2xl'><span className='text-red-500 font-bold'>welcome</span> to what's for dinner!</div>
            <div className='text-2xl'>ready to add dinner ideas to your collection?</div>
            <div className='text-2xl'><span>
              <SignInButton>
                <button className='text-green-500 font-bold'>sign in</button>
              </SignInButton></span> to start</div>
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
