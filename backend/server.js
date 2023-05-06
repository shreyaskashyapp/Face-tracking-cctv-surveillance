const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');

require('dotenv').config();

const app =express();
const port= process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json({limit: '100mb'}));

const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri, { useNewUrlParser: true });

const connection= mongoose.connection;

connection.once('open',()=>{
  console.log("MongoDB connection is established");
});

const imageRouter = require('./routes/images');
const refsRouter = require('./routes/ref');
const platesRouter = require('./routes/plates');
const platesDataRouter = require('./routes/platesData');
const crimeRouter = require('./routes/crimes');

app.use('/finds', imageRouter);
app.use('/references', refsRouter);
app.use('/plates-info', platesRouter);
app.use('/plates-data', platesDataRouter);
app.use('/crimes',crimeRouter);


app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});