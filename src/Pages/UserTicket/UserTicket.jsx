import React from 'react'
import Logo from "../../assets/Logo.png"
import Card from './components/Card'
export default function UserTicket() {
  return (
    <main className='w-ful min-h-screen flex flex-col items-center bg-gradient-to-b from-[#396afc] to-[#2948ff]'>
      {/* <img src={Logo} alt="logo" /> */}
      <Card/>
    </main>
  )
}
