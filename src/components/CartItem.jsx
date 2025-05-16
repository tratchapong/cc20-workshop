import React from 'react'

function CartItem(props) {
  const { addToCart, decQuantity, item : {id, title, price, quantity}} = props
  return (
    <div className='flex justify-between items-center p-1.5 flex-1 rounded bg-lime-50'>
      <p className='flex-1 min-w-1/2 line-clamp-1'>{title.split(' ').filter( (el,i) => i<3)}</p>
      <div className='flex gap-1 w-fit'>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
          onClick={()=>decQuantity(id)}
        >-</p>
        <p className='border w-5 h-5 flex justify-center items-center bg-amber-500 text-white'>{quantity}</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
          onClick={()=>addToCart(id)}>+</p>
      </div>
      <p className=' flex-1 text-end pe-2'> ฿{price.toFixed(2)}</p>
    </div>
  )
}

export default CartItem