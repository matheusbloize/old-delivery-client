'use client'

import Image, { StaticImageData } from 'next/image'

interface Props {
  icon: StaticImageData
  name: string
  fn: () => void
}

const LowBarButton = ({ icon, name, fn }: Props) => {
  return (
    <button
      onClick={fn}
      className="flex flex-col font-[300] justify-center items-center"
    >
      <Image src={icon} alt={name} width={30} />
      <span>{name}</span>
    </button>
  )
}

export default LowBarButton
