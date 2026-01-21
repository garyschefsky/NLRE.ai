import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Connect() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-12 pb-8 lg:pb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black">Connect</h1>
          
          <div className="mb-6 space-y-4">
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800 leading-relaxed">
              Confidential inquiry form. We do not respond to solicitations from brokers or press.
            </p>
            <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800 leading-relaxed">
              If you are a principal real estate owner seeking an asset disposition, addressing an adaptive re-use project, or acquisition in urban, downtown San Francisco, we welcome your inquiry. If you are a capital market partner investor, please scroll down.
            </p>
          </div>
          
          {/* Google Form Embed - Simple and Proportional */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-0">
            <iframe
              title="nlre.ai Inquiry Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdp1zmEy3QWl-9BLgZmPkFXXpMbtb4Ak8Wycn7Upa0vznjpzw/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              style={{ 
                border: 0,
                display: 'block',
                minHeight: '1200px'
              }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
