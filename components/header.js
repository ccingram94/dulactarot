import Head from 'next/head'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <div className="w-screen bg-teal-900">
            <p className="p-2 font-montserrat text-blue-200 text-center"> ✨ free tarot readings with AI artwork ✨ </p>
        </div>
        <div className="w-screen text-center bg-banner bg-cover bg-bottom">
          <div className="w-screen bg-teal-900 bg-opacity-90">
            <h1 className="p-6 pt-12 text-white font-bebas text-2xl md:text-4xl lg:text-6xl">✨ D u l a c   T a r o t ✨</h1>
          </div>
        </div>
    </div>
  )
}
