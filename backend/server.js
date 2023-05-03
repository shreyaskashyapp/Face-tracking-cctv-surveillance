const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');

require('dotenv').config();

const app =express();
const port= process.env.PORT || 8080

app.use(cors());
app.use(bodyparser.json());
app.use(express.json({limit: '50mb'}));

const uri = process.env.ATLAS_URI;
console.log(uri)
// mongoose.connect(uri,{ useNewUrlParser: true });
mongoose.connect(uri
  );

const connection= mongoose.connection;

connection.once('open',()=>{
  console.log("MongoDB connection is established")
})

const imageRouter=require('./routes/images');
const refsRouter= require('./routes/ref')

app.use('/finds',imageRouter);
app.use('/references',refsRouter);

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})

