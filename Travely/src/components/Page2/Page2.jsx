import React from 'react'
import HeadContent from './HeadContent'
import PopularImages from './PopularImages'

const Page2 = () => {
  return (
    <div className='w-full h-screen p-16 flex justify-center items-center flex-col gap-10'>
        <HeadContent/>
        <PopularImages/>
    </div>
  )
}

export default Page2