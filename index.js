const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: false}))
app.set('json spaces', 2);

userRoute(app)
postRoute(app)

app.get('/', (req, res) => res.send('Óla mundo pelo Express!'))

app.listen(port,() => console.log('Api rodando na porta 3000'))
