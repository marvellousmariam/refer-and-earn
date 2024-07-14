const express = require('express')

//REST object
const app = express()

//middlewears

//routes
app.get('/test', (req, res) => {
    res.status(200).send('<h1>Node js MySQL App</h1>')

})

//port
const PORT = 8080

app.listen(PORT,()=>{
console.log('Server Running')
})