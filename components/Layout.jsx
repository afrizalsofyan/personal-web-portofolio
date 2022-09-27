import NavbarMenu from "./Navbar";
import React from "react";
import { motion } from 'framer-motion';

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
}

const Layout = ({child}) => {
    
  // const [heightWindow, setHeightWindow] = React.useState('');
  // const [bgTransparent, setBgTransparent] = React.useState(0);
  // const [colorText, setColorText] = React.useState(0);
  // const [paddingNav, setPaddingNav] = React.useState(30);
  // const [boxShaddowNav, setBoxShaddowNav] = React.useState(0);

  // const handleScrollWindow = () => {
  //   setHeightWindow(window.scrollY)
  // }
  // React.useEffect(()=> {
  //   let countBgTransparent = heightWindow/300;
  //   setColorText(countBgTransparent)
  //   if (countBgTransparent < 1) {
  //     let paddVar = 30 - countBgTransparent * 20;
  //     let boxShaddowVar = countBgTransparent * 0.1;
  //     //  let colorTextVar = countBgTransparent
  //      setBgTransparent(countBgTransparent);
  //      setPaddingNav(paddVar);
  //      setBoxShaddowNav(boxShaddowVar);
  //   }
  //   window.addEventListener('scroll', handleScrollWindow)
  //   return () => window.removeEventListener('scroll', handleScrollWindow, null)
  // }, [heightWindow])
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