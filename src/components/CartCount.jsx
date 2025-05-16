import React from 'react'

function CartCount(props) {
  const {itemCount} = props
  return (
    <div>CartCount : {itemCount}</div>
  )
}

export default CartCount