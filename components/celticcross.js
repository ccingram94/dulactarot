import Head from 'next/head'
import Image from 'next/image'
import back from '../public/back.png'
import { cards } from '../cards.js'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { assignCard1, assignCard2, assignCard3, assignCard4, assignCard5, assignCard6, assignCard7, assignCard8, assignCard9, assignCard10 } from '../cardSlice'


export default function CelticCrossReading() {
  //initiate redux store stuff and all card states
  const dispatch = useDispatch()
  var card1 = useSelector((state) => state.counter.card1);
  var card2 = useSelector((state) => state.counter.card2);
  var card3 = useSelector((state) => state.counter.card3);
  var card4 = useSelector((state) => state.counter.card4);
  var card5 = useSelector((state) => state.counter.card5);
  var card6 = useSelector((state) => state.counter.card6);
  var card7 = useSelector((state) => state.counter.card7);
  var card8 = useSelector((state) => state.counter.card8);
  var card9 = useSelector((state) => state.counter.card9);
  var card10 = useSelector((state) => state.counter.card10);

  const [cardsDealt, setCardsDealt] = useState(false);
  const [ card1flip, setCard1Flip ] = useState(false);
  const [ card2flip, setCard2Flip ] = useState(false);
  const [ card3flip, setCard3Flip ] = useState(false);
  const [ card4flip, setCard4Flip ] = useState(false);
  const [ card5flip, setCard5Flip ] = useState(false);
  const [ card6flip, setCard6Flip ] = useState(false);
  const [ card7flip, setCard7Flip ] = useState(false);
  const [ card8flip, setCard8Flip ] = useState(false);
  const [ card9flip, setCard9Flip ] = useState(false);
  const [ card10flip, setCard10Flip ] = useState(false);

  //made results global variables, were previously local and unreachable
  var result1 
  var result2 
  var result3 
  var result4
  var result5
  var result6
  var result7
  var result8
  var result9
  var result10
  
  function dealCards() {
    setCardsDealt(true);
  }

  function resetCards() {
    setCardsDealt(false);
  }


  useEffect(() => {
    setCard1Flip(false);
    setCard2Flip(false);
    setCard3Flip(false);
    setCard4Flip(false);
    setCard5Flip(false);
    setCard6Flip(false);
    setCard7Flip(false);
    setCard8Flip(false);
    setCard9Flip(false);
    setCard10Flip(false);


    //generate cards
    result1 = Math.floor(Math.random() * 156)
    result2 = Math.floor(Math.random() * 156)
    result3 = Math.floor(Math.random() * 156)
    result4 = Math.floor(Math.random() * 156)
    result5 = Math.floor(Math.random() * 156)
    result6 = Math.floor(Math.random() * 156)
    result7 = Math.floor(Math.random() * 156)
    result8 = Math.floor(Math.random() * 156)
    result9 = Math.floor(Math.random() * 156)
    result10 = Math.floor(Math.random() * 156)
    var resultarray = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10]

    //data validation to prevent duplicate cards being pulled
    if (new Set(resultarray).size != resultarray.length) {
      result1 = Math.floor(Math.random() * 156)
      result2 = Math.floor(Math.random() * 156)
      result3 = Math.floor(Math.random() * 156)
      result4 = Math.floor(Math.random() * 156)
      result5 = Math.floor(Math.random() * 156)
      result6 = Math.floor(Math.random() * 156)
      result7 = Math.floor(Math.random() * 156)
      result8 = Math.floor(Math.random() * 156)
      result9 = Math.floor(Math.random() * 156)
      result10 = Math.floor(Math.random() * 156)
      resultarray = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10]
    }
    
    //update Redux store
    dispatch(assignCard1(result1));
    dispatch(assignCard2(result2));
    dispatch(assignCard3(result3));
    dispatch(assignCard4(result4));
    dispatch(assignCard5(result5));
    dispatch(assignCard6(result6));
    dispatch(assignCard7(result7));
    dispatch(assignCard8(result8));
    dispatch(assignCard9(result9));
    dispatch(assignCard10(result10));

    //i am a simpleton who needs the console to assure me have mercy
    console.log(card1, card2, card3, card4, card5, card6)
  }, [cardsDealt])
  
  


  return (
    <div className="bg-black">
      <div className="w-screen min-h-full bg-teal-900 flex flex-col flex-wrap justify-center items-center pt-10">
        
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
                  <div className="flex flex-row flex-wrap justify-center p-2">
                    <div className="p-2">
                      <button onClick={() => setCardsDealt(false)} className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">New Reading</button>
                    </div>
                    <div className="p-2">
                      <button className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">Save Reading</button>
                    </div>
                  </div>
                  <motion.div className="flex flex-row flex-wrap justify-center h-full max-w-7xl" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                        <div className="max-w-xs p-12" onClick={ () => setCard1Flip(true) } >
                          {!card1flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Present</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card1flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Present</h2>
                              <Image src={ cards[card1].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card1].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card1].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard2Flip(true) } >
                          {!card2flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Challenge</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card2flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Challenge</h2>
                              <Image src={ cards[card2].image } width="300" height="500" className="rounded-xl" />
                              <div>
                                <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card2].name}</p>
                                <p className="text-md p-2 text-yellow-100 text-center"> { cards[card2].description } </p>
                              </div>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard3Flip(true) } >
                          {!card3flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Past</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card3flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Past</h2>
                              <Image src={ cards[card3].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card3].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card3].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard4Flip(true) } >
                          {!card4flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Future</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card4flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Future</h2>
                              <Image src={ cards[card4].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card4].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card4].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard5Flip(true) } >
                          {!card5flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Conscious Influences</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card5flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Conscious Influences</h2>
                              <Image src={ cards[card5].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card5].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card5].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard6Flip(true) } >
                          {!card6flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Unconscious Influences</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card6flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Unconscious Influences</h2>
                              <Image src={ cards[card6].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card6].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card6].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard7Flip(true) } >
                          {!card7flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">External Influences</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card7flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">External Influences</h2>
                              <Image src={ cards[card7].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card7].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card7].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard8Flip(true) } >
                          {!card8flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Best Case</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card8flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Best Case</h2>
                              <Image src={ cards[card8].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card8].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card8].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard9Flip(true) } >
                          {!card9flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Worst Case</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card9flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Worst Case</h2>
                              <Image src={ cards[card9].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card9].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card9].description } </p>
                            </motion.div>
                          }
                        </div>
                        <div className="max-w-xs p-12" onClick={ () => setCard10Flip(true) } >
                          {!card10flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="font-bebas text-xl p-2 text-white text-center">Outcome</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card10flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl p-2 font-bebas text-white text-center">Outcome</h2>
                              <Image src={ cards[card10].image } width="300" height="500" className="rounded-xl" />
                              <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card10].name}</p>
                              <p className="text-md p-2 text-yellow-100 text-center"> { cards[card10].description } </p>
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
