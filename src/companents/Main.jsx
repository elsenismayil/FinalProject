import React from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const Main = () => {
 
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    type: {type:"spring", stiffness: 100},
    hover:{
      backgroundColor:"white", 
    color:"orange", 
    borderColor:"orange",
     transition:"5s"
    }

  }
  return (
    <div className="home container flex flex-col justify-center items-center h-1/2 text-white text-lg font-semibold">
      <motion.h2 animate={{ scale: 2,  }}>
        Welcome to Pizza Creater
      </motion.h2>
    
        <motion.button className="rounded text-2xl px-10 py-3  my-10 bg-transparent  text-gray-50  border-2 border-white "
          initial="hidden"
          animate="visible"
          transition="transition"
          type="type"
         whileHover='hover'
          variants={variants}
          
          
          >
          <Link to ='/chooses'>
          Create Your Pizza 
          </Link>
        
        </motion.button>
    
    </div>
  )
}

export default Main;