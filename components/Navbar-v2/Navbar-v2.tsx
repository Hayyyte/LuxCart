"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const NavbarV2 = () => {

    const [hoveredId, setHoveredId] = useState('none');

    const handleMouseEnter = (id: string) => {
      setHoveredId(id);
    };
  
    const handleMouseLeave = () => {
      setHoveredId('none');
    };

    return (
        <nav className='grid grid-cols-2 text-xl'>
            <ul className='flex flex-col'>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('Gifts') } onMouseLeave={handleMouseLeave}>
                    <Link href="/gifts">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Gifts</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('New') } onMouseLeave={handleMouseLeave}>
                    <Link href="/new">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>New</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/women">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Women</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/men">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Men</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/jewelry">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Jewelry</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/watches">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Watches</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/perfumes">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Perfumes</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/makeup">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Makeup</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/services">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Services</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={handleMouseLeave}>
                    <Link href="/">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Lux</span>
                        </div>
                    </Link>
                </li>
            </ul>

            {hoveredId == 'Gifts' && (
            <ul className='flex flex-col' onMouseEnter={ () => handleMouseEnter('Gifts') }>
                <p className='w-full py-2'>
                    <Link href="/gifts/for-her">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>For Her</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/for-him">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>For Him</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/bespoke">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Bespoke Gifts</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/designer-sets">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Designer Sets</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/opulent-gadgets">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>Opulent Gadgets</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
            </ul>)}
            
            {hoveredId == 'New' && (
            <ul className='flex flex-col' onMouseEnter={ () => handleMouseEnter('New') }>
                <p className='w-full py-2'>
                    <Link href="/new/for-her">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>For Her</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/new/for-him">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>For Him</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/new/essentials">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>New Essentials</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
            </ul>)}
            
            {hoveredId == 'wip' && (
            <ul className='flex flex-col' onMouseEnter={ () => handleMouseEnter('wip') }>
                <p className='w-full py-2'>
                    <Link href="/gifts/wip">
                        <div className='flex justify-between'>
                            <span className='hover-underline'>WIP</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
            </ul>)}

        </nav>
    );
}
 
export default NavbarV2;