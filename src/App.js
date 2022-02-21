import './App.css';
import Home from './FCComponents/Home';
import Navbar from './FCComponents/Navbar';
import {Route, Routes} from 'react-router-dom'
import Fight from './FCComponents/Fight';
import IncreaseHealth from './FCComponents/IncreaseHealth';
import IncreaseAttack from './FCComponents/IncreaseAttack';
import React, {useState,useEffect} from 'react';
import Colide from './FCComponents/Colide';

const fighter_list = [
  {
      fighter_id: 0,
      name: 'Vladi',
      attack_power: 10,
      health_points: 100,
      items_attack: ['Vodka', 'Tabasco'],
      items_health: ['Coffee', 'Cat'],
      desc : "vladi comes from a long family of warriors they call themselves the cheekybreeky's, they use a forbiden fighting style called the spinning vodka"
  },

  {
      fighter_id: 1,
      name: 'David',
      attack_power: 10,
      health_points: 100,
      items_attack: ['Pizza' , 'StarOfDavid'],
      items_health: ['Sleep', 'Cola'],
      desc : "grand marshel doctor professor mr david or simplified, grand doctor professor mr david is a top level mozzarela sticks wrestler trained by the monkeys of the east mountains of italy "
  }
]


function App(){
    
const [isActive, setIsActive] = useState(false)

const [fighters, setFighters] = useState(fighter_list)

useEffect(()=>{
  localStorage.setItem('fighters', JSON.stringify(fighter_list))
}, []) 

const increaseHealth = (power_up) => {
  
  let updated_fighter_list = fighter_list.map((fighter) =>{
    if(fighter.items_health.includes(power_up)){
      if(power_up === "Coffee" || power_up === "Sleep"  )
        fighter.health_points += 50
        else{
          fighter.health_points += 10
        }
    }
    return fighter
})
  
    
 setFighters(updated_fighter_list)

 localStorage.setItem('fighters', JSON.stringify(fighter_list))
 
 console.log(fighters);
}

const increaseAttack = (power_up) => {
  
    let updated_fighter_list = fighter_list.map((fighter) =>{
        if(fighter.items_attack.includes(power_up)){
          if(power_up === "Tabasco" || power_up === "StarOfDavid"  )
            fighter.attack_power += 50
            else{
              fighter.attack_power += 10
            }
        }
        return fighter
    })
      
  setFighters(updated_fighter_list)

   localStorage.setItem('fighters', JSON.stringify(fighter_list))
   
   console.log(fighters);
} 

const attackPhase = (vladi_health,david_health) => {

  let updated_fighter_list = fighter_list.map((fighter) =>{
    if(fighter.name === "Vladi"){
        fighter.health_points = vladi_health
        console.log(fighter.health_points);
    }
    if(fighter.name === "David"){
      fighter.health_points = david_health
    }
    return fighter
})

setFighters(updated_fighter_list)

localStorage.setItem('fighters', JSON.stringify(fighters))

}


  return (
    <div className="App">
      <Navbar/> 
      <Colide fighters = {fighters} active ={isActive} setActive = {setIsActive}/>
      <Routes>
        <Route path='/' element={<Home fighters={fighters}/>}/>
        <Route path='/increasehealth' element={<IncreaseHealth increaseHealth={increaseHealth}/>}/>
        <Route path='/increaseattack' element={<IncreaseAttack increaseAttack={increaseAttack}/>}/>
        <Route path='/fight' element={<Fight fighters={fighters} increaseHealth={increaseHealth}
               increaseAttack={increaseAttack} setActive = {setIsActive} attackPhase ={attackPhase}/>}/> 
      </Routes> 
    </div>
  );
}

export default App;