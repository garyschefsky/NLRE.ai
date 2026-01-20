import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OurTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Our Team</h1>
          
          <div className="max-w-5xl mb-16 space-y-8">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              Our exemplary team operates with an unwavering commitment to our clients, ensuring matters are handled with the utmost discretion.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              Rooted in a legacy of principal-led real estate development, we bring deep expertise in land use, multi-family, and adaptive re-use in San Francisco, Mid-Peninsula, and South Bay Area. We operate as a confidential partner for family offices and private clients, moving beyond the traditional brokerage model to serve as direct participants in complex transactions.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              From sophisticated financial modeling, acquisition and disposition, to managing projects in the $5M – $100M range, we lead discreet, off-market opportunities, for individuals, family offices, and institutional capital.
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
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
                  Gary J. Schefsky, J.D., LL.M., Prof. Venture Investor, & California Real Estate Broker (Corp. Broker license Number 01823306)
                </h3>
                
                <div className="space-y-5 text-lg lg:text-xl text-gray-800">
                  <p>
                    Mr. Schefsky is an alternative asset investor & portfolio manager (start-up, venture capital, secondaries, and real estate) with deep experience in real estate development, broker transactions, and leasing. Mr. Schefsky brings a unique set of skills - creative architectural vision, strategic thinking, disciplined due diligence, and operations.
                  </p>
                  
                  <p>
                    For 17 years he operated a family office derived in commercial real estate, where he oversaw investment strategy, portfolio diversification, and project development. Mr. Schefsky has worked on major real estate, adaptive reuse redevelopment projects in excess of $20M, including creative architectural vision, entitlement planning, financial strategy and assessment, leasing, and sales. He re-envisioned, financially structured, and sold through joint venture urban core buildings in excess of $33M/each.
                  </p>
                  
                  <p>
                    Gary gives back to the community as a patron to the arts and avid art collector. He is a member of SFMOMA Photography Accessions Committee, former Board Member, Chair Strategic Directions, San Francisco Botanical Gardens & former Board of Trustees Member, Finance Committee of A+D Architecture and Design Museum, Los Angeles. He also supports educational opportunities for underserved individuals, preservation of the environment and animal species, and the advancement of humanitarian justice and social welfare through the Schefsky Foundation.
                  </p>
                  
                  <p>
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
          
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6 text-black">Affiliated Team*</h2>
            <h3 className="text-lg font-semibold mb-8 text-gray-700">Business Development & Capital Market Partners</h3>
            
            <div className="space-y-12">
              {/* John Paye */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/john-paye.png"
                    alt="John Paye"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-3 text-black">
                    John Paye - (DRE LICENSE NUMBER 01174204)
                  </h4>
                  <p className="text-gray-800 mb-4">
                    John Paye is our team builder to capital investors, joint-venture partners for commercial real estate projects, and he leads residential real estate transactions through his principal broker, Turner Real Estate.
                  </p>
                  <p className="text-gray-800 mb-4">
                    His championship performance in the real estate business and as a former professional athlete:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800">
                    <li>San Francisco 49ers Super Bowl XXIII Champion Ring Holder</li>
                    <li>Stanford Football Hall of Fame member</li>
                    <li>Stanford Basketball Hall of Fame member</li>
                  </ul>
                  <p className="text-gray-800 mt-4">
                    John's career transitioned from professional sports to real estate land development, focusing on high-end home redevelopment projects. He currently represents buyers and sellers of residential real estate in the mid-Peninsula.
                  </p>
                  <p className="text-gray-800 mt-4">
                    Having lived long-term in Atherton, Menlo Park, Stanford, and Woodside, John has a deep understanding of the mid-Peninsula residential market and specific neighborhoods. He guides clients through complex real estate processes with a "calm quarterback" demeanor.
                  </p>
                  <p className="text-gray-800 mt-4">
                    John gives back to the community by coaching Menlo Atherton College Women's Basketball and serving as President of the NFL Alumni Nor-Cal Chapter. He is the Founder of the Inside Anne's Closet Colon Cancer Awareness Initiative and supports the developmentally disabled, stemming from being the father of a developmentally disabled son.
                  </p>
                </div>
              </div>
              
              {/* Kenneth Chin */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/kenneth-chin.png"
                    alt="Kenneth Chin"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-3 text-black">Financial Assessment & Capital Markets</h4>
                  <h5 className="text-lg font-semibold mb-3 text-black">
                    Kenneth Chin - (DRE License Number ______)
                  </h5>
                  <p className="text-gray-800 mb-4">
                    Kenneth Chin is the CEO and founder of Terranado, a real estate advisory firm. Terranado provides strategy, development management, construction, project management, and financial structuring. Clients include institutional owners, developers, private family offices, and private real estate owners.
                  </p>
                  <p className="text-gray-800 mb-4">
                    Mr. Chin previously served as a Vice President with United Growth, where he focused on managing single and multi-tenant retail development projects from acquisition through development. He served as a Project Manager for an 80-acre master-planned mixed-use office, residential, and retail development for a private Bay Area real estate developer, and managed the redevelopment of a 90,000 sq. ft. office building in Silicon Valley for another owner.
                  </p>
                  <p className="text-gray-800 mb-4">
                    Mr. Chin also worked with a private entrepreneurial real estate merchant banking firm where he led the sourcing, structuring, and underwriting of various master-planned and mixed-use developments. At GMAC Commercial Mortgage (now CapMark), he completed over $500 million in transactions involving structuring, underwriting, and asset management of lodging assets.
                  </p>
                  <p className="text-gray-800 mb-4">
                    Mr. Chin holds an active California real estate broker's license and is an active member of the Urban Land Institute (ULI) and the International Council of Shopping Centers (ICSC). He holds a Masters in Real Estate Development from the University of Southern California and degrees from the University of Pennsylvania: a B.S. in Economics from Wharton and a B.S.E. in Mechanical Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-700">
              * Affiliated team providers are not employees or agents of New Luna Ventures, Inc. John Paye is an agent whose primary broker is Turner Real Estate CA DRE# 01174204. Ken Chin is an independent commercial real estate broker, CA DRE# ____________ and performs institutional financial assessment for NLRE.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
