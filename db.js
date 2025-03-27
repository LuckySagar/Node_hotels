const mongoose = require ('mongoose');

//Define the mongodb connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels' //you can replace hotels with your database name

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