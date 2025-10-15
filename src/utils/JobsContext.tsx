'use client'
import { createContext, useState, useContext, ReactNode } from "react";


export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  ai_match_score: number;
}

interface AppliedContextType {
  appliedJobs: Job[]
  setApplyJob: (job: Job) => void
}

const AppliedContext = createContext<AppliedContextType | null>(null);

const JobsContextProvider = ({ children }: { children: ReactNode }) => {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  const setApplyJob = (job: Job) => {
    setAppliedJobs((prev) => prev.find((appliedJob) => appliedJob.id === job.id) ? prev : [...prev, job]
    );
  }

  return (
    <AppliedContext.Provider value={{ appliedJobs, setApplyJob}}>
      {children}
    </AppliedContext.Provider>
  )
}

export const useAppliedContext = () => useContext(AppliedContext);
export default JobsContextProvider