import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import jobService from '../services/jobService'
import type { ApiJob } from '../services/jobService'

interface Filters {
  jobType: string[]
  experience: string[]
  salaryRange: string
  remote: boolean
}

const FindJobs: React.FC = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('software engineer')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')
  const [filters, setFilters] = useState<Filters>({
    jobType: [],
    experience: [],
    salaryRange: 'any',
    remote: false
  })

  // API state
  const [jobs, setJobs] = useState<ApiJob[]>([])
  const [filteredJobs, setFilteredJobs] = useState<ApiJob[]>([])
  const [loading, setLoading] = useState(true)
  const [initialLoading, setInitialLoading] = useState(true)
  const [error, setError] = useState('')
  const [, setHasSearched] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)

  // Use ref to track if initial search is done
  const initialSearchDone = useRef(false)

  // Fetch initial jobs on page load - only once
  useEffect(() => {
    if (initialSearchDone.current) return
    
    const fetchInitialJobs = async () => {
      console.log('Fetching initial jobs...')
      setInitialLoading(true)
      setError('')
      
      try {
        // Search for software engineer jobs by default
        const result = await jobService.searchJobs('software engineer', '')
        console.log(' Initial jobs fetched:', result.jobs.length)
        setJobs(result.jobs)
        
        if (result.jobs.length === 0) {
          setError('No jobs available at the moment. Try searching for different keywords.')
        } else {
          setError('') // Clear any previous errors
        }
      } catch (err) {
        console.error(' Failed to fetch initial jobs:', err)
        setError('Failed to load jobs. Please check your connection and try again.')
      } finally {
        setInitialLoading(false)
        setLoading(false)
        initialSearchDone.current = true
      }
    }

    fetchInitialJobs()
  }, [])

  // Search jobs from API - FIXED
  const handleSearch = async (searchQuery?: string, locationQuery?: string) => {
    const queryToSearch = searchQuery || searchTerm
    const locationToSearch = locationQuery || location
    
    if (!queryToSearch.trim()) {
      setError('Please enter a search query')
      return
    }

    console.log(' Searching for:', queryToSearch, 'in', locationToSearch || 'anywhere')
    
    setLoading(true)
    setError('')
    setHasSearched(true)
    setSearchPerformed(true)

    try {
      const result = await jobService.searchJobs(queryToSearch)
      console.log(' Search results:', result.jobs.length)
      setJobs(result.jobs)
      
      if (result.jobs.length === 0) {
        setError(`No jobs found for "${queryToSearch}". Try different keywords.`)
      } else {
        setError('') // Clear error if we found jobs
      }
    } catch (err: any) {
      console.error(' Search error:', err)
      setError(err.message || 'Failed to fetch jobs. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Filter jobs locally
  useEffect(() => {
    let result = [...jobs]
    
    if (filters.jobType.length > 0) {
      result = result.filter(job => 
        filters.jobType.some(type => 
          job.type.toLowerCase().includes(type.toLowerCase())
        )
      )
    }
    
    if (filters.remote) {
      result = result.filter(job => 
        job.title.toLowerCase().includes('remote') || 
        job.location.toLowerCase().includes('remote') ||
        job.type.toLowerCase().includes('remote')
      )
    }

    if (sortBy === 'salary') {
      result.sort((a, b) => {
        const getSalaryValue = (salary: string) => {
          if (!salary || salary === 'Not specified') return 0
          
          const match = salary.match(/\$?(\d+(?:,\d+)?(?:\.\d+)?)(?:k|K)?/)
          if (!match) return 0
          
          let value = parseFloat(match[1].replace(/,/g, ''))
          
          if (salary.toLowerCase().includes('k')) {
            value *= 1000
          }
          
          return value
        }
        
        const salaryA = getSalaryValue(a.salary)
        const salaryB = getSalaryValue(b.salary)
        return salaryB - salaryA
      })
    } else if (sortBy === 'recent') {
      result.sort((a, b) => 
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      )
    }

    setFilteredJobs(result)
  }, [jobs, filters, sortBy])

  const handleJobClick = (jobId: string) => {
    navigate(`/job/${jobId}`)
  }

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    if (filterType === 'jobType' || filterType === 'experience') {
      setFilters(prev => ({
        ...prev,
        [filterType]: prev[filterType].includes(value) 
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value]
      }))
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }))
    }
  }

  const resetFilters = () => {
    setFilters({
      jobType: [],
      experience: [],
      salaryRange: 'any',
      remote: false
    })
  }

  const applyFilters = () => {
    setShowFilters(false)
  }

  const handleApplyJob = async (e: React.MouseEvent, job: ApiJob) => {
    e.stopPropagation()
    
    try {
      await jobService.applyToJob({
        id: job.id,
        title: job.title,
        company: job.company,
        applyUrl: job.applyUrl
      })
      alert('Application saved! Opening job page...')
      window.open(job.applyUrl, '_blank')
    } catch (err: any) {
      alert(err.message || 'Failed to save application')
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently'
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return `${Math.floor(diffDays / 30)} months ago`
  }

  // Get popular search suggestions
  const popularSearches = [
    { title: 'Software Engineer', query: 'software engineer' },
    { title: 'Data Scientist', query: 'data scientist' },
    { title: 'Web Developer', query: 'web developer' },
    { title: 'Project Manager', query: 'project manager' },
    { title: 'Marketing Manager', query: 'marketing manager' },
    { title: 'Remote Jobs', query: 'remote' },
    { title: 'Entry Level', query: 'entry level' }
  ]

  // Handle popular search click
  const handlePopularSearch = (query: string) => {
    setSearchTerm(query)
    // Use setTimeout to ensure state is updated before search
    setTimeout(() => {
      handleSearch(query, '')
    }, 0)
  }

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="p-8 pt-6">
        {/* Hero Section */}
        <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-24 right-16 w-10 h-10 bg-white rounded-full"></div>
            <div className="absolute bottom-16 left-24 w-12 h-12 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">Find Your Dream Job</h1>
            <p className="text-gray-300 mb-6">Search real jobs from LinkedIn, Indeed, Glassdoor and more</p>
            {/* Search Bar */}
<div className="bg-white rounded-2xl p-2 shadow-2xl max-w-4xl mx-auto">
  <div className="flex flex-col md:flex-row gap-2">
    <div className="relative grow">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search jobs by title, keyword, or company"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gray-900 focus:outline-none text-gray-900"
      />
    </div>
    
    <button 
      className="bg-gray-900 text-white py-3 px-8 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg disabled:bg-gray-600 min-w-[120px]"
      onClick={() => handleSearch()}
      disabled={loading}
    >
      {loading ? 'Searching...' : 'Find Job'}
    </button>
  </div>
  
  {/* Popular Searches */}
  <div className="mt-4 flex flex-wrap justify-center gap-2">
    <span className="text-gray-600 text-sm mr-2">Popular:</span>
    {popularSearches.map((search, index) => (
      <button
        key={index}
        onClick={() => handlePopularSearch(search.query)}
        disabled={loading}
        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors disabled:opacity-50"
      >
        {search.title}
      </button>
    ))}
  </div>
</div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-500 bg-opacity-20 border border-red-300 rounded-xl text-red-100 max-w-4xl mx-auto">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {searchPerformed ? 'Search Results' : 'Available Jobs'} 
            {filteredJobs.length > 0 && ` (${filteredJobs.length})`}
          </h2>
          <div className="flex gap-4">
            <button 
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all duration-200 shadow-sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filters
            </button>
            
            <select 
              className="bg-white px-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 focus:border-gray-900 focus:outline-none shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="recent">Sort by: Most Recent</option>
              <option value="salary">Sort by: Highest Salary</option>
            </select>
          </div>
        </div>

        {/* Filters Panel */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8 transition-all duration-200 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Filter Jobs</h3>
            <button 
              className="text-2xl text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => setShowFilters(false)}
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="block font-semibold text-gray-700 mb-4">Job Type</label>
              <div className="space-y-3">
                {['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'].map(type => (
                  <label key={type} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.jobType.includes(type)}
                      onChange={() => handleFilterChange('jobType', type)}
                      className="w-5 h-5 text-gray-900 rounded focus:ring-gray-900"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block font-semibold text-gray-700 mb-4">Remote Only</label>
              <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={filters.remote}
                  onChange={() => setFilters(prev => ({ ...prev, remote: !prev.remote }))}
                  className="w-5 h-5 text-gray-900 rounded focus:ring-gray-900"
                />
                <span className="text-gray-700">Show only remote jobs</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
            <button 
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors shadow-sm"
              onClick={resetFilters}
            >
              Reset All
            </button>
            <button 
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Loading State - Initial Load */}
        {initialLoading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading available jobs...</p>
            <p className="text-gray-500 text-sm">Fetching real jobs from multiple sources</p>
          </div>
        ) : loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600 text-lg">Searching real jobs from LinkedIn, Indeed, Glassdoor...</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer hover:border-gray-300"
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    {job.logo ? (
                      <img 
                        src={job.logo} 
                        alt={job.company} 
                        className="w-16 h-16 rounded-2xl object-contain bg-gray-50 p-2 border border-gray-200"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          // Show fallback
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            const fallback = document.createElement('div')
                            fallback.className = 'w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl'
                            fallback.textContent = job.company.charAt(0)
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {job.company.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 hover:text-gray-700">{job.title}</h3>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                      <p className="text-gray-500 text-sm">{job.location}</p>
                      <p className="text-gray-400 text-xs mt-1">{formatDate(job.postedDate)}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold capitalize">
                      {job.type}
                    </span>
                    {job.salary && job.salary !== 'Not specified' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {job.salary}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                    {job.description?.substring(0, 200) || 'No description available'}...
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      {job.source ? job.source.split(' ')[0] : 'Job Board'}
                    </div>
                    <button 
                      className="px-6 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                      onClick={(e) => handleApplyJob(e, job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {searchPerformed ? 'No jobs found for your search' : 'No jobs available'}
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {searchPerformed 
                ? `Try searching for different keywords like "developer", "marketing", or "remote jobs"`
                : 'There seems to be an issue fetching jobs. Try searching for specific job titles.'
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleSearch('developer')}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Search "Developer" Jobs
              </button>
              <button
                onClick={() => handleSearch('remote')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Search Remote Jobs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FindJobs