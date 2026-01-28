// frontend/src/services/jobService.ts
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

/* =======================
   TYPES
======================= */

export interface ApiJob {
  job_title: any
  id: string
  title: string
  company: string
  location: string
  type: string
  description: string
  requirements: string[]
  responsibilities: string[]
  salary: string
  postedDate: string
  applyUrl: string
  logo: string | null
  source: string
}

export interface SearchResponse {
  success: boolean
  jobs: ApiJob[]
  total: number
  query?: string
  message?: string
}

export interface ApplyResponse {
  success: boolean
  message: string
  appliedJob: any
}

export interface AppliedJobsResponse {
  success: boolean
  appliedJobs: any[]
}

/* =======================
   SERVICE
======================= */

class JobService {
  /* 🔍 SEARCH JOBS - FIXED */
  async searchJobs(
    query: string,
    location = '',
    page = 1
  ): Promise<SearchResponse> {
    const params = new URLSearchParams({
      query: query.trim(),
      page: page.toString(),
      num_pages: '1'
    })

    if (location && location.trim()) {
      params.append('location', location.trim())
    }

    console.log('🔍 Calling API with params:', params.toString())

    const response = await fetch(
      `${API_BASE_URL}/jobs/search?${params.toString()}`
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || 'Failed to fetch jobs')
    }

    return response.json()
  }

  /* 📄 JOB DETAILS */
  async getJobDetails(
    jobId: string
  ): Promise<{ success: boolean; job: ApiJob }> {
    const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`)

    if (!response.ok) {
      throw new Error('Failed to fetch job details')
    }

    return response.json()
  }

  /* 📨 APPLY TO JOB */
  async applyToJob(jobData: {
    id: string
    title: string
    company: string
    applyUrl: string
  }): Promise<ApplyResponse> {
    const response = await fetch(`${API_BASE_URL}/jobs/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobId: jobData.id,
        jobTitle: jobData.title,
        company: jobData.company,
        applyUrl: jobData.applyUrl,
        appliedAt: new Date().toISOString()
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to save application')
    }

    return data
  }

  /* 📋 GET APPLIED JOBS */
  async getAppliedJobs(): Promise<AppliedJobsResponse> {
    const response = await fetch(`${API_BASE_URL}/jobs/applied`)

    if (!response.ok) {
      throw new Error('Failed to fetch applied jobs')
    }

    return response.json()
  }

  /* ❌ DELETE APPLIED JOB */
  async deleteAppliedJob(
    id: number
  ): Promise<{ success: boolean; message: string }> {
    const response = await fetch(
      `${API_BASE_URL}/jobs/applied/${id}`,
      { method: 'DELETE' }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to delete application')
    }

    return data
  }
}

/* =======================
   EXPORT
======================= */

export default new JobService()