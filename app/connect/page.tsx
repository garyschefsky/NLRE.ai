'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Connect() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cell: '',
    portfolioType: '',
    portfolioOther: '',
    propertyCount: '',
    isPrincipalOwner: '',
    capitalDeployments: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Connect</h1>
          
          <div className="mb-12 space-y-6">
            <p className="text-xl lg:text-2xl text-gray-800">
              We do not respond to solicitations from brokers or press.
            </p>
            <p className="text-xl lg:text-2xl text-gray-800">
              If you are a principal real estate owner seeking an asset disposition, addressing an adaptive re-use project, or acquisition in urban, downtown San Francisco, we welcome your inquiry. If you are a capital market partner investor, please scroll down.
            </p>
          </div>

          {/* Visual Content - Video */}
          <div className="mb-12">
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
              >
                <source src="/videos/Generating_Architectural_Interior_Film.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Principal Owner Section */}
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-black">Principal Real Estate Owner Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
              
              <div>
                <label htmlFor="cell" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                  Cell:
                </label>
                <input
                  type="tel"
                  id="cell"
                  name="cell"
                  value={formData.cell}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
              </div>
              
              <div>
                <label className="block text-base lg:text-lg font-bold text-gray-900 mb-4">
                  Please select the nature of your current real estate asset portfolio:
                </label>
                <select
                  name="portfolioType"
                  value={formData.portfolioType}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                >
                  <option value="">Select...</option>
                  <option value="commercial-office">- commercial office</option>
                  <option value="mixed-use">- mixed use office/retail</option>
                  <option value="hospitality">- hospitality</option>
                  <option value="residential-high-rise">- residential high-rise</option>
                  <option value="other">- other</option>
                </select>
                
                {formData.portfolioType === 'other' && (
                  <input
                    type="text"
                    name="portfolioOther"
                    value={formData.portfolioOther}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-2 mt-2"
                  />
                )}
              </div>
              
              <div>
                <label className="block text-base lg:text-lg font-bold text-gray-900 mb-4">
                  How many commercial properties do you own in the urban core, downtown San Francisco:
                </label>
                <input
                  type="number"
                  name="propertyCount"
                  value={formData.propertyCount}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
            </div>
            
            {/* Visual Content - Images Between Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 border-t border-gray-300 pt-12">
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <Image
                  src="/images/RealE-2.png"
                  alt="Real Estate Development"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <Image
                  src="/images/RealE-3.png"
                  alt="Architectural Design"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Capital Market Partner Section */}
            <div className="space-y-8 border-t border-gray-300 pt-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-black">Capital Market Partner Information</h2>
              
              <div>
                <label className="block text-base lg:text-lg font-bold text-gray-900 mb-4">
                  Are you a principal owner, employee of principal owner, and/or real estate broker under contract with the principal owner:
                </label>
                <textarea
                  name="isPrincipalOwner"
                  value={formData.isPrincipalOwner}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                />
              </div>
              
              <div>
                <label className="block text-base lg:text-lg font-bold text-gray-900 mb-4">
                  Are you a capital market investor partner seeking investment into commercial real estate in urban core, downtown San Francisco, if so, please provide the following information:
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label htmlFor="capitalFirstName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="capitalFirstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="capitalLastName" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="capitalLastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="capitalEmail" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="capitalEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="capitalCell" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                      Cell:
                    </label>
                    <input
                      type="tel"
                      id="capitalCell"
                      name="cell"
                      value={formData.cell}
                      onChange={handleChange}
                      className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="capitalDeployments" className="block text-base lg:text-lg font-medium text-gray-700 mb-3">
                    Examples of Capital Deployments, including building name and address, in Urban Core Real Estate:
                  </label>
                  <textarea
                    id="capitalDeployments"
                    name="capitalDeployments"
                    value={formData.capitalDeployments}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 text-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <button
                type="submit"
                className="bg-luna-teal text-white px-12 py-4 text-lg font-medium hover:bg-teal-600 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
