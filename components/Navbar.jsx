import React from 'react';
import Link from 'next/link'

const NavbarMenu = () => {
    const menuList = ['Home', 'About', 'Portofolio', 'Blog', 'Contact'];
    const menuLinkTo = ['/', '/about', '#', '#', '#'];
    return(
        <>
            <header>
                <nav className='h-28 w-full backdrop-blur-lg shadow-inner fixed z-10'>
                    <div className='grid grid-cols-3 content-center h-full'>
                        <div className='flex justify-center'>
                            <div className='px-2'>
                                <span className='text-4xl font-bold logo-style text-[#EFFFFD]'>ASA</span>
                            </div>
                        </div>
                        <div className='col-span-2 h-full'>
                            <div className='grid grid-cols-3 h-full'>
                                <div className='col-start-2 col-end-5 flex justify-evenly items-center font-bold'>
                                    {menuList.map((e, i) => {
                                        return(
                                            <Link href={menuLinkTo[i]} key={'key '+i}>
                                                <a className='text-[#EFFFFD] hover:text-[#EFFFF0] hover:border-b-2 hover:border-[#EFFFF0]'>
                                                    {e}
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>                
            </header>
        </>
    );
}

export default NavbarMenu;