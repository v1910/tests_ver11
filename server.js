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

// Connection URL
const url = 'mongodb://localhost:27017';
let db;

// Database Name
const dbName = 'TESTS';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err){
  if(err) {
    console.log(err);
    return;
  } else {
    console.log("Connected successfully to server");
    db = client.db(dbName);
  }
});

app.get('/home',(req,res) => {
  res.send({'_id': 1,'name': '333','phrases': ['444']});
});

app.get('/getGreatings',(req,res) => {
  //Get the documents of the collection
  const collection = db.collection('Greatings');
  //Find some documents
  collection.find().toArray(function(err,phrases){
    if(err) {
      console.log(err);
      return;
    } else {
      res.json(phrases);
    }
  })
});


app.get('/getPhrasalVerbs',(req,res) => {
  //Get the documents of the collection
  const collection = db.collection('PhrasalVerbs');
  //Find some documents
  collection.find().toArray(function(err,phrases){
    if(err) {
      console.log(err);
      return;
    } else {
      res.json(phrases);
    }
  })
});


app.get('/getJokes',(req,res) => {
  //Get the documents of the collection
  const collection = db.collection('Jokes');
  //Find some documents
  collection.find().toArray(function(err,phrases){
    if(err) {
      console.log(err);
      return;
    } else {
      res.json(phrases);
    }
  })
});


app.get('/getPresentation',(req,res) => {
  //Get the documents of the collection
  const collection = db.collection('Presentation');
  //Find some documents
  collection.find().toArray(function(err,phrases){
    if(err) {
      console.log(err);
      return;
    } else {
      res.json(phrases);
    }
  })
});


app.get('/getSpring',(req,res) => {
  //Get the documents of the collection
  const collection = db.collection('Spring');
  //Find some documents
  collection.find().toArray(function(err,phrases){
    if(err) {
      console.log(err);
      return;
    } else {
      res.json(phrases);
    }
  })
});

/*
const dbColl = 'Greatings';
let cl;

const assert = require('assert');

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

  db = cl.db(dbName);
  collection = db.collection(dbColl);
  
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

  db = cl.db(dbName);
  collection = db.collection(dbColl);
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
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

