const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

mongoose.connect('mongodb+srv://lucasmongo:lucasmongo@cluster0-qheb5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3333, () =>{
    console.log("PORTA 3333 :')");
});


// minutos 24