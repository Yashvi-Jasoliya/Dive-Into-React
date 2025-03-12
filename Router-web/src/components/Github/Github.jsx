import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Yashvi-Jasoliya")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center bg-gray-600 text-white p-4 m-3 text-2xl'>
      Github Followers: {data.followers}
      </div>
  )
}

export default Github


export const githubInfoLoader = async() => {
    const response = await fetch(
		"https://api.github.com/users/Yashvi-Jasoliya")
        return response.json();
}
