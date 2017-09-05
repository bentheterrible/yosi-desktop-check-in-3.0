var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render('index.ejs', {
    title: 'Login'
  })
})

app.listen('3000', () => {
  console.log('server is running...')
})
