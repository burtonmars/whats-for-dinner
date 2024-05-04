'use client';

import React, { useState } from 'react';
import AddMealModal from './AddMealModal';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import { saveNewMeal } from '../_lib/data';
import { Meal } from '../_lib/definitions';
import SearchBar from './SearchBar';

interface HeaderProps {
    userId: string | null;
    meals: Meal[];
}

const Header = ({ userId, meals }: HeaderProps) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const maxDemoMealCount = 15;
  const pathname = usePathname();

  return (
    <nav className="navbar flex-col md:flex-row w-full justify-around lg:px-16 xl:w-3/4">
        <div className='flex md:hidden justify-center items-center w-full mb-2 px-4'>
            <div className='w-full'>
                <br />
            </div>
            <div className="w-full flex md:hidden justify-center items-center">
                <a className="btn btn-ghost text-2xl">meal spark</a>
            </div>
            <div className='w-full flex md:hidden justify-end'>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
        <div className='flex w-full justify-between my-4 px-4'>
            <div className='flex h-full w-5/6 md:w-full items-center'>
                {pathname === '/' &&
                    <button className="btn btn-primary text-xl" disabled={!userId || meals.length >= maxDemoMealCount} onClick={() => setShowAddModal(true)}>
                        new meal
                    </button>
                }
                {pathname !== '/' && 
                    <div>
                        <Link href="/">Back</Link>
                    </div>
                }
                {meals.length >= maxDemoMealCount && <span className='text-red-500 text-sm ml-2'>You have reached the maximum number of meals for the demo account.</span>}
                <dialog id="add_meal_modal" className="modal" open={showAddModal}>
                    <AddMealModal saveNewMeal={saveNewMeal} closeAddMealModal={() => setShowAddModal(false)} />
                </dialog>
            </div>
            <div className="hidden w-full md:flex justify-center">
                <h1 className="btn btn-ghost text-[2.2rem]">meal spark</h1>
            </div>
            <div className='flex h-full w-full justify-end items-center'>
                <div className='md:mx-8'>
                    <SearchBar meals={meals} userId={userId}/>
                </div>
                <div className='hidden md:flex'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header;