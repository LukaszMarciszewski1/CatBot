const express = require('express')
const path = require('path')
const cors = require('cors')

const dialogflow = require('./diagflow/dialogflow')

const port = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(cors())

app.post('/', (req, res) => dialogflow.getMessages(req, res))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    console.log('ok')
  })
}

app.listen(port, () => console.log(`Server started on port ${port}`))
