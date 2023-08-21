'use client'

import { useState } from 'react'
import LinkButton from '@/components/LinkButton'

export default function Login() {
  const [searchAccount, setSearchAccount] = useState()

  return (
    <main className="flex flex-col">
      <h3 className="self-center mt-[1em] text-[2em] font-bold">Login</h3>
      <label>Número do Celular</label>
      <input
        type="number"
        className="bg-red-100 border-red-500 border-[.2em]"
      />
      <button>Logar</button>
      {searchAccount === false && (
        <LinkButton pageRef="/signup" value="Cadastrar" />
      )}
      {searchAccount === true && <LinkButton pageRef="/Home" value="Logar" />}
    </main>
  )
}
