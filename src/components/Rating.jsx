import React from 'react'

function Rating(props) {
  const { rating : {rate, count} } = props
  // console.log(rate, Math.round(rate))
  return (
    <div className="rating justify-center rating-xs">
      { [1,2,3,4,5].map(el=> (
        el === Math.round(rate) 
        ? <div className="mask mask-star bg-blue-500" aria-label={`${rate} star`} aria-current="true"></div>
        : <div className="mask mask-star bg-blue-500" aria-label={`${rate} star`}></div>
      ))}

      {/* <div className="mask mask-star" aria-label="1 star"></div>
      <div className="mask mask-star" aria-label="2 star"></div>
      <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
      <div className="mask mask-star" aria-label="4 star"></div>
      <div className="mask mask-star" aria-label="5 star"></div> */}
    </div>
  )
}

export default Rating
