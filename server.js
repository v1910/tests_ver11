const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const util = require('util');
var bodyParser = require('body-parser')

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('./build'))

//app.use(express.static(__dirname + '/src'));

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'e-shop';
const dbColl = 'productBasket';
let cl;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  cl = client;
});

let content;
let cont;

app.get('/start', (req, res) => {
  console.log('2222')

//  res.sendFile(__dirname + '/public/index.html');

  const db = cl.db(dbName);
  const collection = db.collection(dbColl);
  
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records on /");
    console.log('docs=',docs);
    doc = docs;
  });

//      content = util.format(data2,"test", "test", "test");
      content = data2;
//      console.log('1 content=',content);

//      console.log('2 content=',content);
      res.setHeader('content-type', 'text/html');
      res.send(content);

//    });


//  });
});  

app.get('/getAllProducts', (req, res) => {

  const db = cl.db(dbName);
  const collection = db.collection(dbColl);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("getAllProducts: Found the following records in /getAllTasks");
    console.log(docs);

    res.json(docs);
  });

});

app.post('/addProduct', (req, res) => {

  const body = req.body;
  console.log(typeof(body));
  const db = cl.db(dbName);
  const collection = db.collection(dbColl);
  // Find some documents
  collection.insertOne( body , function(err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(3, result.ops.length);
    console.log("Inserted 1 documents into the collection");

    res.json({ 'Result' : 'ok' });
  });
  //res.end();
});


app.post('/editProduct/:id', (req, res) => {  
  const body = req.body;
  console.log('editTask: body= ',body);
  const id = req.params.id;
  
  const db = cl.db(dbName);
  const collection = db.collection(dbColl);
  const objNew = 
  // Find some documents
  collection.update( { "id" : id } , {body}, {upsert: true});
  res.end();
});


app.get('/removeProduct/:id', (req, res) => {
  console.log('server: /removeProduct/:id  req.params=',req.params);
  
  const id = req.params.id;
  console.log('server: /removeProduct/:id  id=',id);
  
  const db = cl.db(dbName);
  const collection = db.collection(dbColl);
  // Find some documents
  collection.removeOne( { "id_pu" : Number(id) } , function(err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(3, result.ops.length);
    console.log("removed 1 documents from the collection");

    res.json({ 'Result' : 'ok' });
  });
  //res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

