import React from 'react'
import { motion } from 'framer-motion'

export default function IncreaseAttack(props) {
 

  return (
    <div>

      <div className='homePageWithoutButtons'>
        <div className='davidHome'>
          <img className='homepic' src='/images/vladiProfile.jpg' alt = ""></img>
        </div>

        <div className='centeredHome'>
          <p className='explainStats'>click icons to increase attack of david or vladi</p>
          <p className='explainStats'>the pizza makes david strong !</p>
          <p className='explainStats'>the vodka makes the vladi angry !</p>

          <div className='chosingOption'>

            <motion.img whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 2
              }} className="Png Option" onClick={() => props.increaseAttack("Vodka")}src='/icons/vodka.png'  alt="" />

            <h1>Choose Fighter !!!</h1>


            <motion.img whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 2
              }} className='Png Option' onClick={() => props.increaseAttack("Pizza")}  src='/icons/pizza.png' alt="" />

          </div>

        </div>

        <div className='vladiHome'>
          <img className='homepic' src='/images/davidProfile.jpg' alt = ""></img>
        </div>
      </div>




    </div>
  )
}
