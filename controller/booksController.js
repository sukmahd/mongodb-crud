'use strict'
const MongoClient = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://localhost:27017/library'

function findAllBook(req,res){
  MongoClient.connect(url, function(err, db){
    const col = db.collection('Book');
    col.find({}).toArray(function(err, docs){
      if(err){
        res.send(err)
        db.close();
      }else {
        res.send(docs)
        db.close();
      }
    })
  })
}

function insertBook(req,res){
  MongoClient.connect(url, function(err, db){
    const col = db.collection('Book')
    col.insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)
    })
    .then(function(row){
      res.send(row);
      db.close();
    })
  })
}

function deleteBook(req,res){
  MongoClient.connect(url, function(err, db){
    const col = db.collection('Book')
    col.deleteOne({_id: ObjectId(`${req.params.id}`)})
    .then(function(row){
      res.send(row)
    })
    .catch(function(err){
      res.send(err)
    })
  })
}

function updateBook(req,res){
  MongoClient.connect(url, function(err, db){
    const col = db.collection('Book')
    col.updateOne({_id: ObjectId(`${req.params.id}`)},
    {
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: parseInt(req.body.stock)
      }
    })
    .then(function(row){
      res.send(row)
    })
  })
}

module.exports = {
  findAllBook,
  insertBook,
  deleteBook,
  updateBook
};
