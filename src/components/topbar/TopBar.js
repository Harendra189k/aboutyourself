import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function TopBar () {
  const { user, dispatch } = useContext(Context)
  const PF = 'http://localhost:5000/images/'

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <img src='e.png' alt='' className='lgimg' />
        <i className='topIcon fa-brands fa-facebook'></i>
        <i className='topIcon fa-brands fa-twitter'></i>
        <i className='topIcon fa-brands fa-linkedin'></i>
        <i className='topIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link
              to='/write'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              WRITE
            </Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link to='/settings'>
            <img className='topImg' src={PF + user.profilePic} alt='' />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
