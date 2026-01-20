import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-black">Projects/OM</h1>
          
          <div className="max-w-5xl">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">
              TBD
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
