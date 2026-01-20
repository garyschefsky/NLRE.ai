import Navigation from '@/components/Navigation'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Video Section - Full Viewport Impact */}
        <div className="relative w-full h-screen bg-black overflow-hidden">
          {/* Hero Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ imageRendering: 'crisp-edges', willChange: 'contents' }}
          >
            <source src="/videos/hero-video.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Overlaid Branding - Center */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="mb-4">
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white mb-2">
                  NLRE
                </h1>
              </div>
              {/* Positioning Line */}
              <p className="text-base lg:text-lg xl:text-xl text-white/85 tracking-normal mt-6 font-serif font-light max-w-2xl mx-auto">
                Repositioning undervalued San Francisco assets with discipline and design.
              </p>
              {/* Soft Emotional Line */}
              <p className="text-sm lg:text-base xl:text-lg text-white/75 tracking-normal mt-4 font-serif font-light max-w-2xl mx-auto">
                For owners who care about what they built—and investors who see what it can become.
              </p>
            </div>
          </div>
          
          {/* Social Media Icons - Right Side */}
          <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          {/* Scroll Down Indicator - Right Side */}
          <div className="absolute right-6 lg:right-8 bottom-12 z-20 flex flex-col items-center space-y-3">
            <span className="text-white/80 text-xs uppercase tracking-wider" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              scroll down
            </span>
            <div className="relative w-px h-16 bg-white/40">
              <div className="absolute top-0 w-full h-8 bg-white/90 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Credibility Strip */}
        <div className="w-full bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-sm lg:text-base text-gray-600 font-serif">
              <span>Selective acquisitions</span>
              <span className="text-gray-300">•</span>
              <span>Principal-led</span>
              <span className="text-gray-300">•</span>
              <span>Long-term orientation</span>
            </div>
          </div>
        </div>

        {/* Hero Section - Logo and Text */}
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <div className="mb-8 lg:mb-10">
            <Logo />
          </div>
          
          <div className="max-w-3xl mb-8 space-y-4">
            <p className="text-sm lg:text-base leading-relaxed text-gray-900 font-sans font-medium">
              We focus on the revitalization of San Francisco's urban core.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-gray-600 font-sans">
              NLRE is dedicated to transforming the downtown financial district into a vibrant, inclusive, and resilient hub for living, working, and leisure. San Francisco's downtown has the potential to be one of the most vibrant business cities in the world, rivaling great cities like Manhattan, London, Paris, and Milan.
            </p>
          </div>

          {/* CTA - Discreet */}
          <div className="max-w-3xl">
            <a 
              href="/connect" 
              className="inline-block text-sm lg:text-base text-gray-900 font-serif border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors"
            >
              Start a confidential conversation →
            </a>
          </div>
        </div>

        {/* Services Section - Reference Style */}
        <div className="w-full bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
            {/* Main Heading - Centered */}
            <div className="text-center mb-10 lg:mb-12">
              <p className="text-lg lg:text-xl font-serif text-gray-900 leading-relaxed">
                Private real estate owners and institutional clients seek out our architectural vision, financial assessment, and real estate brokerage skills to address non and sub-performing assets in San Francisco's urban core. Our real estate brokerage services help our clients avoid forced sale through creative joint-venture work-outs and/or realize value through market divestiture and for investors to source and acquire adaptive re-use assets. Our brokerage services are supplemented with development services in concept design, pre-planning, and joint-venture formation.
              </p>
            </div>
            
            {/* Horizontal Line */}
            <div className="w-full h-px bg-gray-300 mb-10 lg:mb-12"></div>
            
            {/* Image Section - Balance */}
            <div className="mb-10 lg:mb-12">
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <Image
                  src="/images/RealE-.png"
                  alt="San Francisco Urban Transformation"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized={true}
                />
              </div>
            </div>
            
            {/* Section Title and Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Section Title - Left */}
              <div className="lg:col-span-1">
                <h3 className="text-xl lg:text-2xl font-serif text-gray-900">
                  Our Offerings Include:
                </h3>
              </div>
              
              {/* Content - Right */}
              <div className="lg:col-span-2 space-y-6">
                {/* Transaction Structuring & Negotiation */}
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-semibold text-gray-900 mb-3">
                    Transaction Structuring & Negotiation
                  </h4>
                  <ul className="space-y-1.5 text-sm lg:text-base text-gray-700 font-sans">
                    <li>creative re-envisioning to improve performance</li>
                    <li>offering memoranda with creative & financial vision</li>
                    <li>asset dispositions (on and off-market)</li>
                    <li>fractionalized investment offerings & joint-venturing</li>
                  </ul>
                </div>
                
                {/* Project Sponsor */}
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-semibold text-gray-900 mb-3">
                    Project Sponsor (syndicated investment)
                  </h4>
                  <ul className="space-y-1.5 text-sm lg:text-base text-gray-700 font-sans">
                    <li>financial modeling</li>
                    <li>partner sourcing & identification</li>
                    <li>acquisition negotiation and structured finance</li>
                    <li>deal closing and post-closing management</li>
                  </ul>
                </div>
                
                {/* Pre-development, Pre-planning */}
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-semibold text-gray-900 mb-3">
                    Pre-development, Pre-planning
                  </h4>
                  <ul className="space-y-1.5 text-sm lg:text-base text-gray-700 font-sans">
                    <li>Feasibility assessment</li>
                    <li>engage architecture, construction management</li>
                    <li>construction cost estimates, budget cost analysis</li>
                    <li>pre-planning & planning entitlements</li>
                    <li>surveys and assessments</li>
                  </ul>
                </div>
                
                {/* Development, & Project Management */}
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-semibold text-gray-900 mb-3">
                    Development, & Project Management
                  </h4>
                  <ul className="space-y-1.5 text-sm lg:text-base text-gray-700 font-sans">
                    <li>Assemble and manage integrated team</li>
                    <li>conceptual design, design development, construction drawings</li>
                    <li>construction management</li>
                    <li>controller financial oversights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Gallery - Mixed Images & Videos */}
        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
            {/* Top Row - 2 Large Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {/* Large Image 1 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image 
                    src="/images/NLRE-Image-1.png"
                    alt="NLRE Project"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-1">
                    Architectural Vision
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    San Francisco
                  </p>
                </div>
              </div>
              
              {/* Large Video 1 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    webkit-playsinline="true"
                  >
                    <source src="/videos/Historic_Building_Evolving_Through_Reflections.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-1">
                    Historic Building Evolution
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Through Reflections
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Row - Mixed Images & Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Image 1 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image 
                    src="/images/NLRE-Image-2.png"
                    alt="NLRE Project"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Design Concept
                  </h3>
                  <p className="text-sm text-gray-600">
                    Urban Transformation
                  </p>
                </div>
              </div>
              
              {/* Video 1 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
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
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Architectural Interior
                  </h3>
                  <p className="text-sm text-gray-600">
                    Film Generation
                  </p>
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image 
                    src="/images/RealE-.png"
                    alt="Real Estate Project"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Real Estate Vision
                  </h3>
                  <p className="text-sm text-gray-600">
                    San Francisco
                  </p>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    webkit-playsinline="true"
                  >
                    <source src="/videos/Call_Building_Design_Transformation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Building Design
                  </h3>
                  <p className="text-sm text-gray-600">
                    Transformation
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Row - Remaining Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
              {/* Image 3 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image 
                    src="/images/RealE-2.png"
                    alt="Real Estate Project"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Urban Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    San Francisco
                  </p>
                </div>
              </div>
              
              {/* Image 4 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image 
                    src="/images/RealE-3.png"
                    alt="Real Estate Project"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Architectural Design
                  </h3>
                  <p className="text-sm text-gray-600">
                    Concept
                  </p>
                </div>
              </div>
              
              {/* Video 3 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    webkit-playsinline="true"
                  >
                    <source src="/videos/Architectural_Interior_Film_Generation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Interior Film
                  </h3>
                  <p className="text-sm text-gray-600">
                    Generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
