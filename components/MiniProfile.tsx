import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

import Avatar from '$components/Avatar'

export default function MiniProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between pt-4">
      <div className="relative aspect-square w-14 rounded-full border p-[2px]">
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt="profile picture"
            layout="fill"
            className="rounded-full"
          />
        ) : (
          <Avatar />
        )}
      </div>

      <div className="flex-1 px-4">
        <h2 className="font-bold">
          <a href="#" className="focusable">
            {session?.user?.username}
          </a>
        </h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        onClick={() => signOut()}
        className="focusable text-sm font-semibold text-blue-500"
      >
        Sign Out
      </button>
    </div>
  )
}
