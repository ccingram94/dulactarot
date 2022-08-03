import Head from 'next/head'
import Image from 'next/image'
import back from '../public/back.png'
import { cards } from '../cards.js'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { assignCard1, assignCard2, assignCard3 } from '../cardSlice'

export default function ThreeCard() {
  var card1 = useSelector((state) => state.counter.card1);
  var card2 = useSelector((state) => state.counter.card2);
  var card3 = useSelector((state) => state.counter.card3);
  const dispatch = useDispatch()
  const [cardsDealt, setCardsDealt] = useState(false);

  const [ card1flip, setCard1Flip ] = useState(false);
  const [ card2flip, setCard2Flip ] = useState(false);
  const [ card3flip, setCard3Flip ] = useState(false);

  const [ meaning1, setMeaning1 ] = useState(false);
  const [ meaning2, setMeaning2 ] = useState(false);
  const [ meaning3, setMeaning3 ] = useState(false);
  
  function dealCards() {
    setCardsDealt(true);
    assignCards();
  }

  function assignCards () {
    var result1 = Math.floor(Math.random() * 156)
    var result2 = Math.floor(Math.random() * 156)
    var result3 = Math.floor(Math.random() * 156)
    dispatch(assignCard1(result1));
    dispatch(assignCard2(result2));
    dispatch(assignCard3(result3));
  }

  return (
    <div className="bg-black">
      <div className="w-screen min-h-screen bg-teal-900 flex flex-col flex-wrap justify-center items-center pt-10">
        
          <AnimatePresence>
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5}}>
              <div>
                {!cardsDealt && 
                <motion.div transition={{ delay: 0.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} className="rounded-xl max-w-xs p-12">
                  <div onClick={() => dealCards()} className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                    <Image src={back} className="rounded-xl bg-yellow-300" width="300" height="500"/>
                  </div>
                  <div>
                    {!cardsDealt &&
                      <p className="font-montserrat text-amber-300 md:text-xl opacity-40 p-6">Reveal your fate.  Click the deck to deal your cards.</p>
                    }

                  </div>
                </motion.div>
                }
              </div>
              <div>
                {cardsDealt && 
                <div>
                  <motion.div className="flex flex-row flex-wrap justify-center min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                        <div className="max-w-xs p-12" onClick={ () => setCard1Flip(true) } >
                          {!card1flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2">Past</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card1flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas">Past</h2>
                              <Image src={ cards[card1].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-yellow-500">{ cards[card1].name}</p>
                              <p className="text-md p-2 text-yellow-600"> { cards[card1].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard2Flip(true) } >
                          {!card2flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas">Present</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card2flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas">Present</h2>
                              <Image src={ cards[card2].image } width="300" height="500" className="rounded-xl" />
                              <div>
                                <p className="text-xl p-2 text-yellow-500">{ cards[card2].name}</p>
                                <p className="text-md p-2 text-yellow-600"> { cards[card2].description } </p>
                              </div>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard3Flip(true) } >
                          {!card3flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas">Future</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card3flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas">Future</h2>
                              <Image src={ cards[card3].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-yellow-500">{ cards[card3].name}</p>
                              <p className="text-md p-2 text-yellow-600"> { cards[card3].description } </p>
                            </motion.div>
                          }
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
