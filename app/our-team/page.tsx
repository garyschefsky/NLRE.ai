import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OurTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        {/* Team Video Banner - Top of Page */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pb-8">
          <div className="relative w-full bg-black overflow-hidden" style={{ height: '40vh', maxHeight: '45vh', minHeight: '35vh' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              webkit-playsinline="true"
              className="w-full h-full object-cover"
              style={{ imageRendering: 'crisp-edges', willChange: 'contents' }}
            >
              <source src="/videos/NLRE-Workspace.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">(ai generated © nlre.ai)</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-12 pb-20 lg:pb-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Our Team</h1>
          
          <div className="max-w-5xl mb-16 space-y-8">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              Our exemplary team operates with an unwavering commitment to our clients, ensuring matters are handled with the utmost discretion.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              Rooted in a legacy of principal-led real estate development, we bring deep expertise in land use, multi-family, and adaptive re-use in San Francisco, Mid-Peninsula, and South Bay Area. We operate as a confidential partner for family offices and private clients, moving beyond the traditional brokerage model to serve as direct participants in complex transactions.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              From sophisticated financial modeling, acquisition and disposition, to managing projects in the $5M – $100M range, we lead discrete, off-market opportunities, for individuals, family offices, and institutional capital.
            </p>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Team Founder & CEO</h2>
            
            <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-start">
              {/* Gary's Portrait */}
              <div className="w-72 lg:w-80 h-96 lg:h-[28rem] relative flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/images/gary-portrait.png"
                  alt="Gary J. Schefsky, Founder & CEO"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                  priority
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3 text-black">
                  Gary J. Schefsky, J.D., LL.M., Prof. Venture Investor, & California Real Estate Broker. Managing, Principal Broker. (Corp. Broker License Number 01823306).
                </h3>
                
                <div className="space-y-5 text-gray-800">
                  <p className="text-base">
                    Mr. Schefsky is an alternative asset investor & portfolio manager (start-up, venture capital, secondaries, and real estate) with deep experience in real estate development, broker transactions, and leasing. Mr. Schefsky brings a unique set of skills - creative architectural vision, strategic thinking, disciplined due diligence, and operations.
                  </p>
                  
                  <p className="text-base">
                    For 17 years he operated a family office derived in commercial real estate, where he oversaw investment strategy, portfolio diversification, and project development. Mr. Schefsky has worked on major real estate, adaptive reuse redevelopment projects in excess of $20M, including creative architectural vision, entitlement planning, financial strategy and assessment, leasing, and sales. He re-envisioned, financially structured, and sold through joint venture urban core buildings in excess of $33M/each.
                  </p>
                  
                  <p className="text-base">
                    Gary gives back to the community as a patron to the arts and avid art collector. He is a member of SFMOMA Photography Accessions Committee, former Board Member, Chair Strategic Directions, San Francisco Botanical Gardens & former Board of Trustees Member, Finance Committee of A+D Architecture and Design Museum, Los Angeles. He also supports educational opportunities for underserved individuals, preservation of the environment and animal species, and the advancement of humanitarian justice and social welfare through the Schefsky Foundation.
                  </p>
                  
                  <p className="text-base">
                    Mr. Schefsky holds a BA, cum laude, and Minor from the University of California, Davis, and a JD and LL.M in Transnational Business Practice from the University of the Pacific.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-black italic">Sample Adaptive Projects Led by Mr. Schefsky Include:</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              {/* Project Image */}
              <div className="w-full md:w-96 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/1495 S. El Camino Real, San Mateo.png"
                  alt="1495 S. El Camino Real, San Mateo"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-3 text-black">1495 S. El Camino Real, San Mateo</h4>
                <p className="text-gray-800">
                  Successful pre-planning approval for the redevelopment of a 1970s single-tenant bank building, located in San Mateo, El Camino Real, into a 30,000 sq. ft. mixed-use office, retail, and branded ground floor quasi-retail use. The project received City Planning pre-planning approval.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Project Image */}
              <div className="w-full md:w-96 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/116 New Montgomery.png"
                  alt="116 New Montgomery Street"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-3 text-black">116 New Montgomery Street</h4>
                <p className="text-gray-800">
                  Adaptive, re-envisioning of 116 New Montgomery, a 133,000 sq. ft. historic high-rise office building, into a boutique hotel, condo, or Class A office building. Work included a creative architectural vision for opening up uses along Minna Alley, assessing multiple reuse scenarios, space planning, and financial modeling including historic tax credits. Structured a joint venture for the acquisition and redevelopment of the building, representing both Buyer and Seller.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-700">
              John Paye is an agent whose primary broker is Turner Real Estate CA DRE# 01174204.
            </p>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
