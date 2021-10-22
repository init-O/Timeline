const express = require('express');
const cors = require('cors');
const app = express();
const data  = require('./public/journeyContent')

app.set('view engine', 'ejs');
app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.render('about',{data:data})
})

app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`);});