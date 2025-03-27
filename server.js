const express = require('express');
const app = express();
const db = require ('./db');
const bodyParser = require('body-parser'); //req.body
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('welcome to my hotel World')
})

//importing the PersonRoutes 
const PersonRoutes = require('./routes/PersonRoutes');
const MenuItemsRoutes = require ('./routes/MenuItemsRoutes');
//using the PersonRoutes
app.use('/person',PersonRoutes);
app.use('/menu',MenuItemsRoutes)
 
app.listen(3000,()=>{
  console.log('listening to port 3000');
}) 