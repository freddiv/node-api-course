//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err){
     return  console.log('unable to connect to mongodb server');
   } 
  console.log('connected to mongodb server');  
    
/*  db.collection('ToDos').find().toArray().then((docs) => {
      console.log('todos');
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to get todos: ', err );  
  });
    */
    
db.collection('Users').find({
    firstName: 'Furgie'
}).toArray().then((docs) => {
      console.log('Users found: ', docs.length);
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to get Users: ', err );  
  }); 
    
    
db.collection('Users').find().count().then((count) => {
      console.log(`Users count:  ${count}`);
  }, (err) => {
    console.log('unable to get users count: ', err );  
  });    
    
//db.close();    
});