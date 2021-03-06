import type { Post as PostType } from '$lib/types'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import Post from '$components/Post'
import EditPost from '$components/EditPost'
import { db } from '$lib/config/firebase'

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [parent] = useAutoAnimate<HTMLDivElement>()

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        snapshot => {
          setPosts(
            snapshot.docs.map(s => ({ id: s.id, ...s.data() } as PostType))
          )
        }
      ),
    []
  )

  return (
    <>
      <div ref={parent}>
        {posts.map(p => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      <EditPost />
    </>
  )
}
