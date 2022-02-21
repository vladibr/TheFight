import React from 'react'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Fight(props) {

  const navigate = useNavigate();

  const [gameOver, setGameOver] = useState(false);
  const [vladiWin, setVladiWin] = useState(false);
  const [DavidWin, setDavidWin] = useState(false);


  localStorage.setItem('fighters', JSON.stringify(props.fighters))
  const fighters = JSON.parse(localStorage.getItem('fighters'))
  var vladi = fighters[0]
  var david = fighters[1]

  const resetGame = () =>{
    navigate('/');
    window.location.reload(false);
  }

  const fight = () => {
    props.setActive(true)
    vladi.health_points = vladi.health_points - david.attack_power;
    david.health_points = david.health_points - vladi.attack_power;
    props.attackPhase(vladi.health_points,david.health_points)

    if(vladi.health_points <= 0 && david.health_points <= 0){
      alert("ERROR a draw has been detected Reset in motion")
      resetGame()
    }

    if (vladi.health_points <= 0) {
      setGameOver(true)
      setDavidWin(true)      
    }

    if (david.health_points <= 0) {
      setGameOver(true)
      setVladiWin(true)
    }


    setTimeout(() => {
      props.setActive(false)
    }, 500)
  }


  const game = () => {
    return (
      <>
        <div>
          <button id='fightButton' onClick={() => fight()}>
            FIGHT!!!
          </button>
        </div>
        <div className='homePageWithoutButtons'>
          <div className='davidHome'>
            <img className='homepic' src='/images/vladiProfile.jpg' alt = ""></img>
          </div>

          <div className='centeredHome'>

            <div className='chosingOption'>

              <motion.img whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 2
                }} className="Png Option" onClick={() => props.increaseAttack("Tabasco")}  src='/icons/tabasco.png' alt="" />

              <motion.img whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 2
                }} className="Png Option" onClick={() => props.increaseHealth("Coffee")}  src='/icons/coffee.png' alt="" />

              <h1>Choose Fighter !!!</h1>

              <motion.img whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 2
                }} className="Png Option" onClick={() => props.increaseHealth("Sleep")} src='/icons/sleep.png' alt="" />

              <motion.img whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 2
                }} className="Png Option" onClick={() => props.increaseAttack("StarOfDavid")}  src='/icons/star-of-david.png' alt="" />

            </div>
          </div>

          <div className='vladiHome'>
            <img className='homepic' src='/images/davidProfile.jpg' alt = ""></img>
          </div>
        </div>
      </>
    )
  }

  const winner = () => {
    return (
      <>
        <div>
          <div className='homePageWithoutButtons'>
            <button className='resetAndNothing'>
              DO NOTHING !!
            </button>
            <div className='centeredHome'>
              <h1 id='winner'>WINNER!!</h1>
              <img className='winningPicture' src={vladiWin ? '/images/vladiWin.jpg' : '/images/davidWin.jpg'} alt =""></img>
            </div>

            <button onClick={()=> resetGame()} className='resetAndNothing'>
              RESET GAME !!
            </button>
          </div>
        </div>
      </>
    )
  }



  return (
    <div>
      {
        gameOver === false ? game() : winner()
      }
    </div>
  )
}
