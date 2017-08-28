import express from 'express'
import dotenv from 'dotenv-safe'

dotenv.load()

const app = express()

app.set('view engine', 'pug')

app.use(express.static('dist'))
app.get('/*.*', (req, res) => res.sendStatus(404))
app.get('/*', (req, res) => res.render('index'))

app.listen(process.env.ID_PORT, () => {
    console.log(`listening on *:${process.env.ID_PORT}`)
})
