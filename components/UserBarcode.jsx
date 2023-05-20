import React from 'react'
import Barcode from 'react-barcode'

export default function UserBarcode() {
  return <Barcode value="https://google.com" width={1} height={70} displayValue={false}/>;
}
