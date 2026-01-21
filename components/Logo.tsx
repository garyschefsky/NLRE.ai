import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20 lg:w-28 lg:h-28 flex-shrink-0 relative">
        <Image
          src="/images/logo.jpg"
          alt="nlre.ai Logo"
          width={300}
          height={300}
          className="object-contain"
          quality={100}
          priority
          unoptimized={true}
        />
      </div>
        <h1 className="text-lg lg:text-xl font-serif font-normal tracking-wide text-gray-900">
          nlre.ai
        </h1>
    </div>
  )
}
