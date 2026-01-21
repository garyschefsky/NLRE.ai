import Image from 'next/image'

export default function PageHeaderImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="relative w-full" style={{ height: '40vh', maxHeight: '500px', minHeight: '240px' }}>
        <Image
          src={src}
          alt={alt || ""}
          fill
          className="object-cover"
          quality={100}
          unoptimized={true}
        />
      </div>
    </div>
  )
}
