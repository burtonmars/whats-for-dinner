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
        <div className="flex-1">
            <div>
              <button className="btn btn-primary" disabled={!userId} onClick={openAddMealModal}>
                  new meal
              </button>
              <dialog id="add_meal_modal" className="modal" open={showAddModal}>
                  <AddMealModal saveNewMeal={saveNewMeal} closeAddMealModal={closeAddMealModal} />
              </dialog>
            </div>
        </div>
        <div className="grow flex justify-center items-center">
            <a className="btn btn-ghost text-xl">what's for dinner?</a>
        </div>
        <div className='mx-8'>
            <SearchBar meals={meals} userId={userId}/>
        </div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Header;