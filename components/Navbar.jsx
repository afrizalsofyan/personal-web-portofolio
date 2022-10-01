import React from 'react';
import Link from 'next/link'
import { logo_style, nav_style } from '../styles/constant';
import {FiMenu} from 'react-icons/fi'

const NavbarMenu = () => {
    const menuList = ['Home', 'About', 'Contact', 'Portofolio'];
    const menuLinkTo = ['/', '/about', '/contact', '/portofolio'];
      
    const [heightWindow, setHeightWindow] = React.useState('');
    const [bgTransparent, setBgTransparent] = React.useState(0);
    const [colorText, setColorText] = React.useState(0);
    const [paddingNav, setPaddingNav] = React.useState(30);
    const [boxShaddowNav, setBoxShaddowNav] = React.useState(0);

    const [collapseMenu, setCollapseMenu] = React.useState(false);

    const handleScrollWindow = () => {
        setHeightWindow(window.scrollY)
    }
    React.useEffect(()=> {
        let countBgTransparent = heightWindow/300;
        setColorText(countBgTransparent)
        if (countBgTransparent < 1) {
        let paddVar = 30 - countBgTransparent * 20;
        let boxShaddowVar = countBgTransparent * 0.1;
        //  let colorTextVar = countBgTransparent
        setBgTransparent(countBgTransparent);
        setPaddingNav(paddVar);
        setBoxShaddowNav(boxShaddowVar);
        }
        window.addEventListener('scroll', handleScrollWindow)
        return () => window.removeEventListener('scroll', handleScrollWindow, null)
    }, [heightWindow])
    return(
        <>
            <header>
                <nav className='h-28 w-full backdrop-blur-lg shadow-inner fixed z-10' style={nav_style(bgTransparent, paddingNav, boxShaddowNav, colorText)}>
                    <div className='grid grid-cols-3 content-center h-full'>
                        <div className='flex justify-center'>
                            <div className='px-2'>
                                <span className='text-4xl font-bold logo-style'>ASA</span>
                            </div>
                        </div>
                        <div className='col-span-2 h-full'>
                            <div className='hidden md:grid grid-cols-3 h-full'>
                                <div className='col-start-2 col-end-5 flex justify-evenly items-center font-semibold'>
                                    {menuList.map((e, i) => {
                                        return(
                                            <Link href={menuLinkTo[i]} key={'key '+i}>
                                                <a className='hover:text-[#85F4FF] hover:border-b-2 hover:border-[#85F4FF]'>
                                                    {e}
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='flex md:hidden justify-end mr-10 cursor-pointer' onClick={()=>setCollapseMenu(!collapseMenu)}>
                                <FiMenu size={32}/>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full p-5 text-cyan-600 ${collapseMenu ? 'transition ease-in-out delay-200' : 'transition ease-in-out delay-200 -translate-y-96'}`}>
                        <div className='flex flex-col justify-center items-center gap-6 bg-white p-5 shadow-md'>
                            {menuList.map((e, i) => {
                                return(
                                    <Link href={menuLinkTo[i]} key={'key '+i}>
                                        <a className='hover:text-cyan-400 font-medium text-center'>
                                            {e}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    {/* {collapseMenu ? (
                        <>
                        </>
                    ) : null} */}
                </nav>   
            </header>
        </>
    );
}

export default NavbarMenu;