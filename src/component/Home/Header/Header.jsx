import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* logo section */}
            <Link to='/' className='inline-flex items-center' >
                <BookOpenIcon className='h-6 w-6 text-blue-500'></BookOpenIcon>
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> nextPage</span>
            </Link>

            {/* Nav Item section */}
        </div>
    );
};

export default Header;