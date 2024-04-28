'use client';

import React, { useState } from 'react';
import AddMealModal from './AddMealModal';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { saveNewMeal } from '../_lib/data';
import { Meal } from '../_lib/definitions';
import SearchBar from './SearchBar';

interface HeaderProps {
    userId: string | null;
    meals: Meal[];
}

const Header = ({ userId, meals }: HeaderProps) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const openAddMealModal = () => {
      setShowAddModal(true);
  };

  const closeAddMealModal = () => {
      setShowAddModal(false);
  };

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
                <button className="btn btn-primary text-xl" disabled={!userId} onClick={openAddMealModal}>
                    new meal
                </button>
                <dialog id="add_meal_modal" className="modal" open={showAddModal}>
                    <AddMealModal saveNewMeal={saveNewMeal} closeAddMealModal={closeAddMealModal} />
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