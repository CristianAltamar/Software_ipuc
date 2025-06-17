import React from 'react';

const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export const Header = () => {
    return(
        <header className='flex justify-between items-center bg-gray-800 text-white p-4 drop-shadow-gray-600 shadow-lg'>
            <h1 className='text-2xl font-bold cursor-pointer hover:text-gray-400 transition-colors'>
                <a href="/">IPUC</a>
            </h1>
            <nav className='flex justify-around w-full max-w-md'>
                {
                    items.map((item) => (
                        <a key={item.name} href={item.href}>
                            <li className='list-none py-2 cursor-pointer hover:text-gray-400 transition-colors'>{item.name}</li>
                        </a>
                    ))
                }
            </nav>
        </header>
    )
}