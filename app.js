const express = require('express')
const app = express()

app.use(express.json())

const userRouter = require('./routers/userRouter')
app.use(userRouter)


require('./db/mongoose')



app.listen(3000, () => {
    console.log("Server is listening!")
})

