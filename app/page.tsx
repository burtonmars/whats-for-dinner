'use server';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

import Header from './_components/Header';
import HomeScreen from './_components/HomeScreen';
import { fetchMeals } from './_lib/data';
import { Meal } from './_lib/definitions';
import LandingPage from './_components/LandingPage';
import Footer from './_components/Footer';

export default async function Home() {
  const { userId } = auth();
  const meals: Meal[] = await fetchMeals();

  return (
      <main className='flex flex-col h-full'>
        <div className='flex justify-center mt-4 md:mt-6 w-full'>
            <Header userId={userId} meals={meals}/>
        </div>
        <SignedOut >
          <div className='flex justify-center items-center w-full h-full'>
            <LandingPage />
          </div>
        </SignedOut>
        <SignedIn >
            <div className='flex mt-6 w-full'>
                <HomeScreen meals={meals} />
            </div>
        </SignedIn>
        <div className='h-full w-full mt-10'>
          <Footer></Footer>
        </div>
      </main>
  )
}
