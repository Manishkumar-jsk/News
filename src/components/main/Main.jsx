import React from 'react'
import { Posts } from '../../dummyData'
import Post from "../Post/Post"
import "./main.css"

export default function Main() {
  return (
    <div className='main'>
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}
