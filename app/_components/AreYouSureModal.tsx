import React from 'react'

interface AreYouSureProps {
  handleDelete: () => void;
  setShowDeleteModal: (arg: boolean) => void;
  mealTitle: string;
}

const AreYouSureModal = ({handleDelete, setShowDeleteModal, mealTitle}: AreYouSureProps) => {
  return (
    <div className="flex flex-col modal-box h-1/5 w-4/5 justify-center items-center">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setShowDeleteModal(false)}>✕</button>
      </form>
      <div className='h-5/6 flex flex-col justify-between text-center items-center'>
        <h3 className="font-bold text-lg">are you sure you want delete {mealTitle}?</h3>
        <div className='flex justify-around items-center w-4/5'>
          <button className='btn btn-error' onClick={handleDelete}>delete</button>
          <button className='btn' onClick={() => setShowDeleteModal(false)}>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AreYouSureModal