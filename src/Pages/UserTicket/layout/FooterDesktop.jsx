import React from 'react'
import FooterLeft from "../../../assets/Footer-Left.svg"
import FooterRight from '../../../assets/Footer-Right.svg'
import FooterMid from '../../../assets/Footer-Mid.svg'

export default function FooterDesktop() {
  return (
    <div className='flex w-full absolute bottom-0 max-h-[104px] justify-between '>
        <img  src={FooterLeft}/>
        <img  src={FooterRight}/>
    </div>
  )
}
