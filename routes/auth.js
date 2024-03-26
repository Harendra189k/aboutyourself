// const { Route, Router } = require('react-router-dom')

const router = require('express').Router()
const User = require('../models/User')
const UserNew = require('../models/UserNew')

const bcrypt = require('bcrypt')

// REGISTER
router.post('/register', async (req, res) => {
  try {
    // console.log('req-body  == ', req.body)

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPass
    }

    const user = await UserNew.create(newUser)
    // console.log('user == ', user)
    res.status(200).json(user)
  } catch (err) {
    // console.log('error ==', err)
    res.status(500).json(err)
  }
})

//Login
router.post('/login', async (req, res) => {
  try {
    const email = req.body.email
    const user = await UserNew.findOne({ email })

    if (!user) {
      return res.status(400).json('Wrong credentials!')
    }

    const validated = await bcrypt.compare(req.body.password, user.password)
    if (!validated) {
      return res.status(400).json('Wrong credentials!')
    }

    const { password, ...others } = user._doc

    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
