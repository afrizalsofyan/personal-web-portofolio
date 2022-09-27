import NavbarMenu from "./Navbar";
import React from "react";
import { motion } from 'framer-motion';

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
}

const Layout = ({child}) => {
  
    return(
        <>
            <main className='min-h-screen w-full relative'>
                <motion.div
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
                    className="box"
                >
                    <NavbarMenu/>    
                    {child}
                </motion.div>
            </main>
        </>
    )
}

export default Layout;