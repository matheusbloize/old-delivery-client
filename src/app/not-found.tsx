'use client'

import { useRouter } from 'next/navigation'
import timerVideo from '@/assets/videos/timer.gif'
import Image from 'next/image'

const NotFoundPage = () => {
  const router = useRouter()

  setTimeout(() => {
    router.push('/')
  }, 5000)

  return (
    <main className="bg-[#7C2552] w-full h-full flex flex-col items-center text-white font-bold">
      <h3 className="mt-[2em] mb-[.5em] text-[2em]">Algo deu errado!</h3>
      <p className="m-[1em]">Você será redirecionado para a página inicial.</p>
      <Image src={timerVideo} alt="Carregando..." />
    </main>
  )
}

export default NotFoundPage
