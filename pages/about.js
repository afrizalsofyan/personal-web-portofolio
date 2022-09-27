import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout child={
        <>
            <div className='w-full bg-banner'>
                <div className='flex justify-center min-h-screen'>
                    <div className='w-[700px] mt-40'>
                        <div className='flex flex-col items-center gap-10 leading-8'>
                            <div className='text-[#EFFFFD] text-2xl font-light'>
                                <span tex>About Me</span>
                            </div>
                            <div className='text-[#EFFFFD] font-extralight text-center'>
                                <span>{'A Fullstack Web Developer with an educational background in Informatics Engineering at Sumatra Institute of Technology. Have a curiosity about technology, especially in programming field.'}</span>
                            </div>
                        </div>
                        <div className='mt-20 grid grid-cols-7'>
                            <div className=''>
                                <span className='text-[#EFFFFD] text-lg font-bold'>Skills :</span>
                            </div>
                            <div className='col-span-6'>
                                <span className='text-[#EFFFFD] text-lg font-bold'>Skills</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    } />
  )
}

export default About