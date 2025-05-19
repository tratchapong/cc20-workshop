import React, { useState } from 'react'

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const { removeFromCart, haveSelected, addToCart, productItem: { id, category, description, title, images, price, rating } } = props
  return (
    <div className="card bg-base-100 w-60 shadow-sm pt-4">
      <figure className='h-36 w-2/3 mx-auto'>
        <img className='h-full w-full object-contain'
          src={images[0]}
          alt={title} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-center line-clamp-1 overflow-hidden">{title}</h2>
        <p className='text-sm text-pink-400 text-center'>{category}</p>
        <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-2'}`}
          onClick={() => setShowDesc(prv => !prv)}
        >{description}</p>
        <div className="card-actions justify-between items-baseline pt-2">
          <p className='text-slate-500 text-xl'>฿{price}</p>
          {!haveSelected && <button className="btn btn-xs btn-primary"
            onClick={() => addToCart(id, title, price)}
            disabled={haveSelected}
          >Add to Cart</button>}
          {haveSelected && (
            <div className="btn btn-xs btn-outline  btn-error"
              onClick={()=>removeFromCart(id)}>
              Cancel
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard