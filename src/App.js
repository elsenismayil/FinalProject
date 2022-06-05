import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './companents/Navbar'
import Main from './companents/Main'
import Chooses from './companents/Chooses'
import Topping from './companents/Topping'
import Order from './companents/Order'

function App() {
const [pizza, setPizza]=useState({choose:"", toppings:[]})

const addChooses=(choose) => {
    setPizza({...pizza, choose})
}

const addTopping=(topping) => {
  let newToppings;
  if(!pizza.toppings.includes(topping)) {
    newToppings =[...pizza.toppings, topping];
  }
  else{
    newToppings =pizza.toppings.filter(item => item!==topping)
  }
  setPizza({...pizza, toppings:newToppings})

}



  return (
    <Router>
     <div className="App">
      <Navbar/>
 <Switch>
   <Route path="/" exact>
     <Main />
   </Route>
   <Route path="/chooses" >
     <Chooses pizza={pizza} addChooses={addChooses}/>
   </Route>
   <Route path="/topping" >
     <Topping pizza={pizza} addTopping={addTopping}/>
   </Route>
   <Route>
     <Order pizza={pizza} />
   </Route>
 </Switch>
    </div>
    </Router>
   
  );
}

export default App;
