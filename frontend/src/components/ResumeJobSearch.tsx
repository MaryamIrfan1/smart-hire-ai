import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  level: string
  employment: string
  salary: string
  description: string
  tags: string[]
}

const ResumeJobSearch: React.FC = () => {
  const navigate = useNavigate()
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [extractedSkills, setExtractedSkills] = useState<string[]>([])
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setResumeFile(file)
      setIsUploading(true)
      
      // Simulate processing
      setTimeout(() => {
        setIsUploading(false)
        setExtractedSkills([
          'UI/UX Design', 'Figma', 'Adobe XD', 'User Research', 
          'Wireframing', 'Prototyping', 'Design Systems', 'HTML/CSS',
          'JavaScript', 'React', 'Responsive Design', 'User Testing'
        ])
        setRecommendedJobs([
          {
            id: 5,
            title: "Senior UI/UX Designer",
            company: "Netflix",
            location: "Remote",
            type: "Remote",
            level: "Senior",
            employment: "Full Time",
            salary: "$8k-$12k / Month",
            description: "Join Netflix as a Senior UI/UX Designer to create amazing user experiences for our streaming platform. Work on cutting-edge design projects.",
            tags: ["UI/UX", "Figma", "User Research"]
          },
          {
            id: 6,
            title: "Product Designer",
            company: "Spotify",
            location: "New York, NY",
            type: "Onsite",
            level: "Expert",
            employment: "Full Time",
            salary: "$6k-$9k / Month",
            description: "Design the future of music streaming at Spotify. Create intuitive interfaces that millions of users love.",
            tags: ["Product Design", "Prototyping", "Design Systems"]
          },
          {
            id: 7,
            title: "UX Researcher",
            company: "Google",
            location: "Mountain View, CA",
            type: "Hybrid",
            level: "Intermediate",
            employment: "Full Time",
            salary: "$7k-$10k / Month",
            description: "Conduct user research and provide insights to shape Google's product experiences. Work with cross-functional teams.",
            tags: ["User Research", "Analytics", "Usability Testing"]
          },
          {
            id: 8,
            title: "Interaction Designer",
            company: "Apple",
            location: "Cupertino, CA",
            type: "Onsite",
            level: "Senior",
            employment: "Full Time",
            salary: "$9k-$13k / Month",
            description: "Design intuitive interactions for Apple's ecosystem. Create seamless experiences across devices.",
            tags: ["Interaction Design", "iOS", "Prototyping"]
          }
        ])
      }, 2000)
    }
  }

  const handleJobClick = (jobId: number) => {
    navigate(`/job/${jobId}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
    
      
      {/* Main Content */}
      <div className="pt-16 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume Job Search</h1>
          <p className="text-lg text-gray-600">Upload your resume and get personalized job recommendations</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-gray-300 mb-8 relative">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Upload Your Resume</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Upload your PDF resume to get personalized job recommendations based on your skills
          </p>
          
          <label className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 cursor-pointer">
            {isUploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Choose PDF File
              </>
            )}
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
          </label>
          
          {resumeFile && (
            <div className="mt-4 text-green-600 font-semibold">
              ✓ {resumeFile.name} uploaded successfully
            </div>
          )}
        </div>

        {/* Skills Section */}
        {extractedSkills.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skills Extracted from Your Resume</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {extractedSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Jobs */}
        {recommendedJobs.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recommended Jobs For You
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendedJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">
                        95% Match
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600 text-sm font-medium">{job.company}</p>
                      <p className="text-gray-500 text-xs">{job.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">{job.type}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">{job.level}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">{job.employment}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-lg font-bold text-gray-900">
                      {job.salary}
                    </div>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default ResumeJobSearch
=======
export default ResumeJobSearch
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
