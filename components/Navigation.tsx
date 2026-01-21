'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type NavItem = {
  href: string
  label: string
  hidden?: boolean
}

const navItems: NavItem[] = [
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/clients-we-serve', label: 'Clients We Serve' },
  { href: '/projects', label: 'Projects/OM' },
  { href: '/connect', label: 'Connect' },
]

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm ${isHomePage ? 'border-b-0' : 'border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center">
            <div className="h-14 w-auto flex-shrink-0 relative -ml-1.5">
              <Image
                src="/images/nlre-logo.png"
                alt="nlre.ai Logo"
                width={200}
                height={200}
                className="h-14 w-auto object-contain"
                quality={100}
                priority
                unoptimized={true}
              />
            </div>
          </Link>
          
          {/* Navigation Links on Right */}
          <div className="flex space-x-6 lg:space-x-8">
            {navItems.filter(item => !item.hidden).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs lg:text-sm font-serif transition-colors ${
                    isActive
                      ? 'text-gray-900 border-b border-gray-900 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
