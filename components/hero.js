import Head from 'next/head'
import Image from 'next/image'
import ThreeCard from './threecard'

export default function Hero () {
  return (
    <div>
        <div className="w-screen h-screen bg-black text-white text-center font-montserrat">
          <ThreeCard />
        </div>
    </div>
  )
}
