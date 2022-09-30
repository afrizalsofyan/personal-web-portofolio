import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import porto from '../porto.json';

function Portofolio() {
  const dataPorto = porto;
  return (
    <Layout child={
        <div className='grid grid-row-2 bg-[#42C2FF] w-full min-h-screen py-28'>
          <div className='grid grid-cols-3 place-content-center gap-y-10 text-cyan-800'>
            {dataPorto.map((e, i) => {
              return(
                <>
                  <Card src={e.images[0]} title={e.title} images={e.images} key={'key '+i} desc={e.details} fetech={e.tech['front-end']} betech={e.tech.backend} tooltech={e.tech.tools} dbtech={e.tech.database} publishLink={e.publication} repositoryLink={e.repository} />
                </>
              )
            })}
              {/* <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1663849417/next-dashboard_hay6jf.png'} title='OurPocket - Next Js' />
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1663340648/Screenshot_2022-09-15-21-15-21-920_com.ourpocket_fjmpgc.jpg'} title='OurPocket - React Native' /> */}
          </div>
          {/* <div className='grid grid-cols-3 place-content-center'>
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1663334689/react-home2_y5sihc.png'} title={'OurPocket - React Js'} images={reactImg} />
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1663849417/next-dashboard_hay6jf.png'} title='OurPocket - Next Js' />
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1663340648/Screenshot_2022-09-15-21-15-21-920_com.ourpocket_fjmpgc.jpg'} title='OurPocket - React Native' />
          </div>
          <div className='grid grid-cols-3 place-content-center'>
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1664533522/screencapture-ifenisha-store-vercel-app-cart-2022-09-26-13_50_45_kitlqy.png'} title={'Ifenisha Store - Next Js'} />
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1664534014/df5c6d2f-35c9-40f6-8bbb-6e4578c5a6d6_ycgazx.png'} title='OurPocket backend - Node Js / Express Js' />
              <Card src={'https://res.cloudinary.com/asadev619/image/upload/v1664534014/df5c6d2f-35c9-40f6-8bbb-6e4578c5a6d6_ycgazx.png'} title='Ifenisha backend - Node Js / Express Js' />
          </div> */}
        </div>
    } />
  )
}

export default Portofolio