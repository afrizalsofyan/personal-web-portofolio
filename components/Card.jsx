import Image from 'next/image'
import React from 'react'
import ModalDetails from './Modal';

function Card({src, title, images, desc, fetech, betech, dbtech, tooltech, publishLink, repositoryLink}) {
  const [show, setShow] = React.useState(false);
  return (
    <>
        <div className='flex justify-center' onClick={()=>setShow(true)}>
            <figure className='flex flex-col bg-white p-10 gap-5 rounded-lg shadow-lg'>
                <div className='shadow-xl' >
                    <Image src={src} objectFit={'cover'} width={200} height={200} alt='img-card'/>
                </div>
                <div className='w-[200px]'>
                    <p className='font-semibold truncate'>{title}</p>
                </div>
            </figure>
        </div>
        <ModalDetails showModal={show} onHide={()=>setShow(false)} images={images} title={title} desc={desc} fetech={fetech} betech={betech} dbtech={dbtech} publishLink={publishLink} tooltech={tooltech} repositoryLink={repositoryLink} />
    </>
  )
}

export default Card