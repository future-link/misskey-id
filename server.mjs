import Express from 'express'
import dotenv from 'dotenv-safe'

dotenv.load()

const express = Express()

express.listen(process.env.ID_PORT, () => {
    console.log(`listening on *:${process.env.ID_PORT}`)
})
