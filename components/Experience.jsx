import React from 'react'
import about from '../about.json'

const Experience = () => {
  const experienceData = about.experience;
  return (
    <>
        <div className='pt-20 px-10 text-cyan-800'>
            <div className='flex justify-center'>
                <span className='text-5xl border-b-2 border-cyan-800 font-medium pb-4'>Experience</span>
            </div>
            <div className='flex flex-col gap-10 pt-20 leading-10'>
                {experienceData.map((e, i) => {
                    return (
                        <div key={'key '+ i}>
                            <div className='text-xl'>
                                <span>{`${e.company} - ${e.city}, ${e.national}`}</span>
                            </div>
                            <div className='text-medium'>
                                <span>{`${e.role}`}</span>
                                <span>{`${e.start_at} - ${e.end_at}`}</span>
                            </div>
                            <div className='text-sm ml-10 mt-3'>
                                <ol className='list-disc leading-7'>
                                    {e.job_desc.map( e => {
                                        return(
                                            <>
                                                <li>{e}</li>
                                            </>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Experience