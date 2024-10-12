import express from 'express'
import React from 'react'
import  { renderToString } from 'react-dom/server'
import App from '../src/pages/app'
const app = express()
const port = 4000
const prefix = '/api/'

// app.use(express.static('lib'));

const content = renderToString(<App />)

console.log(content)

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>hello888</title>
            </head>
            <body>
                <div id="root">
                    ${ content }
                </div>
            </body>
        </html>
    `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
