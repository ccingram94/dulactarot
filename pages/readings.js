import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import back from '../public/back.png'
import onecard from '../public/1card.png'
import threecard from '../public/3card.png'
import celticcross from '../public/celticcross.png'
import Header from '../components/header'
import AllCardMeanings from '../components/allcardmeanings'
import FreeReadingSection from '../components/freereadingsection'
import Footer from '../components/footer'

export default function Meanings() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="description" content="free tarot reading with AI artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-black font-montserrat">
        <div className="bg-floral bg-center bg-cover">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Tarot Card Readings</h2>
          <p className="lg:text-lg text-center p-6 bg-yellow-200 bg-yellow-200 bg-opacity-60">free online tarot readings with detailed meanings</p>
          <div className=" flex flex-col justify-center items-center bg-black text-white text-center p-2 lg:p-4 pt-5 lg:pt-10">
            <FreeReadingSection />
            <div className="p-2 lg:p-4">
              <div className="flex flex-row flex-wrap p-2 m-2">
                <div className="max-w-sm">
                  <h2>Yes/No</h2>
                  <p className="p-2 text-sm">A "Yes No" tarot reading spread is a simple tarot spread that can be used to answer any yes or no question. This spread is perfect for beginners, or for anyone who wants a quick and easy answer to a question.  This spread is quick, easy, and to the point. It is perfect for those who want a straight answer without any ambiguity.</p>
                </div>
                <div className="max-w-sm">
                  <h2>Past, Present, Future</h2>
                  <p className="p-2 text-sm">The "Past, Present, and Future"  is a popular spread used to gain insight into your past, present, and future and to understand your relationships with others.</p>
                  <p className="p-2 text-sm">This spread is traditionally read from left to right. The first card, in the past position, represents your past. This card can represent your childhood, your family, your upbringing, or any other aspects of your past that have shaped you into the person you are today. The second card, in the present position, represents your current situation. This card can represent your job, your relationships, your health, or any other aspects of your life that are important to you at the moment. The third card, in the future position, represents your future. This card can represent your goals, your dreams, your plans, or any other aspects of your future that you are hoping for.</p>
                </div>
                <div className="max-w-sm">
                  <h2>Celtic Cross</h2>
                  <p className="p-2 text-sm">The Celtic Cross is one of the most popular and versatile tarot spreads. The Celtic Cross can be used for any question, but is especially useful for questions about relationships, career, and life path. </p>
                  <p className="p-2 text-sm">The Celtic Cross spread is so named because the cross shape of the spread resembles the Celtic cross. The Celtic cross is a symbol that has been used for centuries by the Celtic people. It is a symbol of strength and protection. The Celtic cross is also a symbol of the sun, and is often used to represent the four elements of earth, air, fire, and water. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
