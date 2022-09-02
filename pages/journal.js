import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AllCardMeanings from '../components/allcardmeanings'
import JournalEntry from '../components/journalentry'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import prisma from '../lib/prisma'
import { format, parseJSON } from 'date-fns'
import { cards } from '../cards.js'
import { useSession, signIn } from 'next-auth/react'

export const getServerSideProps = async() => {
  const session = await getSession();
  const feed = await prisma.reading.findMany({
    where: {
      author: {
        email: session?.user?.email,
      },
    },
    orderBy: {
      id: 'desc',
    },
  });
  return {
    props: {
      readings: JSON.parse(JSON.stringify(feed))
    },
  };
};


export default function Journal(props) {
  const { data: session, status } = useSession();
  const [ deleteItem, setDeleteItem ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (props != null) {
      setLoading(false);
    }
  })

    return (
      <div>
        <Head>
          <title>Dulac Tarot</title>
          <meta name="description" content="free tarot reading with AI artwork" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-floral bg-cover min-h-screen text-black font-montserrat w-screen">
          <div className="bg-yellow-200 min-h-screen bg-opacity-80">
            <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Tarot Journal</h2>
            <p className="text-xl text-center pb-6">your story, written in the stars</p>
            <div className="p-2">
              
            {status === 'authenticated' &&
              <div className="flex flex-row flex-wrap justify-center text-center">
                  <div>
                    {props.readings.map((reading) => (
                      <div className="p-4 m-2 flex flex-row flex-wrap bg-white bg-opacity-90 rounded-xl h-fit" key={reading.id}>
                        <JournalEntry props={reading} />
                      </div>
                    ))}
                  </div>
              </div>
              }
              {status === 'unauthenticated' &&
                <div className="flex flex-col flex-wrap justify-center text-center items-center">
                  <p className="p-2 lg:p-4">sign in to save readings to your journal:</p>
                  <button onClick={() => signIn()} className="bg-black text-white p-2 lg:p-4 w-fit rounded-xl hover:shadow-2xl transition-all">Sign In</button>
                </div>
              }
            </div>
          </div>
        </main>
      </div>
    )
  
}
