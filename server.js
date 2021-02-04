const app = require('express')()

const userroute = require('./route/userroute')
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/api/user', userroute)

app.get("/", (req, res) => {
    res.end("hello world")
})
app.listen(5000, () => {
    console.log("server listen on port 5000")
})