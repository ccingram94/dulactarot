import Head from 'next/head'
import Image from 'next/image'
import back from '../public/back.png'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { assignCard1, assignCard2, assignCard3 } from '../cardSlice'

export default function ThreeCard() {
  const card1 = useSelector((state) => state.counter.card1);
  const card2 = useSelector((state) => state.counter.card2);
  const card3 = useSelector((state) => state.counter.card3);
  const dispatch = useDispatch()
  const [cardsDealt, setCardsDealt] = useState(false);
  
  function dealCards() {
    setCardsDealt(true);
    assignCards();
  }

  function assignCards () {
    const result1 = Math.floor(Math.random() * 79)
    const result2 = Math.floor(Math.random() * 79)
    const result3 = Math.floor(Math.random() * 79)
    dispatch(assignCard1(result1));
    dispatch(assignCard2(result2));
    dispatch(assignCard3(result3));
  }

  return (
    <div className="bg-black">
      <div className="w-screen bg-black flex flex-col flex-wrap justify-center items-center pt-10">
        
          <AnimatePresence>
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5}}>
              <div>
                {!cardsDealt && 
                <motion.div transition={{ delay: 0.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} className="rounded-xl max-w-xs p-12">
                  <div onClick={() => dealCards()} className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                    <Image src={back} className="rounded-xl bg-yellow-300"/>
                  </div>
                  <p>click the deck to deal your cards</p>
                  <p>card 1 is currently {card1}</p>
                </motion.div>
                }
              </div>
              <div>
                {cardsDealt && 
                <div>
                  <h2 className="text-center">click to reveal your cards</h2>
                  <p>
                    Card 1 is {card1}
                  </p>
                  <p>
                    Card 2 is {card2}
                  </p>
                  <p>
                    Card 3 is {card3}
                  </p>
                  <motion.div className="flex flex-row flex-wrap justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                        <div className=" max-w-xs p-12" >
                          <h2 className="font-montserrat">Past</h2>
                          <Image src={back} className="rounded-xl" />
                        </div>
                        <div className=" max-w-xs p-12">
                          <h2>Present</h2>
                          <Image src={back} className="rounded-xl" />
                        </div>
                        <div className=" max-w-xs p-12">
                          <h2>Future</h2>
                          <Image src={back} className="rounded-xl" />
                        </div>
                  </motion.div>
                  </div>
                }
              </div>

            </motion.div>
          </AnimatePresence>
        
        </div>
    </div>
  )
}
