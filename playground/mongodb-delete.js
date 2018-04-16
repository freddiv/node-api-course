//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err){
     return  console.log('unable to connect to mongodb server');
   } 
  console.log('connected to mongodb server');  
    
// deleteMany
/*    db.collection('ToDos').deleteMany({text: 'something new to do with 2.5.19'}).then((result) => {
        console.log(result);
    });
    */
//deleteOne
db.collection('Users').deleteOne({firstName: 'Lilly'}).then((result) => {
        console.log(result);
});
    
    
//findOneAndDelete
  
/*db.collection('Users').findOneAndDelete({_id: new ObjectID("5ad391dfa160b2294875d9e5")}).then((result) => {
        console.log(result);
});*/
//db.close();    
});