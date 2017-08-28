import express from 'express'

const app = express()

app.all('/*', (req, res) => {
    res.status(404).send({
        title: 'there are no contents.',
        description: 'you made a mistake?'
    })
})

export default app
