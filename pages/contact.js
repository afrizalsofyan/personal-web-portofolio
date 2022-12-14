import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import SvgBg from '../public/assets/images/shape-bg.svg'
import about from '../about.json'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

function Contact() {
  const contactData = about.contact;
  const typeContact = ['email', 'phone', 'github', 'linkedin']
  const iconContact = [<FiMail/>, <FiPhone/>, <FiGithub/>, <FiLinkedin/>]
  const valueContact = [contactData.email, contactData.phone, contactData.github, contactData.linkedin]
  return (
    <Layout child={
      <div className='bg-[#42C2FF] w-full min-h-screen flex items-end z-0'>
        <Image src={SvgBg} alt='bg-content' />
        <div className='absolute flex flex-col w-full h-full justify-center items-center gap-10'>
            <span className='text-3xl font-semibold text-gray-100'>Connect with me</span>
            <div className='bg-white md:w-[500px] h-[300px] rounded-3xl border-2 border-cyan-600 shadow-lg'>
              <div className='flex flex-col justify-center items-start h-full gap-5 p-10 text-cyan-800 font-medium'>
                {typeContact.map((e, i) => {
                  return(
                    <div className='grid grid-cols-12' key={'key contact '+i}>
                      <div className='flex items-center'>
                        <div key={'icon key'+i}>
                          {iconContact[i]}
                        </div>
                      </div>
                      <span className='col-start-2 col-end-3'>{e}</span>
                      <a key={'value key'+i} href={`${valueContact[i].includes('gmail') ? `https://mail.google.com/mail/?view=cm&fs=1&to=${valueContact[i]}` : `https://${valueContact[i]}` }`} className='col-start-5 col-end-13' target="_blank" rel='noreferrer'>{valueContact[i]}</a>
                    </div>
                  )
                })}
              </div>
            </div>
        </div>
      </div>
    }/>
  )
}

export default Contact