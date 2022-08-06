import Head from 'next/head'
import Image from 'next/image'
import ThreeCard from './threecard'
import FreeReadings from './freereadingsection'

export default function Hero () {
  return (
    <div className='flex flex-col justify-center'>
      <div className='bg-floral bg-center flex flex-col justify-center'>
        <h2 className="bg-yellow-200 bg-opacity-60 text-4xl lg:text-6xl font-bebas text-center p-2 pt-12">Free Tarot Card Readings</h2>
        <p className="bg-yellow-200 bg-opacity-60 text-xl text-center p-4 ">the ancient art revealed</p>
      </div>
      <FreeReadings />
    </div>
  )
}
