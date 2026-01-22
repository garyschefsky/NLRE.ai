export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
        <div className="text-center space-y-6">
          <div className="text-base lg:text-lg text-gray-700 space-y-2">
            <p className="font-medium">580 California Street, 12th Floor</p>
            <p className="text-gray-600">San Francisco, CA 94104</p>
            <p className="pt-2">
              <a 
                href="mailto:info@nlre.ai" 
                className="text-gray-900 hover:text-gray-700 transition-colors font-medium border-b border-gray-300 hover:border-gray-500 pb-1"
              >
                info@nlre.ai
              </a>
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm lg:text-base text-gray-500 font-light tracking-wide">
              © 2026 New Luna Ventures Inc., d.b.a nlre.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
