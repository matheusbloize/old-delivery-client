'use client'

import LowBarButton from './LowBarButton'
import homeBaseImage from '@/assets/images/homeBase.png'
import listBaseImage from '@/assets/images/listBase.png'
import userBaseImage from '@/assets/images/userBase.png'
import { useRouter } from 'next/navigation'

const LowBar = () => {
  const router = useRouter()

  return (
    <div className="flex justify-around w-full pb-[.5em] pt-[1em] border-t-[.4em] border-gray-700 fixed bottom-0">
      <LowBarButton
        fn={() => router.push('/home')}
        icon={homeBaseImage}
        name="Início"
      />
      <LowBarButton
        fn={() => router.push('/orders')}
        icon={listBaseImage}
        name="Pedidos"
      />
      <LowBarButton
        fn={() => router.push('/account')}
        icon={userBaseImage}
        name="Conta"
      />
    </div>
  )
}

export default LowBar
