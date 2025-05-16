import React from 'react'

function CartItem(props) {
  const { addToCart, decQuantity, item : {id, title, price, quantity}} = props
  return (
    <div className='flex justify-between px-1.5 flex-1'>
      <p className='flex-1 min-w-3/5 '>{title.split(' ').filter( (el,i) => i<3)}</p>
      <div className='flex gap-1 w-fit'>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
          onClick={()=>decQuantity(id)}
        >-</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
          onClick={()=>addToCart(id)}>+</p>
      </div>
      <p className=' flex-1 text-end pe-2'>{quantity} * ฿{price}</p>
    </div>
  )
}

export default CartItem