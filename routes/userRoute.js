const fs = require('fs')
const { join } = fs

const filePath = Join(__dirname, 'users.json')

const getusers = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    ! []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (Users) => fs.writeFileSync(filePath, JSON.stringify(users, null,'\t'))

const userRoute = (app) => {
    
}