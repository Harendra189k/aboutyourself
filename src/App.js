import logo from './logo.svg'
import './App.css'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { ReactDOM, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from 'react-router-dom'
import { Context } from './context/Context'

// This is comment
function App () {
  const { user } = useContext(Context)
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route
            path='/register'
            element={user ? <Home /> : <Register />}
          ></Route>
        </Routes>
        <Routes>
          <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        </Routes>
        <Routes>
          <Route path='/write' element={user ? <Write /> : <Write />}></Route>
        </Routes>
        <Routes>
          <Route
            path='/settings'
            element={user ? <Settings /> : <Register />}
          ></Route>
        </Routes>
        <Routes>
          <Route path='/post/:postId' element={<Single />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
