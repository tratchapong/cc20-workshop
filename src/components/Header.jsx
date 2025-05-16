import React from 'react'
import CartCount from './CartCount'

function Header(props) {
  const {itemCount} = props
  return (
    <div className='flex justify-between h-1/12 bg-amber-300'>
      <div>
        Logo, Brand
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header