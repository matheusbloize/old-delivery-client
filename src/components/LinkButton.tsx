import Link from 'next/link'

interface Props {
  value: string
  styles?: string[]
  pageRef: string
}

const LinkButton = ({ value, styles, pageRef }: Props) => {
  return (
    <Link
      href={pageRef || ``}
      className={`${
        styles && styles.map((style) => style).join(' ')
      } text-[1.8em]
      font-bold
      rounded-full
      py-[.25em]
      px-[.75em]
      mt-[1.5em]
      z-[1]
      self-center
      transition-all
      border-silver-100
      border-solid
      border-[5px]
      hover:text-[#fff]`}
    >
      {value}
    </Link>
  )
}

export default LinkButton
