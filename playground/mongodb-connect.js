//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err){
     return  console.log('unable to connect to mongodb server');
   } 
  console.log('connected to mongodb server');  
    
//  db.collection('ToDos').insertOne({
//   text: 'something new to do with 2.5.19',
//   completed: false
//  }, (err, result) => {
//    if(err){
//     return  console.log('unable to insert todo: ' );
//   }
//      
//      console.log(JSON.stringify(result.ops, undefined, 2));
//  });
    
  db.collection('Users').insertOne({
   firstName: 'Furgie',
   lastNme: 'Valone',
   age: 7,
   city: 'Louisburg',
   state: 'NC',
   zip: '27549'       
  }, (err, result) => {
    if(err){
     return  console.log('unable to insert address: ' , err );
   }
      var idTimestamp = result.ops[0]._id.getTimestamp();
      console.log(JSON.stringify(result.ops, undefined, 2) , ' - timestamp: ' , idTimestamp);
  });
db.close();    
});