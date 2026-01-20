import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientsWeServe() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Clients We Serve</h1>
          
          <div className="max-w-5xl space-y-8">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              Whether serving private individuals or national institutions, our approach remains consistent: we serve as a <strong className="font-semibold">fiduciary-oriented</strong>, dedicated partner. Having navigated the unique requirements of ultra-high-net-worth and high-profile clients, our <strong className="font-semibold">high-caliber team</strong> recognizes that protecting client privacy is as critical as the transaction itself.
            </p>
            
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              We are committed to providing <strong className="font-semibold">discreet</strong> representation that safeguards your interests while aggressively driving toward superior outcomes. Contact us for an initial consultation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
