import React from 'react'
import {Link} from 'react-router-dom'

export default function Topping({pizza, addTopping}) {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div>
        <h2 className="text-3xl text-white font-semibold">Choose Topping</h2>
        <ul>
            {toppings.map(topping=>{
                let allToppings = pizza.toppings.includes(topping) ? "active" :null
                return(
                    <li key={topping} onClick={()=>addTopping(topping)} className="text-white font-semibold py-1">
                        <span className={allToppings}>{topping}</span>
                        </li>
                )
            })}

        </ul>
    

        <Link to="/order">
            <button className="rounded text-2xl px-10 py-3  my-10 bg-transparent hover:bg-white text-gray-50 hover:text-orange-500 border-2 border-white hover:border-orange-500">
            Order
            </button>
          </Link>
    </div>
  )
}
