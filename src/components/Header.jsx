import React from 'react'
import CartCount from './CartCount'

function Header(props) {
  const {itemCount} = props
  return (
    <div className='flex justify-between items-center px-4 h-1/12 bg-amber-300'>
      <div className='w-15 h-15 flex items-start gap-2 border border-slate-300 bg-violet-300 rounded ps-1'>
        <p className="text-xl text-white">CC</p>
        <img src="https://www.svgrepo.com/show/401387/department-store.svg" alt="shop logo" />
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header