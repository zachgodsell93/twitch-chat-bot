import express from 'express'

const app = express.application = express()
const port: number = 4100

app.get('/', (_req:any , _res:any) => {
    _res.json({'status': 'ok'})
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})