'use client'

import LowBar from '@/components/LowBar'
import { ChangeEvent, useRef, useState } from 'react'

interface Address {
  cep: number
  street: string
  number: number
  complement: string
  reference: string
  alias: string
}

const Account = () => {
  const messageDivRef = useRef<HTMLDivElement>(null)
  const informationDivRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const [cep, setCep] = useState<number>(0)
  const [street, setStreet] = useState<string>('')
  const [number, setNumber] = useState<number>(0)
  const [complement, setComplement] = useState<string>('')
  const [reference, setReference] = useState<string>('')
  const [alias, setAlias] = useState<string>('')
  const [addressList, setAddressList] = useState<Address[]>([])

  const toggleMessage = () => {
    if (messageDivRef.current) {
      messageDivRef.current.style.opacity === '1' ||
      messageDivRef.current.style.opacity === ''
        ? closeMessageBox()
        : openMessageBox()
    }
  }

  const closeMessageBox = () => {
    if (
      messageDivRef.current &&
      informationDivRef.current &&
      phoneRef.current
    ) {
      messageDivRef.current.style.display = 'none'
      informationDivRef.current.style.display = 'flex'
      phoneRef.current.disabled = !phoneRef.current.disabled
    }
  }

  const openMessageBox = () => {
    if (
      messageDivRef.current &&
      informationDivRef.current &&
      phoneRef.current
    ) {
      messageDivRef.current.style.display = 'block'
      informationDivRef.current.style.display = 'none'
      phoneRef.current.disabled = !phoneRef.current.disabled
      setCep(0)
      setStreet('')
      setNumber(0)
      setComplement('')
      setReference('')
      setAlias('')
    }
  }

  const saveAddress = () => {
    if (cep && street && number && complement && reference && alias) {
      if (
        cep.toString().length === 8 &&
        street.length > 6 &&
        number >= 0 &&
        complement.length >= 0 &&
        reference.length >= 0 &&
        alias.length >= 0
      ) {
        setAddressList((prev) => [
          ...prev,
          { cep, street, number, complement, reference, alias },
        ])
        openMessageBox()
      }
    }
  }

  return (
    <main className="flex flex-col bg-green-100 h-full">
      <h3 className="self-center mt-[1em] text-[2em] font-bold">Conta</h3>
      <div className="bg-red-100 mt-[1em]">
        <div className="bg-blue-100 flex items-center">
          <div className="bg-slate-400 p-[1em] rounded-full ml-[.5em] mr-[1em] font-bold">
            CS
          </div>
          <span>Cleber Silva</span>
        </div>
        <div className="ml-[.5em] mt-[1em]">
          <label className="font-bold mr-[.5em]">Celular:</label>
          <input
            ref={phoneRef}
            type="text"
            className="w-[35%]"
            value={81912345678}
            disabled
          />
        </div>
        <div className="ml-[.5em] mt-[1em]">
          <label className="font-bold mr-[.5em]">Endereço:</label>
          {addressList.length > 0 ? (
            <>
              {addressList.map((address) => (
                <div key={address.cep}>{address.street}</div>
              ))}
            </>
          ) : (
            <p>Nenhum endereço cadastrado</p>
          )}
          <div
            ref={informationDivRef}
            className="flex-col justify-center p-[.2em] hidden"
          >
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">CEP:</label>
              <input
                type="number"
                className="w-[30%] pl-[.2em]"
                placeholder="12345-670"
                value={cep || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setCep(Number(event.target.value))
                }
              />
            </div>
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">Rua:</label>
              <input
                type="text"
                className="pl-[.2em]"
                placeholder="Carlos Videl"
                value={street || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setStreet(event.target.value)
                }
              />
            </div>
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">Número:</label>
              <input
                type="number"
                className="w-[15%] pl-[.2em]"
                placeholder="123"
                value={number || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNumber(Number(event.target.value))
                }
              />
            </div>
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">Complemento:</label>
              <input
                type="text"
                className="w-1/4 pl-[.2em]"
                placeholder="Apto 104"
                value={complement || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setComplement(event.target.value)
                }
              />
            </div>
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">Referência:</label>
              <input
                type="text"
                className="w-[60%] pl-[.2em]"
                placeholder="Na rua do mercadinho"
                value={reference || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setReference(event.target.value)
                }
              />
            </div>
            <div className="mt-[.8em]">
              <label className="mr-[.5em]">Apelido:</label>
              <input
                type="text"
                className="w-2/4 pl-[.2em]"
                placeholder="Casa"
                value={alias || ''}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setAlias(event.target.value)
                }
              />
            </div>
            <div className="flex justify-evenly my-[1.5em]">
              <button
                onClick={() => openMessageBox()}
                className="bg-red-400 py-[.5em] px-[1em] rounded-[1em] text-white"
              >
                Cancelar
              </button>
              <button
                onClick={() => saveAddress()}
                className="bg-green-400 py-[.5em] px-[1em] rounded-[1em] text-white"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={messageDivRef}
        onClick={toggleMessage}
        className="bg-gray-700 text-white mt-[2em] w-[80%] my-0 mx-auto p-[.5em] rounded-[1em]"
      >
        <p>
          Olá, Cleber Silva. Caso esteja faltando alguma informação ou se quiser
          alterar algo, clique <span className="text-cyan-200">aqui</span>.
        </p>
      </div>
      <LowBar />
    </main>
  )
}

export default Account
