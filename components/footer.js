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
                <h1 className="pt-12 text-white font-bebas text-xl lg:text-2xl xl:text-3xl">⚜ D u l a c   T a r o t ⚜ </h1>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap justify-center justify-items-center max-w-lg p-4 m-2">
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">My Tarot</h4>
                <Link href="/profile">
                  <p>Profile</p>
                </Link>
                <Link href="/journal">
                  <p>Journal</p>
                </Link>
            </div>
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">Explore</h4>
                <Link href="/readings">
                  <p>Readings</p>
                </Link>
                <Link href="/meanings">
                  <p>Meanings</p>
                </Link>
                <Link href="/dailyhoroscope">
                  <p>Horoscopes</p>
                </Link>
            </div>
            <div className="text-white text-center p-2 lg:p-4">
                <h4 className="p-4 font-bebas text-xl lg:text-2xl">Site</h4>
                <div className="flex flex-col flex-wrap">
                  <Link href="/aboutus">
                    <button>
                      <p>About Us</p>
                    </button>
                  </Link>
                  <Link href="/privacypolicy">
                    <button>
                      <p>Privacy Policy</p>
                    </button>
                  </Link>
                  <Link href="/termsofuse">
                    <button>
                      <p>Terms of Use</p>
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
