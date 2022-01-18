import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import styles from './user.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Home( {allPostsData} ) {
  const { data, error } = useSWR('https://randomuser.me/api/?results=1000', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>User List</h1>
        <div className={styles.userlist}>
         {data.results.map((post) => (
           <div className={styles.users}>
           <Image
           src={post.picture.large} // Route of the image file
           height={144} // Desired size with correct aspect ratio
           width={144} // Desired size with correct aspect ratio
           alt="Your Name"
           /><br/>
           <p>{post.name.first}<br/>{post.email}<br/>{post.cell}</p>
           </div>
         ))}
        </div>
    </div>
  )
}
