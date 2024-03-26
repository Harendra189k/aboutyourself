import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar () {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='vk.webp' alt='' />
        <p>
          Virat Kohli is an Indian international cricketer and the former
          captain of the Indian national cricket team. He is a right-handed
          batsman and an occasional medium-fast bowler. He currently represents
          Royal Challengers Bangalore in the IPL and Delhi in domestic cricket.
          Kohli is widely regarded as one of the greatest batsmen in the history
          of cricket and the best of the 21st century. He holds the record as
          the highest run-scorer in T20I and IPL, ranks third in ODI, and stands
          as the fourth-highest in international cricket. He also holds the
          record for scoring the most centuries in One Day Internationals.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map(c => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-facebook'></i>
          <i className='sidebarIcon fa-brands fa-twitter'></i>
          <i className='sidebarIcon fa-brands fa-pinterest'></i>
          <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        </div>
      </div>
    </div>
  )
}
