const express = require('express')
const { json } = require('express')
const routes = require('./routes/todoRoutes')

const app = express()
const PORT = process.env.port || 3005
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(routes)

// PLEASE read my README FILE, THANK YOU


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
}
)