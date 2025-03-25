const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000

app.get('/' , (req , res) => {
    res.send("<h1>Backend To override the CORS Issue</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on port no : ${PORT}`)
})