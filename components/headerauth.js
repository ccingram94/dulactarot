import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function HeaderAuth() {
    const { date: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <div className="flex flex-row lg:w-1/3 justify-center p-4">
                <Link href="/profile">
                    <UserIcon className="w-12 text-yellow-400 opacity-60" />
                </Link>
            </div>
        )
    } 

    return (
        <div className="flex flex-row lg:w-1/3 justify-center p-4">
            <UserIcon className="w-12 text-yellow-400 opacity-60" onClick={() => signIn()}/>
        </div>
    )
  }
