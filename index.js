import express from  'express'
import "dotenv/config"
import initApp from './Src/initApp.js'
const app = express()

initApp(app,express);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))