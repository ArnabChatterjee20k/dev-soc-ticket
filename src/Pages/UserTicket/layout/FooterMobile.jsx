import React from 'react'
import FooterLeft from "../../../assets/Footer-Left.svg"
import FooterRight from '../../../assets/Footer-Right.svg'
import FooterMid from '../../../assets/Footer-Mid.svg'

export default function FooterMobile() {
  return (
    <div className='relative w-full '>
        <img className='w-32 absolute  bottom-0 left-0' src={FooterLeft}/>
        <img className='w-20 absolute  bottom-0 ' src={FooterMid}/>
        <img className='w-20 absolute bottom-0 right-0' src={FooterRight}/>
    </div>
  )
}
