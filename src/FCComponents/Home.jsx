import React, { useState} from 'react'
import Modal from './Modal';
import { motion, AnimatePresence } from "framer-motion";
import PlayerCard from './PlayerCard';



export default function Home(props) {


  const [vladi, setVladi] = useState(false);
  const isVladi = () => setVladi(true);
  const isDavid = () => setVladi(false);

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const modalAndVladi = () => {
    isVladi()
    modalOpen ? close() : open()
  }
  const modalAndDavid = () => {
    isDavid()
    modalOpen ? close() : open()
  }

  const fightersProfile = JSON.parse(localStorage.getItem('fighters'))

  return (
    <div>
      <div className='homePage'>
        <div>
          <img className='homepic' src='/images/vladiProfile.jpg' alt=""></img>

          <motion.button
            className="save-button"
            onClick={() => modalAndDavid()}// checks if modal and vladi are false or true respectivly
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Vladi
          </motion.button>


        </div>

        <div className='centeredHome'>
          <h1>the FIGHT!</h1>
          <h4>by david and vladi, and david</h4>
          <h5>while scrolling through this site you will see icons, click them to make us stronger</h5>
          <h5>click the buttons below our picture for a brief about us </h5>
        </div>

        <div>
          <img className='homepic' src='/images/davidProfile.jpg' alt=""></img>

          <motion.button
            className="save-button"
            onClick={() => modalAndVladi()} // checks if modal and vladi are false or true respectivly
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            David
          </motion.button>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={vladi ? <PlayerCard data = { fightersProfile[1]}/> :  <PlayerCard data = { fightersProfile[0]}/>} />}
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}