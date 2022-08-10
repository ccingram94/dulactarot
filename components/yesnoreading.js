import Head from 'next/head'
import Image from 'next/image'
import back from '../public/back.png'
import { cards } from '../cards.js'
import { useSession, signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LockIcon from '@heroicons/react/outline/LockClosedIcon'
import { useSelector, useDispatch } from 'react-redux'
import { assignCard1, assignCard2, assignCard3 } from '../cardSlice'

export default function YesNoReading() {
  const { data: session, status } = useSession()
  
  //initiate redux store stuff and all card states
  const dispatch = useDispatch()
  var card1 = useSelector((state) => state.counter.card1);
  const [cardsDealt, setCardsDealt] = useState(false);
  const [ card1flip, setCard1Flip ] = useState(false);
  const [ saved, setSaved ] = useState(false);
  const [ question, setQuestion ] = useState('');
  const [ notes, setNotes ] = useState('');

  const submitReading = async() => {
    const readingresults = [card1, 'yesno', question, notes]
    try {
      const body = {readingresults};
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error)
    }
  }

  //made results global variables, were previously local and unreachable
  var result1 
  
  function dealCards() {
    setCardsDealt(true);
    setSaved(false);
  }

  function resetCards() {
    setCardsDealt(false);
    setSaved(false);
  }

  function saveReading() {
    submitReading();
    setSaved(true);
  }

  useEffect(() => {
    setCard1Flip(false);

    //generate cards
    result1 = Math.floor(Math.random() * 156)
    //update Redux store
    dispatch(assignCard1(result1));

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
                <div className="flex flex-col">
                  <div className="flex flex-row flex-wrap justify-center p-2">
                    <div className="p-2">
                      <button onClick={() => setCardsDealt(false)} className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">New Reading</button>
                    </div>
                    <div className="p-2">
                      {status === 'authenticated' &&
                        <div>
                          {!saved &&
                            <button onClick={() => saveReading()} className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">Save Reading</button>
                          }
                          {saved &&
                            <button onClick={() => saveReading()} className="p-2 rounded-xl text-lg md:text-xl  opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30 transition-all">Saved! ✨</button>
                          }
                        </div>
                      }
                      {status != 'authenticated' &&
                      <div onClick={() => signIn()} className="flex flex-col justify-center">
                        <div className="flex flex-row justify-center items-center rounded-xl opacity-40 hover:opacity-90 hover:text-teal-900 hover:bg-white hover:bg-opacity-30">
                          <button className="p-2 rounded-xl text-lg md:text-xl transition-all">Save Reading</button>
                          <LockIcon className="h-8 opacity-40" />
                        </div>
                      </div>
                      }
                      
                    </div>
                  </div>
                  <div className="flex flex-col p-2">
                  {status != 'authenticated' &&
                      <div onClick={() => signIn()} className="flex flex-col justify-center">
                        <p className="opacity-40 rounded-xl bg-white bg-opacity-20 p-2 text-center">log in to save reading notes </p>
                      </div>
                    }
                  {status === 'authenticated' &&
                    <div>
                      <input type="text" label="question" placeholder="enter a question to save" onChange={(e) => setQuestion(e.target.value)} className="p-2 rounded-xl m-2" />
                      <textarea type="text" label="notes" placeholder="enter reading notes to save" onChange={(e) => setNotes(e.target.value)} className="p-2 rounded-xl m-2"/>
                    </div>
                  }
                  </div>
                  <motion.div className="flex flex-row flex-wrap justify-center min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                        <div className="max-w-xs p-12" onClick={ () => setCard1Flip(true) } >
                          {!card1flip &&
                            <motion.div className="max-w-xs" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                              <h2 className="text-xl lg:text-3xl p-2 font-bebas text-white text-center">Yes/No</h2>
                              <div className="rounded-xl bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-300 transition-all ease-linear">
                                <Image src={back} className="rounded-xl" width="300" height="500"/>
                              </div>
                            </motion.div>
                          }
                          {card1flip &&
                            <motion.div className="max-w-xs " initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ staggerChildren: 0.5, duration: 1.0, delay: 0.3}}>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-xl lg:text-3xl p-2 font-bebas text-white text-center">Yes/No</h2>
                                    <Image src={ cards[card1].image } width="300" height="500" className="rounded-xl" />
                                    <p className="text-xl p-2 text-white font-bebas text-center text-xl lg:text-3xl">{ cards[card1].name}</p>
                                    <p className="text-md p-2 text-yellow-100 text-center"> { cards[card1].description } </p>
                                    <p className="text-md p-2 text-yellow-100 text-center">Verdict: { cards[card1].yesno } </p>
                                </div>
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
