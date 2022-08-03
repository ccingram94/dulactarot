import Head from 'next/head'
import Image from 'next/image'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function HeaderAuth() {
    const { date: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <div className="flex flex-row lg:w-1/3 justify-center p-4">
                <UserIcon className="w-12 text-yellow-400 opacity-60" onClick={() => signIn()} />
            </div>
        )
    } 

    return (
        <div className="flex flex-row lg:w-1/3 justify-center p-4">
        <button onClick={() => signIn()} className="hidden lg:block text-amber-900 bg-amber-300 opacity-50 rounded-xl font-bebas text-xl xl:text-2xl p-4 m-4">sign in</button>
      </div>
    )
  }
