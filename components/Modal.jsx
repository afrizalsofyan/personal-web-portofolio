import Image from 'next/image'
import React from 'react'
import { FiX } from 'react-icons/fi'

function ModalDetails({showModal, onHide, title, images, desc, fetech, betech, dbtech, tooltech, publishLink, repositoryLink}) {
  const [imgPreview, setImgPreview] = React.useState(images[0]);
  console.log(images)
  return (
    <>
        {showModal ? 
            <>
                <div className='absolute z-10 w-full min-h-full backdrop-blur-sm top-0 flex  justify-center bg-black/75' onClick={onHide}>
                </div> 
                <div className='absolute z-20 w-full col-span-3 flex flex-col justify-center items-center top-0 py-5 text-cyan-800'>
                    <div className='w-2/3 bg-white flex flex-col gap-10 modal-custom overflow-auto h-[850px] shadow-md shadow-gray-600 px-10'>
                        <div className='grid grid-cols-4 mt-9'>
                            <div className='col-span-3 flex justify-end items-center'>
                                <span className='text-center text-4xl'>{title}</span>
                            </div>
                            <button className='flex justify-end items-center' onClick={onHide}>
                                <FiX size={32}/>
                            </button>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={imgPreview} width={600} height={400} objectFit='contain' />
                        </div>
                        <div className='flex justify-center gap-5'>
                            {images?.map((e, i) => {
                                return(
                                    <button onClick={()=>setImgPreview(e)} className='shadow-sm'>
                                        <Image key={'key '+i} src={e} width={250} height={250} objectFit='cover' />
                                    </button>
                                )
                            })}
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-lg'>Description</span>
                            <p className='mt-5'>{desc}</p>
                        </div>
                        <div className='flex gap-10'>
                            <span className='font-semibold text-lg'>Tech</span>
                            <div className='flex flex-col gap-5'>
                                <div className='mt-1'>
                                    <span className='font-semibold'>front-end</span>
                                    <ol className='list-disc ml-10 grid grid-cols-4 gap-x-10 gap-y-3 mt-3'>
                                        {fetech?.map((e, i) => {
                                            return(
                                                <>
                                                    <li key={'key : '+i}>{e}</li>
                                                </>
                                            )
                                        })}
                                    </ol>
                                </div>
                                <div>
                                    <span className='font-semibold'>backend-end</span>
                                    <ol className='list-disc ml-10 grid grid-cols-4 gap-x-10 gap-y-3 mt-3'>
                                        {betech?.map((e, i) => {
                                            return(
                                                <>
                                                    <li key={'key : '+i}>{e}</li>
                                                </>
                                            )
                                        })}
                                    </ol>
                                </div>
                                <div>
                                    <span className='font-semibold'>tools</span>
                                    <ol className='list-disc ml-10 grid grid-cols-4 gap-x-10 gap-y-3 mt-3'>
                                        {tooltech?.map((e, i) => {
                                            return(
                                                <>
                                                    <li key={'key : '+i}>{e}</li>
                                                </>
                                            )
                                        })}
                                    </ol>
                                </div>
                                <div className='flex gap-5'>
                                    <span className='font-semibold'>database</span>
                                    <span>{dbtech}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <span className='font-semibold text-lg'>Publish : </span>
                            <a href={`${publishLink}`} target={'_blank'}>{publishLink}</a>
                        </div>
                        <div className='flex gap-5 pb-10'>
                            <span className='font-semibold text-lg'>Repository</span>
                            <div>
                                <div className='flex gap-5'>
                                    <span className='font-medium'>front-end : </span>
                                    <a href={`${repositoryLink['front-end']}`} target={'_blank'}>{repositoryLink['front-end']}</a>
                                </div>
                                <div className='flex gap-5'>
                                    <span className='font-medium'>backend-end : </span>
                                    <a href={`${repositoryLink['back-end']}`} target={'_blank'}>{repositoryLink['back-end']}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        : null}
        {/* <div className=''>
        </div> */}
    </>
  )
}

export default ModalDetails