import Head from 'next/head'
import Image from 'next/image'
import ThreeCard from './threecard'

export default function Hero () {
  return (
    <div>
        {/* <div className="w-screen h-screen bg-black text-white text-center font-montserrat">
          <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Free Tarot Card Readings</h2>
          <div className="flex flex-row flex-wrap justify-center text-center">
            <div className="p-6 m-3 hover:border-2 rounded-xl transition-all">
              <h3 className="font-bebas text-2xl lg:text-4xl">Yes/No Reading</h3>
              <p className="p-2">a simple one card reading with a yes/no answer</p>
            </div>
            <div className="p-6 m-3 hover:border-2 rounded-xl transition-all">
              <h3 className="font-bebas text-2xl lg:text-4xl">Past/Present/Future Reading</h3>
              <p className="p-2">a three card reading revealing the past, present, and future</p>
            </div>
            <div className="p-6 m-3 hover:border-2 rounded-xl transition-all">
              <h3 className="font-bebas text-2xl lg:text-4xl">Celtic Cross Reading</h3>
              <p className="p-2">a classic ten card reaeding exploring all aspects of a situation</p>
            </div>
          </div>
        </div> */}
        <ThreeCard />
    </div>
  )
}
