import React from 'react'

const Skill = () => {
  return (
    <>
        <div className='py-20 px-10 text-cyan-800'>
            <div className='flex justify-center'>
                <span className='text-5xl border-b-2 border-cyan-800  font-medium pb-4'>Skill</span>
            </div>
            <div className='flex justify-center pt-20 leading-10'>
                <div className='flex flex-col md:flex-row gap-1 md:gap-28'>
                    <ul className='list-disc'>
                        <li className='text-base font-extralight'>React Js</li>
                        <li className='text-base font-extralight'>Next Js</li>
                        <li className='text-base font-extralight'>Node Js</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='text-base font-extralight'>React Native</li>
                        <li className='text-base font-extralight'>Redux</li>
                        <li className='text-base font-extralight'>Express Js</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='text-base font-extralight'>HTML</li>
                        <li className='text-base font-extralight'>CSS</li>
                        <li className='text-base font-extralight'>Javascript</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='text-base font-extralight'>Tailwind</li>
                        <li className='text-base font-extralight'>Bootstrap</li>
                        <li className='text-base font-extralight'>PostgreSQL</li>
                    </ul>
                    <ul className='list-disc'>
                        <li className='text-base font-extralight'>Github / Bitbucket</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skill