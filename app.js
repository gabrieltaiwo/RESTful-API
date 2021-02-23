const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});


//process.env.DB_CONNECTION
///'mongodb://gtaiwo:qwerty1234@cluster0.xtuoa.mongodb.net/gtaiwo?retryWrites=true&w=majority'
const url = process.env.DB_CONNECTION;
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
 //CONNECT TO DB
//  mongoose.connect( process.env.DB_CONNECTION, connectionParams, () => console.log('connected to DB!')
// );
mongoose.connect(url,connectionParams)
.then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})


//How we start listening to the server'
app.listen(3000);