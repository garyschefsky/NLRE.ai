import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">What We Do</h1>
          
          <div className="max-w-5xl mb-16">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 mb-8">
              Private real estate owners and institutional clients seek out our architectural vision, financial assessment, and real estate brokerage skills to address non and sub-performing assets in San Francisco's urban core. Our real estate brokerage services help our clients avoid forced sale through creative joint-venture work-outs and/or realize value through market divestiture and for investors to source and acquire adaptive re-use assets. Our brokerage services are supplemented with development services in concept design, pre-planning, and joint-venture formation.
            </p>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-black">Our Offerings Include:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl">
            {/* Box 1 */}
            <div className="border border-gray-300 p-8 lg:p-10 bg-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-black">Transaction Structuring & Negotiation</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• creative re-envisioning to improve performance</li>
                <li>• offering memoranda with creative & financial vision</li>
                <li>• asset dispositions (on and off-market)</li>
                <li>• fractionalized investment offerings & joint-venturing</li>
              </ul>
            </div>
            
            {/* Box 2 */}
            <div className="border border-gray-300 p-8 lg:p-10 bg-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-black">Project Sponsor (syndicated investment)</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• financial modeling</li>
                <li>• partner sourcing & identification</li>
                <li>• acquisition negotiation and structured finance</li>
                <li>• deal closing and post-closing management</li>
              </ul>
            </div>
            
            {/* Box 3 */}
            <div className="border border-gray-300 p-8 lg:p-10 bg-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-black">Pre-development, Pre-planning</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Feasibility assessment</li>
                <li>• engage architecture, construction management</li>
                <li>• construction cost estimates, budget cost analysis</li>
                <li>• pre-planning & planning entitlements</li>
                <li>• surveys and assessments</li>
              </ul>
            </div>
            
            {/* Box 4 */}
            <div className="border border-gray-300 p-8 lg:p-10 bg-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-black">Development, & Project Management</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Assemble and manage integrated team</li>
                <li className="ml-4">
                  <ul className="list-disc space-y-2">
                    <li>conceptual design, design development, construction drawings</li>
                    <li>construction management</li>
                    <li>controller financial oversights</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
