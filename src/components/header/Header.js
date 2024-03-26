import React from 'react'
import './header.css'

export default function Header () {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Cricket-Blog</span>
      </div>
      <img className='headerImg' src='01.avif' alt='' />
    </div>
  )
}
