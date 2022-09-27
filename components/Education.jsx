import React from 'react'

const Education = () => {
  return (
    <>
        <div className='py-20 px-10'>
            <div className='flex justify-center'>
                <span className='text-5xl border-b-2 border-cyan-600 font-medium pb-4 text-cyan-600'>Education</span>
            </div>
            <div className='text-xl'>
                <span>{'Fazztrack - (Juni 2018 - juli 2019)'}</span>
            </div>
            <div className='text-medium'>
                <span>{'Frontend'}</span>
                {/* <span>{'Juni 2018 - juli 2019'}</span> */}
            </div>
            <div className='text-sm'>
                <ol className='list-disc'>
                    <li>aa</li>
                </ol>
            </div>
        </div>
    </>
  )
}

export default Education