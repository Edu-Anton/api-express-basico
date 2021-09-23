const express = require('express')
const morgan = require('morgan')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
  res.send('Página de inicio')
})

app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
})