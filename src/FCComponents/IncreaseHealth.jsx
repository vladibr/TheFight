import React from "react";
import { motion } from "framer-motion";





export default function IncreaseHealth(props) {


  
  return (
    <div>
      <div className="homePageWithoutButtons">
        <div>
          <img className="homepic" src="/images/vladiProfile.jpg" alt = ""></img>
        </div>

        <div className="centeredHome">
          <p className="explainStats">
            click icons to increase Health of david or vladi
          </p>
          <p className="explainStats">david likes the cola </p>
          <p className="explainStats">vladi likes cats</p>
          <div className="chosingOption">
            <motion.img
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 2,
              }}
              className="Png Option" onClick={() => props.increaseHealth("Cat")} src='/icons/cat.png'   alt=""
            />

            <h1>Choose Fighter !!!</h1>

            <motion.img
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 2,
              }}
              className="Png Option" onClick={() => props.increaseHealth("Cola")} src='/icons/bottle.png'  alt=""
            />
          </div>
        </div>

        <div>
          <img className="homepic" src="/images/davidProfile.jpg" alt =""></img>
        </div>
      </div>
    </div>
  );
}
