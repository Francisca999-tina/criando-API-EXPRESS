const express = require('express')
const app = express ()
const port = 3000

app.get('/', (req, res) => rest.send('Óla mundo pelo Express!'))

app.listen(port,() => console.log('Api rodando na porta 3000'))