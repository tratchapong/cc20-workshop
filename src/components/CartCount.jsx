import React from 'react'

function CartCount(props) {
  const { itemCount } = props
  return (
    <div className='relative'>
      <div className="w-16">
        <img src="https://www.svgrepo.com/show/134537/cart.svg" alt="Cart" />
      </div>
      <div className='text-white bg-lime-500 w-6 h-6 rounded-full flex justify-center items-center absolute top-1/4 left-2/5'>{itemCount}</div>
    </div>
  )
}

export default CartCount