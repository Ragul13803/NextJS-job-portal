'use client'
import { useAppliedContext } from '@/utils/JobsContext'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const { appliedJobs }: any = useAppliedContext()
  
  return (
    <div className='absolute w-[98vw] flex justify-between items-center bg-[#FFECC0] h-14 m-3 p-4 rounded-lg'>
      <Link href={'/'} className='font-bold font-sans'>NextJS Job Portal</Link>
      <h6>No of jobs Applied: <span className='p-2 bg-[#F39F9F] rounded-2xl'>{appliedJobs?.length}</span></h6>
    </div>
  )
}

export default Navbar