'use client'

import LinkButton from '@/components/LinkButton'
import burgerImage from '@/assets/images/burger.svg'
import pizzaImage from '@/assets/images/pizza.svg'
import milkshakeImage from '@/assets/images/milkshake.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-home">
      <div className="relative flex flex-col items-center max-w-[80%] m-[auto] overflow-visible">
        <Image
          className="drop-shadow-3xl absolute right-[-10.5em] scale-125"
          src={burgerImage}
          alt="Imagem de hambúrguer"
        />
        <div className="flex flex-col text-[2em] w-full my-[4em] font-bold">
          <span className="text-[2em]">Olá,</span>
          <p>Boas-vindas ao</p>
          <h1 className="text-[2em] text-[#fff]">Delivery</h1>
        </div>
        <Image
          className="drop-shadow-3xl absolute top-[20em] right-[9em]"
          src={pizzaImage}
          alt="Imagem de pizza"
        />
        <span className="mt-[-3em] text-[1.2em] font-bold">
          Não perca mais tempo, venha conhecer nossas deliciosas opções!
        </span>
        <LinkButton value="ENTRAR" pageRef="/login" />
        <Image
          className="drop-shadow-3xl absolute top-[29em] right-[-7.5em]"
          src={milkshakeImage}
          alt="Imagem de milkshake"
        />
      </div>
    </main>
  )
}
