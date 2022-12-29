


import mongoose from "mongoose";



mongoose.set(`strictQuery`,true);
mongoose.connect("mongodb+srv://sahinahmet:147Abc963@carparkcluster.k8dh4x2.mongodb.net/CarParkDB?retryWrites=true&w=majority",{
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        
    }
)
.then(()=>console.log(`MongoDB ye baglanildi`))
.catch((err)=>console.log(err.message));








// const MongoClient=require('mongodb').MongoClient;
// const url=`mongodb+srv://OnurAta:12345ata@atlascluster.qaijxuv.mongodb.net/test`;

// MongoClient.connect(url,(err,client)=>{
//     if(err) throw err;


//     console.log("MongoDB bağlanıtısı gerçekleştiiiiiii");
//     client.close();
// })



/*
mongoose.connect("mongodb+srv://OnurAta:12345ata@atlascluster.qaijxuv.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

.then(()=>console.log("MongoDb: Bağlandı"))
.catch((err)=>console.log(err.message));

*/



// module.exports=app;





// const Db = process.env.MONGO_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         //_db = db.db("employees");
//         console.log("Successfully connected to MongoDB. Başariyla servere bağlandin...."); 
//       }
//       return callback(err);
//          });
//   },
//   getDb: function () {
//     return _db;
//   },
// };



// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://sahinahmet:147Abc963@carparkcluster.k8dh4x2.mongodb.net/CarParkDB?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 





// bu değiştirilebilir.
// module.exports={
//     db: 'mongodb://localhost:27017/react-fileupload-db'
// }