/// mongoDb version 2.5

const MongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err){
     return  console.log('unable to connect to mongodb server');
   } 
  console.log('connected to mongodb server');  

  db.collection('ToDos').insertOne({
   text: 'something to do',
      completed; false
  }, (err, result)=> {
    if(err){
     return  console.log('unable to insert todo: ' , err);
   } 
      console.log(JSON.stringify(result.ops, undefined, 2));
  });
    
db.close();    
});
