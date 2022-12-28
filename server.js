const path = require("path")
const express = require("express")
const dotenv = require('dotenv').config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use("/openai", require("./routes/openaiRoute"))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})