import express from 'express'
import sequelize from './db/sequelize.js'

const app = express()
app.use(express.json())

const initializeDatabase = async () => {
    try{
        await sequelize.authenticate()
        console.log("The database is successfully connected");
    }
    catch(error){
        console.log("Couldnt initialize the database!", error);
        process.exit(1)
    }
}
initializeDatabase()

app.listen(3000, () => {
    console.log("The server is up and reunning on port 3000")
})