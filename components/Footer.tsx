export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-8 lg:py-10">
        <div className="text-center space-y-4">
          <div className="text-base lg:text-lg text-gray-600">
            <p className="mb-2">580 California Street, 12th Floor</p>
            <p className="mb-2">San Francisco, CA 94104</p>
            <p className="mb-4">
              <a href="mailto:info@nlre.ai" className="hover:text-gray-900 transition-colors">
                info@nlre.ai
              </a>
            </p>
          </div>
          <p className="text-sm lg:text-base text-gray-500">
            © 2026 New Luna Ventures Inc., d.b.a NLRE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
