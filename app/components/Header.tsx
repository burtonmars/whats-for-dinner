'use client';

import React, { useState } from 'react';
import AddMeanModal from './AddMealModal';
import { Head } from 'next/document';

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
    <div className="navbar flex-col md:flex-row max-w-4xl">
        <div className="flex-1">
            <div>
              <button className="btn btn-primary" onClick={openAddMealModal}>
                  new meal
              </button>
              <dialog id="view_meal_modal" className="modal" open={showModal}>
                  <AddMeanModal saveNewMeal={saveNewMeal} closeAddMealModal={closeAddMealModal} />
              </dialog>
            </div>
          </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">what's for dinner?</a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    </div>
  )
}

export default Header;