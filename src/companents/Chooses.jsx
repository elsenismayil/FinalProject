import React from "react";
import { Link } from "react-router-dom";
import {motion,useMotionValue,useTransform} from 'framer-motion'

const Chooses = ({ pizza, addChooses }) => {
  const choosePizza = ["Classic", "Thin & Crispy", "Thick Crust"];
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])


  return (
    <motion.div 
   initial={{x:100}}
   animate={{x:0}}
   duration={{duration:100}}
   type={{type:"spring"}}
    >
      <h2 className="text-white font-semibold text-3xl" >Choose :</h2>

      <ul>
        {choosePizza.map((choose) => {
          return (
            <li key={choose} onClick={() => addChooses(choose)} className="py-2 text-white  text-3xl">
              <span className={pizza.choose ===choose ?"active" : null}> {choose}</span>
            </li>
            
          );
        })}
        
      </ul>

      {pizza.choose && (
        <motion.div
        initial={{x:-100}}
        animate={{x:0}}
        >
          <Link to="/topping">
            <button className="rounded text-2xl px-10 py-3  my-10 bg-transparent hover:bg-white text-gray-50 hover:text-orange-500 border-2 border-white hover:border-orange-500">
              Next
            </button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Chooses;
