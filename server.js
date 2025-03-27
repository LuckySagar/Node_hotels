const express = require('express');
const app = express();
const db = require ('./db');
require('dotenv').config();
const bodyParser = require('body-parser'); //req.body
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000; //process.env.PORT jo hai o jis machine ke port pe chalega usko dete hai or agr port number define nhi hoga to o PORT 3000 pe run karega locally

app.get('/', function (req, res) {
  res.send('welcome to my hotel World')
})

//importing the PersonRoutes 
const PersonRoutes = require('./routes/PersonRoutes');
const MenuItemsRoutes = require ('./routes/MenuItemsRoutes');
//using the PersonRoutes
app.use('/person',PersonRoutes);
app.use('/menu',MenuItemsRoutes)
 
app.listen(PORT,()=>{
  console.log('listening to port 3000');
}) 