import React from 'react'

import Card from './components/Card'
import FooterMobile from './layout/FooterMobile'
import FooterDesktop from './layout/FooterDesktop'
import useMediaQuery from '../../hooks/useMediaQuery'
export default function UserTicket() {
  const isSM = useMediaQuery("(min-width:576px)")
  return (
    <main className='w-ful min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#396afc] to-[#2948ff] pt-24'>
      <Card/>
      {isSM?<FooterDesktop/>:<FooterMobile/>}
    </main>
  )
}
