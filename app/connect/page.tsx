import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Connect() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 pt-12 lg:pt-16 pb-20 lg:pb-24">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Connect</h1>
            
            <div className="mb-8 space-y-4">
              <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800 leading-relaxed">
                Confidential inquiry form. We do not respond to solicitations from brokers or press.
              </p>
              <p className="text-xl lg:text-2xl xl:text-[1.35rem] text-gray-800 leading-relaxed">
                If you are a principal real estate owner seeking an asset disposition, addressing an adaptive re-use project, or acquisition in urban, downtown San Francisco, we welcome your inquiry. If you are a capital market partner investor, please scroll down.
              </p>
            </div>
          </div>
          
          {/* Google Form Card Container */}
          <div 
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
          >
            {/* Internal Header */}
            <div className="px-6 py-5 border-b border-gray-100">
              <div className="font-semibold text-lg text-gray-900 mb-1">Inquiry Intake</div>
              <div className="text-sm text-gray-600">
                Please complete the form below. Responses route to our internal Google Sheet.
              </div>
            </div>

            {/* Embed Wrapper - Crop Google Forms Header */}
            <div className="relative overflow-hidden" style={{ height: '1500px' }}>
              <iframe
                title="nlre.ai Inquiry Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdp1zmEy3QWl-9BLgZmPkFXXpMbtb4Ak8Wycn7Upa0vznjpzw/viewform?embedded=true"
                width="100%"
                height="1600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                style={{ 
                  border: 0,
                  display: 'block',
                  marginTop: '-60px',
                  height: '1660px'
                }}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
