import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* logo section---------------------- */}
            <Link to='/' className='inline-flex items-center' >
                <BookOpenIcon className='h-6 w-6 text-blue-500'></BookOpenIcon>
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> nextPage</span>
            </Link>

            {/* Nav Item section------------------ */}
            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/books'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                    >
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}
                    >
                        About us
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Header;