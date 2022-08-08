import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderAuth from './headerauth'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import BookIcon from '@heroicons/react/outline/BookOpenIcon'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Footer() {
  const { date: session, status } = useSession()
  return (
    <div className="bg-banner bg-cover w-screen min-h-full border-t-2 border-yellow-200">
        <div className="flex flex-col flex-wrap w-screen text-center justify-center items-center bg-teal-900 bg-opacity-90">
          <div>
            <Link href="/">
                <h1 className="pt-12 text-white font-bebas text-xl lg:text-2xl xl:text-3xl">✨ D u l a c   T a r o t ✨</h1>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap justify-center justify-items-center max-w-lg p-4 m-2">
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">My Tarot</h4>
                <p>Profile</p>
                <p>Journal</p>
                <p>Subscription</p>
            </div>
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">Explore</h4>
                <p>Readings</p>
                <p>Meanings</p>
                <p>Blog</p>
            </div>
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">Site</h4>
                <p>About Us</p>
                
                <Link href="/privacypolicy">
                  <button>
                    <p>Privacy Policy</p>
                  </button>
                </Link>
                <p>Terms of Use</p>
            </div>
          </div>
        </div>
    </div>
  )
}
