
import '../db/db';

import  express from 'express';
import mongoose from "mongoose";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use((err, req, res, next) => {
  console.log(err);

  if (err) {
    if (err.output) {
      return res.status(err.output.statusCode || 500).json(err.output.payload);
    }

    return res.status(500).json(err);
  }
});

app.listen(4000, () => console.log('Server acildiiiiiiii!'));














// const PORT = 4000 //portumuz
// const MONGOURL = `mongodb+srv://sahinahmet:147Abc963@carparkcluster.k8dh4x2.mongodb.net/CarParkDB?retryWrites=true&w=majority`;
// mongoose.set(`strictQuery`,true);
// mongoose.connect(MONGOURL,{ //mongo bağlantıları
// useNewUrlParser:true,
// useUnifiedTopology:true
// })

// mongoose.connect(MONGOURL)// mongo bağlanırsa
// mongoose.connection.on("connected okey ",()=>{
// console.log("Connected to mongo");
// })

// mongoose.connection.on("error",(err)=>{//mongoya bağlanmazsa
// console.log("error",err)
// })

// app.listen(PORT,()=>{//port dinleme
// console.log("server running",PORT)
// });





/*
import express from "express";
import cors from 'cors';
const app=express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.log(err);
  
    if (err) {
      if (err.output) {
        return res.status(err.output.statusCode || 500).json(err.output.payload);
      }
  
      return res.status(500).json(err);
    }
})
app.listen(4000, ()=>console.log('Server acildi'));*/













   /*import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
const app=express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.log(err);
  
    if (err) {
      if (err.output) {
        return res.status(err.output.statusCode || 500).json(err.output.payload);
      }
  
      return res.status(500).json(err);
    }
})


app.listen(4000, ()=>console.log('Server acildi')); */