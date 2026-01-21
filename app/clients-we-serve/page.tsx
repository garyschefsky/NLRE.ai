import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ClientsWeServe() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        {/* Video at Top - Decorative Only, No Title/Caption */}
        <div className="relative w-full overflow-hidden bg-white" style={{ height: '40vh', maxHeight: '500px', minHeight: '240px' }}>
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            style={{ imageRendering: 'crisp-edges', willChange: 'contents' }}
          >
            <source src="/videos/Historic_Building_Evolving_Through_Reflections.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-12 pb-20 lg:pb-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Clients We Serve</h1>
          
          <div className="max-w-5xl space-y-8">
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] leading-relaxed text-gray-800">
              Whether serving private individuals or national institutions, our approach remains consistent: we serve as a <strong className="font-semibold">fiduciary-oriented</strong>, dedicated partner. Having navigated the unique requirements of ultra-high-net-worth and high-profile clients, our <strong className="font-semibold">high-caliber team</strong> recognizes that protecting client privacy is as critical as the transaction itself.
            </p>
            
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] leading-relaxed text-gray-800">
              We are committed to providing <strong className="font-semibold">discrete</strong> representation that safeguards your interests while aggressively driving toward superior outcomes.
            </p>
            
            <Link 
              href="/connect" 
              className="inline-block mt-5 px-5 py-3 border border-gray-800 text-gray-800 no-underline font-medium rounded transition-all duration-200 hover:bg-gray-800 hover:text-white"
            >
              Contact us for an initial consultation.
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
