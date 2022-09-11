import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import UserIcon from '@heroicons/react/solid/UserCircleIcon'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function HeaderAuth() {
    const { data: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <div className="flex flex-row lg:w-1/3 justify-center">
                <Link href="/profile">
                    <UserIcon className="w-8 lg:w-12 text-yellow-400 opacity-60 p-2 m-2" />
                </Link>
            </div>
        )
    } 

    return (
        <div className="flex flex-row lg:w-1/3 justify-center">
            <UserIcon className="w-8 lg:w-12 text-yellow-400 opacity-60 p-2 m-2" onClick={() => signIn()}/>
        </div>
    )
  }
