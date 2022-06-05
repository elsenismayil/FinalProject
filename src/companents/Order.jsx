import React from 'react'

export default function Order({pizza}) {
  return (
    <div className="text-white text-2xl font-semibold ">
        <h2 >Thank you for your order </h2>
        <p className="my-3">You ordered a {pizza.choose} pizza with:</p>
       {pizza.toppings.map(topping=><li>
           {topping}
       </li>)}
  
    </div>
  )
}
