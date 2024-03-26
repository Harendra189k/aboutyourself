import React, { useContext, useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Login () {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })

    try {
      const res = await axios.post('http://192.168.1.40:5000/api/auth/login', {
        email: email,
        password: password
      })
      console.log('res', res)
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' })
    }
  }

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form action='' className='loginForm' onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input
            type='text'
            className='loginInput'
            placeholder='Enter Your Username'
            // ref={userRef}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            className='loginInput'
            placeholder='Enter Your Password'
            // ref={passwordRef}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className='loginButton' type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
      <button className='loginRegisterButton'>
        {' '}
        <Link className='link' to='/register'>
          Register
        </Link>
      </button>
    </div>
  )
}
