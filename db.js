const mongoose = require ('mongoose');
require('dotenv').config();

//Define the mongodb connection URL
// const mongoURL = process.env.MONGODB_LOCAL_URL //you can replace hotels with your database name
const mongoURL = process.env.MONGODB_URL;
// Mongodb atlas ka url hai yeh  
//setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//get default connection
//Mongoose maintains a default connection object representing the Mpngodb connection.
const db = mongoose.connection;

//define event listner for database connection
db.on('connected', ()=>{
    console.log("connected to MongoDB server");
});

db.on('error',(err)=>{
    console.log('MongoDB connection error', err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the database connection 

module.exports = db;