'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you for your inquiry. We will contact you soon.' })
        // Reset form
        setFormData({
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
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'There was an error submitting your form. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was an error submitting your form. Please email us directly at info@nlre.ai' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-12 pb-20 lg:pb-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Connect</h1>
          
          <div className="mb-12 space-y-6">
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800">
              We do not respond to solicitations from brokers or press.
            </p>
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800">
              If you are a principal real estate owner seeking an asset disposition, addressing an adaptive re-use project, or acquisition in urban, downtown San Francisco, we welcome your inquiry. If you are a capital market partner investor, please scroll down.
            </p>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div className={`mb-8 p-4 rounded ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
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
                    required
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
                    required
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
                    required
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
                disabled={isSubmitting}
                className="bg-gray-900 text-white px-12 py-4 text-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
