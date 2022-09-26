import { motion } from 'framer-motion';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo_style, nav_style } from '../styles/constant';

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
}

export default function Home() {
  const [heightWindow, setHeightWindow] = React.useState('');
  const [bgTransparent, setBgTransparent] = React.useState(0);
  const [colorText, setColorText] = React.useState(0);
  const [paddingNav, setPaddingNav] = React.useState(30);
  const [boxShaddowNav, setBoxShaddowNav] = React.useState(0);

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
  
  return (
    <>
      <Head>
        <title>Afrizal Sofyan A</title>
      </Head>
      <header className='min-h-screen w-full relative bg-gradient-to-br to-cyan-300 from-blue-600'>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="box"
      >
        <nav className='h-28 w-full backdrop-blur-lg shadow-inner fixed z-10' style={nav_style(bgTransparent, paddingNav, boxShaddowNav, colorText)}>
          <div className='grid grid-cols-3 content-center h-full'>
            <div className='flex justify-center'>
              <div className='px-2' style={logo_style(colorText)}>
                <span className='text-4xl font-bold'>ASA</span>
              </div>
            </div>
            <div className='col-span-2 h-full'>
              <div className='grid grid-cols-3 h-full'>
                <div className='col-start-2 col-end-5 flex justify-evenly items-center font-bold'>
                  <Link href={'#'}><a className='hover:text-cyan-100 hover:border-b-2 hover:border-cyan-300'>Home</a></Link>
                  <Link href={'#'}><a className='hover:text-cyan-100 hover:border-b-2 hover:border-cyan-300'>About</a></Link>
                  <Link href={'#'}><a className='hover:text-cyan-100 hover:border-b-2 hover:border-cyan-300'>Portofolio</a></Link>
                  <Link href={'#'}><a className='hover:text-cyan-100 hover:border-b-2 hover:border-cyan-300'>Blog</a></Link>
                  <Link href={'#'}><a className='hover:text-cyan-100 hover:border-b-2 hover:border-blue-300'>Contact</a></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className='w-full mt-28 absolute h-full z-0'>
          <div className='grid grid-cols-2'>
            <div className='text-left py-10 font-bold text-4xl leading-relaxed pl-14'>
              <span className='text-white'>Welcome To<br/>My Personal Website</span>
            </div>
            <div className='w-full py-10 px-5 bg-green-400'>a</div>
          </div>          
        </main>
        </motion.div>
      </header>
      <section className='min-h-screen bg-red-700'>

      </section>
    </>
  )
}
