'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LinkButton from '@/components/LinkButton'

const Login = () => {
  const [searchAccount, setSearchAccount] = useState(false)
  const [userPhone, setUserPhone] = useState<string>('')
  const router = useRouter()

  const validatePhone = (event) => {
    event.preventDefault()
    if (!userPhone) return
    console.log(searchAccount)
    setSearchAccount(!searchAccount)
    // check if number already exists on database
    // if exists, login the user and send him to home page
    // if doesn't, beautiful animation of name input to user sign up and then, send him to home page
    router.push('/home')
  }

  return (
    <main className="flex flex-col w-full h-full items-center bg-gradient-home text-white font-bold">
      <h3 className="self-center mt-[1em] text-[2em]">Login</h3>
      <form onSubmit={validatePhone} className="flex flex-col w-[80%] mt-[3em]">
        <label>Número do Celular (com DDD):</label>
        <input
          type="number"
          className="border-gray-700 border-[.2em] my-[1em] pt-[.5em] pb-[.5em] pl-[1em] outline-none text-black focus:shadow-md"
          onChange={(event) => setUserPhone(event.target.value)}
          placeholder="exemplo: 81912345678"
        />
        {searchAccount === false && (
          <div>
            <label>Nome:</label>
            <input
              type="text"
              className="border-gray-700 w-full border-[.2em] mt-[1em] pt-[.5em] pb-[.5em] pl-[1em] outline-none text-black focus:shadow-md"
              onChange={(event) => setUserPhone(event.target.value)}
              placeholder="exemplo: Cleber Silva"
            />
          </div>
        )}
        <input
          type="submit"
          value="Logar"
          className="text-[1.8em] bg-gray-700 w-[50%] self-center font-bold rounded-full py-[.15em] px-[.75em] mt-[1.5em] border-silver-100 border-solid border-[5px]"
        />
        {/* {searchAccount === false && (
          <LinkButton pageRef="/signup" value="Cadastrar" />
        )}
        {searchAccount === true && <LinkButton pageRef="/Home" value="Logar" />} */}
      </form>
    </main>
  )
}

export default Login
