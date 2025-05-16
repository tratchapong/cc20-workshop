import React from 'react'
import CartItem from './CartItem'

function CartSummary() {
  return (
    <div className='w-1/3 bg-orange-100'>
      <h2>Cart Items :</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary