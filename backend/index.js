const express = require('express')
const app = express()
const postRouter = require('./routes/post-router')

postRouter(app)

app.listen(5320)
