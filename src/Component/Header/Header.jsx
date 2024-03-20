// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-600 text-zinc-100 py-4 px-14'>
            <h3 className='text-3xl font-bold'>Software School</h3>
            <button className='text-black bg-lime-600 font-semibold rounded-xl border px-5 py-2'>Login</button>
        </div>
    );
};

export default Header;