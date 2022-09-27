
import ImgProfile from '../public/assets/images/my-img.png';
import {MdArrowForwardIos} from 'react-icons/md'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NavbarMenu from './Navbar';

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
}

const HomeComponenet = () => {
    return(
        <>
            <header className='min-h-screen w-full relative bg-gradient-to-br from-[#42C2FF] to-[#85F4FF]'>
                <motion.div
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    className="box"
                >
                    <NavbarMenu/>    
                    <main className='w-full min-h-screen grid content-end'>
                        <div className='grid grid-cols-2'>
                            <div className='flex flex-col pl-14'>
                                <span className='text-left font-bold text-4xl leading-relaxed text-white'>Welcome To<br/>My Personal Website</span>
                                <span className='text-[#EFFFFD] font-bold text-xl pt-10 flex gap-3 items-center mb-3'><span className='animate-pulse'><MdArrowForwardIos/></span><span>Afrizal Sofyan Afaandi</span></span>
                                <span className='text-[#EFFFFD] font-light text-base'><span>Fullstack Developer</span></span>
                            </div>
                            <div className='flex px-5'>
                                <div className='w-full '>
                                    <Image src={ImgProfile} alt='my-image' objectPosition={'top'} objectFit='cover' width={400} height={300} layout='responsive' loading='lazy' />
                                </div>
                            </div>
                        </div> 
                    </main>
                </motion.div>
            </header>
        </>
    )
}

export default HomeComponenet;