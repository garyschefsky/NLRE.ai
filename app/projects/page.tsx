import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Portfolio</h1>
          
          <div className="max-w-5xl mb-12">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 mb-8">
              This section showcases our current and completed projects, as well as offering memoranda for available opportunities.
            </p>
          </div>

          {/* Visual Gallery - Mixed Images & Videos */}
          <div className="mb-16">
            {/* Top Row - 2 Large Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {/* Large Image */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image
                    src="/images/116 New Montgomery.png"
                    alt="116 New Montgomery Street"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-1">
                    116 New Montgomery Street
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Historic High-Rise Transformation
                  </p>
                </div>
              </div>
              
              {/* Large Video */}
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
                    Building Evolution
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Through Reflections
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - Mixed Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Image 1 */}
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-video bg-black overflow-hidden mb-4">
                  <Image
                    src="/images/1495 S. El Camino Real, San Mateo.png"
                    alt="1495 S. El Camino Real"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    1495 S. El Camino Real
                  </h3>
                  <p className="text-sm text-gray-600">
                    San Mateo
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
                    <source src="/videos/Call_Building_Design_Transformation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Design Transformation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Building Evolution
                  </p>
                </div>
              </div>
              
              {/* Image 2 */}
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
                  <h3 className="text-lg lg:text-xl font-serif text-gray-900 mb-1">
                    Architectural Vision
                  </h3>
                  <p className="text-sm text-gray-600">
                    San Francisco
                  </p>
                </div>
              </div>
              
              {/* Image 3 */}
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
