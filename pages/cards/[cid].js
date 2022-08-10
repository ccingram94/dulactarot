import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { cards } from '../../cards'
import ArrowLeft from '@heroicons/react/outline/ArrowLeftIcon'
import ArrowRight from '@heroicons/react/outline/ArrowRightIcon'

export default function CID() {
  const [isPrevious, setPrevious] = useState(false);
  const [isNext, setNext] = useState(false);

    const router = useRouter()
    const { cid } = router.query 
    const id = cid

    const reverseid = parseInt(id) + 78
    const previousid = parseInt(id) - 1
    const nextid = parseInt(id) + 1

    useEffect(() => {
      if (previousid < 0) {
        setPrevious(false);
      } else {
        setPrevious(true);
      }
      if (nextid > 77) {
        setNext(false);
      } else {
        setNext(true);
      }
    }, [id])

    const previouslink = "/cards/" + (parseInt(id) - 1).toString()    
    const nextlink = "/cards/" + (parseInt(id) + 1).toString()

    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-teal-900 text-white font-montserrat">
          <div>
            <div className="flex flex-row flex-wrap justify-center p-6 lg:p-12">
              <div className="p-6 flex flex-col justify-center">
                {!id && <p>loading...</p>}
                {id && 
                  <Image src={ cards[id].image } height="500" width="300" className="rounded-xl"/>
                }
              </div>
              <div className="p-6">
                {!id && <p>loading...</p>}
                {id &&
                <div>
                  <div className="">
                    <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2">{ cards[id].name }</h2>
                    <p className="text-xl text-center max-w-xs">{ cards[id].description }</p>
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-4xl font-bebas text-center p-2 pt-12">Reversed</h2>
                    <p className="text-xl text-center max-w-xs">{ cards[reverseid].description }</p>
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bebas text-center p-2 pt-12">YES/NO</h2>
                    <div>
                      <p className="text-xl text-center max-w-xs">Upright: { cards[id].yesno }</p>
                      <p className="text-xl text-center max-w-xs">Reversed: { cards[reverseid].yesno }</p>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
          <div className="bg-black">
            <div className="p-6 flex justify-center">
                  {!id && <p>loading...</p>}
                  {id && 
                    <div className="flex flex-col align-center justify-center">
                      <h2 className="text-4xl text-yellow-200 lg:text-6xl font-bebas text-center p-2 pt-12">The Meaning of { cards[id].name}</h2>
                      <div className="flex max-w-3xl text-yellow-200 text-center justify-center p-6 pt-12 rounded-xl bg-opacity-30">
                        <div className="flex justify-center">
                          <p className="text-xl text-yellow-200">
                            { cards[id].longdescription }
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
            </div>
            <div className="bg-teal-700 p-2 flex flex-row flex-wrap text-center justify-center">
              {isPrevious &&
                <div className="flex flex-col opacity-50 hover:opacity-70 p-4">
                  <Link href={previouslink}>
                    <div className="flex flex-col justify-center">
                      <ArrowLeft className="h-12"/>
                      <h3>previous card</h3>
                    </div>
                  </Link>
                </div>
              }
              {isNext &&
                <div className="flex flex-col opacity-50 hover:opacity-70 p-4">
                  <Link href={nextlink}>
                    <div className="flex flex-col justify-center">
                      <ArrowRight className="h-12"/>
                      <h3>next card</h3>
                    </div>
                  </Link>
                </div>
              }
            </div>
        </main>
      </div>
  )
}
