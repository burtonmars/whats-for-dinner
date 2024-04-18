'use client';

import React, { useState } from 'react';
import AddMealModal from './AddMealModal';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

interface HeaderProps {
    saveNewMeal: any;
}

const Header = ({saveNewMeal}: HeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const openAddMealModal = () => {
      setShowModal(true);
  };

  const closeAddMealModal = () => {
      setShowModal(false);
  };

  return (
    <nav className="navbar flex-col md:flex-row w-full justify-around lg:px-16 xl:w-3/4">
        <div className="flex-1">
            <div>
              <button className="btn btn-primary" onClick={openAddMealModal}>
                  new meal
              </button>
              <dialog id="view_meal_modal" className="modal" open={showModal}>
                  <AddMealModal saveNewMeal={saveNewMeal} closeAddMealModal={closeAddMealModal} />
              </dialog>
            </div>
        </div>
        <div className="grow flex justify-center items-center">
            <a className="btn btn-ghost text-xl">what's for dinner?</a>
        </div>
        <div className="flex-1">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
        <div className="">
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