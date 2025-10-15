
'use client'
import { jobs } from '@/MockData/data'
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Home() {
  const [jobsData, setJobsData] = useState<any[]>([])

  useEffect(() => {
    setJobsData(jobs)
  }, [])

  return (
    <div className="relative justify-center items-center flex p-2 gap-4 ">
      <div className="absolute w-[98.8%] top-[80px] justify-center items-center p-2 gap-4 ">
        <h1 className="text-3xl font-bold ml-[44%]">Job List</h1>
        <div className='flex gap-4'>
        {jobsData.map((job, index) => (
          <div key={index} className="bg-[#D1D3D4] my-4 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-center justify-between w-full sm:w-[48%] lg:w-[31%]">
            <div className="w-full">

            <div className='flex flex-col sm:flex-row sm:items-start w-full gap-4 items-center'>
            <div className='flex flex-col text-center sm:text-left'>
              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                <h6 className='font-bold'>Job Title:</h6>
                <h6>{job.title}</h6>
              </div>

              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                <h6 className='font-bold'>Company Name:</h6>
                <h6>{job.company}</h6>
              </div>

              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                <h6 className='font-bold'>Location:</h6>
                <h6>{job.location}</h6>
              </div>

              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                <h6 className='font-bold'>Profile Match Score:</h6>
                <h6 className=''>{job.ai_match_score}%</h6>
              </div>
            </div>
            </div>
            
            <div className='m-4 '>
              <Link href={`/jobs/${job.id}`} className='bg-[#476EAE] p-2 rounded-lg ml-[34%]'>View more</Link>
            </div>
            </div>

          </div>
        ))}
        </div>


      </div>
    </div>
  );
}
