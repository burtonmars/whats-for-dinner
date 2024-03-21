import React from 'react';

const Header = () => {
  return (
    <div className="navbar max-w-4xl">
        <div className='flex-1'>
            <button className='btn btn-primary'>new meal</button>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">What's for Dinner?</a>
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