const ConnectToMongo = require('./config/db');
const express = require('express')
var cors = require('cors')
ConnectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/students', require('./routes/student'));



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})