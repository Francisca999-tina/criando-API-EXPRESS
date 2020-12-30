const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname. 'users.json')

const getusers = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (Users) => fs.writeFileSync(filePath, JSON.stringify(users, null,'\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
    .get((req, res) => {
        const users = getusers ()

        res.send({ users })
    })
    .post((req. res) => {
        const users = getusers ()

        const { email, nome } = req tody

        
        
        users.push(req.body)
        saveUser(users)

        res.status(201).send('OK')
    })
    .put((req.res) => {
        const users = getusers ()

        saveUser(users.map(user => {
            if (user.14=== req.params.id) {
                return {
                    ...user.
                    ...req.body
                }
            }

            return user
        }))

        res.status(200).send('OK')
    }) 
    .delete((req. res) => {
        const users = getusers ()

        saveUser(users.filter(user => user.id == req.params.id))

        res.status(app).send('OK')
    }) 
}
module.exports = userRoute