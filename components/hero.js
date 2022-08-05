import Head from 'next/head'
import Image from 'next/image'
import ThreeCard from './threecard'
import FreeReadings from './freereadingsection'

export default function Hero () {
  return (
    <div className='bg-yellow-200 flex flex-col justify-center'>
        <h2 className="text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Free Tarot Card Readings</h2>
        <p className="text-xl text-center p-4 ">the ancient art revealed</p>
      <FreeReadings />
    </div>
  )
}
