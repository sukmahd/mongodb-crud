'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017/library'

MongoClient.connect(url, function(err, db){
  if(err){
    console.log(err);
  }else {
    console.log('connect to db');
  }
})


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

// const api = require('./routers/api');
const library = require('./routers/library')


app.get('/', function(req,res){
  res.send('hai')
})

app.use('/library', library)




// app.use('/api', api);




app.listen(3000)
