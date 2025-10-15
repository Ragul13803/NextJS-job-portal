'use client'
import React from 'react'
import { useParams } from "next/navigation";
import { jobs } from "@/MockData/data";
import { Job, useAppliedContext } from '@/utils/JobsContext';

const DetailsPage = () => {
  const { id } = useParams()
  const jobId = Number(id)
  
  const jobContext = useAppliedContext();

  if (!jobContext) {
    return null;
  }
  
  const { appliedJobs, setApplyJob } = jobContext

  const individualJob = jobs.find((job) => job.id === jobId)

  const isAlreadyApplied = appliedJobs?.some((job: Job) => job.id === jobId);

  const applyForJob = () => {
    if(!isAlreadyApplied && individualJob){
      setApplyJob(individualJob);
    }

  }; 

  return (
    <div className="relative justify-center items-center p-2 gap-4 ">
      <div className="absolute w-[98.8%] top-[80px] justify-center items-center p-2 gap-4 ">
      <div className='bg-[#BADFDB] w-full rounded-xl p-6'>
        <div className='flex flex-col gap-3'>
          <h1 className="text-3xl font-bold ml-[44%] mb-3">Job Details</h1>
          <div className="flex gap-2">
            <h5 className='font-bold text-xl'>Job Title:</h5>
            <h6 className='text-xl'>{individualJob?.title}</h6>
          </div>

          <div className="flex gap-2">
            <h6 className='font-bold text-xl'>Company Name:</h6>
            <h6 className='text-xl'>{individualJob?.company}</h6>
          </div>

          <div className="flex gap-2">
            <h6 className='font-bold text-xl'>Location:</h6>
            <h6 className='text-xl'>{individualJob?.location}</h6>
          </div>

          <div className="flex gap-2">
            <h6 className='font-bold text-xl'>Description:</h6>
            <h6 className='text-xl'>{individualJob?.description}</h6>
          </div>
          
          <button onClick={applyForJob} disabled={isAlreadyApplied} className={`${isAlreadyApplied ? 'bg-[#D1D3D4]' : 'bg-[#41A67E]'} p-2 rounded-lg flex justify-center items-center mx-auto mt-12`}>
          {isAlreadyApplied ? "Applied" : "Apply Now"}</button>
        </div>
      </div>

      </div>
    </div>

  )
}

export default DetailsPage