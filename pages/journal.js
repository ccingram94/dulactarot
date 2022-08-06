import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import JournalEntry from '../components/journalentry'
import { getSession } from 'next-auth/react'
import { useState } from 'react'
import prisma from '../lib/prisma'
import { format, parseJSON } from 'date-fns'
import { cards } from '../cards.js'

export const getStaticProps = async() => {
  const session = await getSession();
  const feed = await prisma.reading.findMany({
    where: {
      author: {
        email: session?.user?.email,
      },
    },
  });
  return {
    props: {
      readings: JSON.parse(JSON.stringify(feed))
    },
  };
};


export default function Journal(props) {
  const [ deleteItem, setDeleteItem ] = useState(null);
  
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-floral bg-cover min-h-screen text-black font-montserrat">
        <div className="bg-yellow-200 min-h-screen bg-opacity-80">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">My Tarot Journal</h2>
          <p className="text-xl text-center pb-6">your story, written in the stars</p>
          <div className="flex flex-row flex-wrap justify-center text-center">
            
            {props.readings.map((reading) => (
              
              <div className="p-4 m-2 flex flex-col bg-white bg-opacity-90 rounded-xl h-fit" key={reading.id}>
                <JournalEntry props={reading} />
              </div>

            ))}


          </div>
        </div>
      </main>
    </div>
  )
}
