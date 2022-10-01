import React from 'react'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Layout from '../components/Layout'
import Skill from '../components/Skill'

const About = () => {
  return (
    <Layout child={
        <>
            <div className='w-full bg-gradient-to-t from-cyan-200 to-cyan-600 pb-40 rounded-b-3xl md:rounded-b-[70%] shadow-lg'>
                <div className='flex justify-center'>
                    <div className='w-[700px] mt-40'>
                        <div className='flex flex-col items-center gap-10 leading-8'>
                            <div className='text-[#EFFFFD] text-2xl font-light'>
                                <span tex>About Me</span>
                            </div>
                            <div className='text-[#EFFFFD] font-extralight text-center'>
                                <span>{'A Fullstack Web Developer with an educational background in Informatics Engineering at Sumatra Institute of Technology. Have a curiosity about technology, especially in programming field.'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Experience/>
            <Education/>
            <Skill/>
        </>
    } />
  )
}

export default About