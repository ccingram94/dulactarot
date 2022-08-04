import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import { cards } from '../../cards'

export default function CID() {
    const router = useRouter()
    const { cid } = router.query 
    const id = cid
    const reverseid = parseInt(id) + 78
    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="bg-teal-900 text-white font-montserrat">
          <div className="flex flex-row flex-wrap justify-center p-6 lg:p-12">
              <div className="p-6">
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
                    <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">{ cards[id].name }</h2>
                    <p className="text-xl text-center max-w-xs">{ cards[id].description }</p>
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-4xl font-bebas text-center p-2 pt-12">Reversed</h2>
                    <p className="text-xl text-center max-w-xs">{ cards[reverseid].description }</p>
                  </div>
                </div>
                }
              </div>
          </div>
          <div className="bg-black">
          <div className="p-6 flex justify-center">
                {!id && <p>loading...</p>}
                {id && 
                  <div className="flex flex-col align-center justify-center">
                    <h2 className="text-4xl text-teal-600 lg:text-6xl font-bebas text-center p-2 pt-12">The Meaning of { cards[id].name}</h2>
                    <div className="flex max-w-3xl text-center justify-center p-6 pt-12 rounded-xl bg-opacity-30">
                      <div className="flex justify-center">
                        <p className="text-xl text-teal-800">
                          { cards[id].longdescription }
                        </p>
                      </div>
                    </div>
                  </div>
                }
              </div>
          </div>
        </main>
      </div>
  )
}
