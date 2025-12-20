import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import jobService from '../services/jobService'

// Extended ApiJob type with all possible properties
interface ApiJob {
  // Original properties
  id?: string
  title?: string
  company?: string
  location?: string
  type?: string
  salary?: string
  description?: string
  logo?: string | null
  applyUrl?: string
  postedDate?: string
  source?: string
  requirements?: string[]
  responsibilities?: string[]
  
  // API response properties
  job_id?: string
  job_title?: string
  employer_name?: string
  employer_logo?: string | null
  job_city?: string
  job_country?: string
  job_employment_type?: string
  job_salary?: string
  job_description?: string
  job_apply_link?: string
  job_posted_date?: string
}

interface RelatedJob {
  company: string
  location: string
  title: string
  type: string
  salary: string
  id: string
}

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const [job, setJob] = useState<ApiJob | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [relatedJobs, setRelatedJobs] = useState<RelatedJob[]>([])
  const [showFullDescription, setShowFullDescription] = useState(false)

  // Clean and format job description
  const cleanDescription = (description: string) => {
    if (!description) return ''
    
    let cleaned = description
      .replace(/#BNATC\s*\n/g, '')
      .replace(/#BNATC/g, '')
      .replace(/\s*\n\s*\n\s*/g, '\n\n')
      .trim()
    
    const lines = cleaned.split('\n')
    const uniqueLines: string[] = []
    const seen = new Set<string>()
    
    for (const line of lines) {
      const trimmedLine = line.trim()
      if (trimmedLine && !seen.has(trimmedLine.toLowerCase())) {
        seen.add(trimmedLine.toLowerCase())
        uniqueLines.push(trimmedLine)
      }
    }
    
    return uniqueLines.join('\n\n')
  }

  const extractKeyPoints = (description: string) => {
    const keyPoints = []
    const lines = description.split('\n')
    
    for (const line of lines) {
      const trimmedLine = line.trim()
      if (trimmedLine.startsWith('•') || 
          trimmedLine.startsWith('-') || 
          trimmedLine.match(/^[A-Z][^.:!?]*:$/)) {
        keyPoints.push(trimmedLine)
      }
    }
    
    return keyPoints.slice(0, 10)
  }

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!id) {
        console.error(' No job ID provided')
        setError('No job ID provided')
        setLoading(false)
        return
      }
      
      console.log(' Starting fetch for job ID:', id)
      setLoading(true)
      setError('')
      setJob(null)
      
      try {
        console.log(' Calling jobService.getJobDetails...')
        const response = await jobService.getJobDetails(id)
        console.log(' API Response:', response)
        
        // FIXED: Better handling of API response
        if (response && response.success !== false) {
          // Handle both response.job and response.data formats
          const jobData = response.job || response
          
          console.log(' Job data received:', jobData)
          
          // Ensure we have at least some job data
          if (!jobData || (!jobData.job_title && !jobData.title)) {
            console.error(' Invalid job data structure')
            setError('Job data is incomplete')
            setLoading(false)
            return
          }
          
          setJob(jobData)
          
          // Fetch related jobs
          try {
            console.log(' Fetching related jobs...')
            // Check if title exists and has content before splitting
            const jobTitle = (jobData as any).job_title || jobData.title
            const searchQuery = jobTitle 
              ? jobTitle.split(' ')[0] 
              : 'software engineer'
            
            console.log(' Search query for related jobs:', searchQuery)
            const relatedResponse = await jobService.searchJobs(searchQuery, '', 1)
            console.log(' Related jobs:', relatedResponse.jobs?.length || 0)
            
            if (relatedResponse.jobs && Array.isArray(relatedResponse.jobs)) {
              const filtered = relatedResponse.jobs
                .filter(j => j.id !== id)
                .slice(0, 6)
                .map(rJob => ({
                  id: rJob.id,
                  company: rJob.company,
                  location: rJob.location,
                  title: rJob.title,
                  type: rJob.type,
                  salary: rJob.salary || 'Not specified'
                }))
              setRelatedJobs(filtered)
            }
          } catch (err) {
            console.error(' Failed to fetch related jobs:', err)
            setRelatedJobs([])
          }
        } else {
          console.error(' Job not found in response')
          setError('Job not found')
        }
      } catch (err: any) {
        console.error(' Failed to fetch job details:', err)
        setError(err.message || 'Failed to load job details. Please try again.')
      } finally {
        console.log(' Fetch complete, setting loading to false')
        setLoading(false)
      }
    }

    fetchJobDetails()
  }, [id])

  const handleApplyJob = async () => {
    if (!job) return
    
    const applyData = {
      id: job.job_id || job.id || id || '',
      title: job.job_title || job.title || 'Job',
      company: job.employer_name || job.company || 'Company',
      applyUrl: job.job_apply_link || job.applyUrl || '#'
    }
    
    try {
      await jobService.applyToJob(applyData)
      alert('Application saved! Opening job page...')
      if (applyData.applyUrl && applyData.applyUrl !== '#') {
        window.open(applyData.applyUrl, '_blank')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to save application')
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently'
    try {
      const date = new Date(dateString)
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - date.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 1) return 'Yesterday'
      if (diffDays < 7) return `${diffDays} days ago`
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
      return `${Math.floor(diffDays / 30)} months ago`
    } catch (e) {
      return 'Recently'
    }
  }

  const handleRelatedJobClick = (relatedJobId: string) => {
    console.log(' Navigating to related job:', relatedJobId)
    window.scrollTo(0, 0)
    navigate(`/job/${relatedJobId}`)
  }

  console.log(' Rendering component with loading:', loading, 'error:', error, 'job:', job)

  if (loading) {
    console.log(' Showing loading state')
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 pt-24 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (error || !job) {
    console.log(' Showing error state')
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 pt-24 flex items-center justify-center p-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="text-6xl mb-4 opacity-50"></div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            {error || 'Job not found'}
          </h3>
          <p className="text-gray-500 mb-4">Job ID: {id}</p>
          <p className="text-gray-500 mb-6">
            The job you're looking for might have been removed or is unavailable.
          </p>
          <button
            onClick={() => navigate('/find-jobs')}
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Back to Job Search
          </button>
        </div>
      </div>
    )
  }

  console.log(' Showing job details')

  // FIXED: Safe access with better fallbacks and null checks
  const jobTitle = job.job_title || job.title || 'Job Title'
  const jobCompany = job.employer_name || job.company || 'Company'
  const jobLocation = job.job_city || job.job_country || job.location || 'Location'
  const jobType = job.job_employment_type || job.type || 'Full-time'
  const jobSalary = job.job_salary || job.salary || 'Not specified'
  const jobLogo = job.employer_logo || job.logo
  const jobDescription = job.job_description || job.description || 'No description available'
  const jobPostedDate = job.job_posted_date || job.postedDate || new Date().toISOString()

  const cleanedDescription = cleanDescription(jobDescription)
  const keyPoints = extractKeyPoints(cleanedDescription)
  const shortDescription = cleanedDescription.length > 500 
    ? cleanedDescription.substring(0, 500) + '...'
    : cleanedDescription

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="pt-24 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Jobs
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                {/* Job Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                  {jobLogo ? (
                    <img 
                      src={jobLogo} 
                      alt={jobCompany} 
                      className="w-16 h-16 rounded-2xl object-contain bg-gray-50 p-2 border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const parent = e.currentTarget.parentElement
                        if (parent) {
                          const fallback = document.createElement('div')
                          fallback.className = 'w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl'
                          fallback.textContent = jobCompany?.charAt(0) || 'J'
                          parent.appendChild(fallback)
                        }
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {jobCompany?.charAt(0) || 'J'}
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{jobTitle}</h1>
                        <p className="text-lg font-medium text-gray-600 mt-1">{jobCompany}</p>
                        <p className="text-gray-500 mt-1">{jobLocation}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={handleApplyJob}
                          className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold capitalize">
                        {jobType}
                      </span>
                      {jobSalary && jobSalary !== 'Not specified' && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {jobSalary}
                        </span>
                      )}
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {formatDate(jobPostedDate)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-6"></div>

                {/* Job Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {showFullDescription ? cleanedDescription : shortDescription}
                    {cleanedDescription.length > 500 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="ml-2 text-gray-900 font-semibold hover:text-gray-700"
                      >
                        {showFullDescription ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Key Points */}
                {keyPoints.length > 0 && (
                  <>
                    <div className="border-t border-gray-200 my-6"></div>
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Key Points</h2>
                      <ul className="space-y-3">
                        {keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-500 mr-3 mt-1">•</span>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Job Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Posted', value: formatDate(jobPostedDate) },
                    { label: 'Job Type', value: jobType },
                    { label: 'Salary', value: jobSalary },
                    { label: 'Location', value: jobLocation },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-medium text-gray-600">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About Company</h3>
                <div className="flex items-center gap-3 mb-4">
                  {jobLogo ? (
                    <img 
                      src={jobLogo} 
                      alt={jobCompany} 
                      className="w-12 h-12 rounded-xl object-contain bg-gray-50 p-1"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
                      {jobCompany?.charAt(0) || 'C'}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{jobCompany}</h4>
                    <p className="text-gray-600 text-sm">{jobLocation}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  This company is hiring for multiple positions. Click apply to view their career page.
                </p>
              </div>

              {/* Related Jobs Card */}
              {relatedJobs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Jobs</h3>
                  <div className="space-y-4">
                    {relatedJobs.map((relatedJob, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer hover:bg-gray-100"
                        onClick={() => handleRelatedJobClick(relatedJob.id)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900 text-sm">
                            {relatedJob.company}
                          </span>
                          <span className="text-xs text-gray-500">{relatedJob.location}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-xs">{relatedJob.title}</span>
                          <span className="text-gray-700 text-xs font-semibold">
                            {relatedJob.type}
                          </span>
                        </div>
                        {relatedJob.salary !== 'Not specified' && (
                          <div className="mt-2 text-xs text-green-600 font-semibold">
                            {relatedJob.salary}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails