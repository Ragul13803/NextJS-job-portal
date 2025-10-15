'use client'
import { createContext, useState, useContext, ReactNode } from "react";

interface AppliedContextType {
  appliedJobs: any[]
  setApplyJob: (job: any) => void
}

const AppliedContext = createContext<AppliedContextType | null>(null);

const JobsContextProvider = ({ children }: { children: ReactNode }) => {
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

  const setApplyJob = (job: any) => {
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