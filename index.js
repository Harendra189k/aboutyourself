const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
var http = require('http')
const bodyParser = require('body-parser')

dotenv.config()
// app.use(express.json())
let server = http.createServer(app)
app.use('/images', express.static(path.join(__dirname, '/images')))
app.use(bodyParser.urlencoded({ extended: false }))

// Parse JSON bodies (API payloads)
app.use(bodyParser.json())
const port = 5000

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

const corsOptions = {
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST'], // Allow only specified HTTP methods
  allowedHeaders: ['Content-Type'], // Allow only specified headers
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

app.get((req, res) => {
  res.json('hello')
})
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
