import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderAuth from './headerauth'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { date: session, status } = useSession()
  return (
    <div>
        <div className="w-screen bg-teal-900">
            <p className="p-2 font-montserrat text-blue-200 text-center"> ✨ tarot readings with AI artwork inspired by fairytale illustrator Edmund Dulac ✨ </p>
        </div>
        <div className="flex flex-row flex-wrap w-screen text-center justify-center bg-banner bg-cover bg-bottom">
          <div className="flex flex-col lg:flex-row text-center justify-between items-center w-screen bg-teal-900 bg-opacity-90 pt-6">
            <div className="flex flex-row lg:w-1/3 font-bebas text-yellow-500 opacity-60 text-center justify-center">
              <Link href="/meanings">
                <p className="text-2xl p-2">Meanings</p>
              </Link>
                <p className="text-2xl p-2">Readings</p>
              <Link href="/journal">
                <p className="text-2xl p-2">Journal</p>
              </Link>
            </div>
            <div className="flex lg:w-1/3 justify-center p-4">
              <Link href="/">
                <h1 className="text-white font-bebas text-2xl lg:text-4xl xl:text-5xl">✨ D u l a c   T a r o t ✨</h1>
              </Link>
            </div>
            <HeaderAuth />
          </div>
        </div>
    </div>
  )
}
