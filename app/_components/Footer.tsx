import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex flex-col justify-around items-center w-full min-h-36 bg-background text-slate-400'>
            <div className='flex flex-col justify-center items-center'>
                <p>© 2024 Marshal Burton</p>
            </div>
        </div>
    );
};

export default Footer;