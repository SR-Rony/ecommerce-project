import Image from 'next/image'
import React from 'react'

interface ImagesProps {
  src: Oject | string
  alt?: string
  width: number
  height: number
  className?: string
}

const Images: React.FC<ImagesProps> = ({ src, alt = 'images', width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Images
