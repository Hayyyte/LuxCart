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
                            <span className='hover-underline menu-item'>Gifts</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('New') } onMouseLeave={handleMouseLeave}>
                    <Link href="/new">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>New</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('Women') } onMouseLeave={handleMouseLeave}>
                    <Link href="/women">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Women</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/men">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Men</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/jewelry">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Jewelry</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/watches">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Watches</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/perfumes">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Perfumes</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/makeup">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Makeup</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={ () => handleMouseEnter('wip') } onMouseLeave={handleMouseLeave}>
                    <Link href="/services">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Services</span>
                            <span>&gt;&nbsp;&nbsp;</span>
                        </div>
                    </Link>
                </li>
                <li className='py-2' onMouseEnter={handleMouseLeave}>
                    <Link href="/">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Lux</span>
                        </div>
                    </Link>
                </li>
            </ul>

            {hoveredId == 'Gifts' && (
            <ul className='flex flex-col' onMouseEnter={ () => handleMouseEnter('Gifts') }>
                <p className='w-full py-2'>
                    <Link href="/gifts/for-her">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>For Her</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/for-him">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>For Him</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/bespoke">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Bespoke Gifts</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/designer-sets">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Designer Sets</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/gifts/opulent-gadgets">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Opulent Gadgets</span>
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
                            <span className='hover-underline menu-item'>For Her</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/new/for-him">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>For Him</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/new/essentials">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>New Essentials</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
            </ul>)}
            
            {hoveredId == 'Women' && (
            <ul className='flex flex-col' onMouseEnter={ () => handleMouseEnter('Women') }>
                <p className='w-full py-2'>
                    <Link href="/women/bags">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Bags</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/women/beauty">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Beauty</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/women/dresses">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Dresses</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/women/jewelry">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Jewelry</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
                <p className='w-full py-2'>
                    <Link href="/women/shoes">
                        <div className='flex justify-between'>
                            <span className='hover-underline menu-item'>Shoes</span>
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
                            <span className='hover-underline menu-item'>WIP</span>
                            <span>&nbsp;</span>
                        </div>
                    </Link>
                </p>
            </ul>)}

        </nav>
    );
}
 
export default NavbarV2;