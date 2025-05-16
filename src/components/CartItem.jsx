import React from 'react'

function CartItem() {
  return (
    <div className='flex justify-between px-1.5'>
      <p>Shoes</p>
      <div className='flex gap-1'>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>-</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>+</p>
      </div>
      <p>1 * ฿1000</p>
    </div>
  )
}

export default CartItem