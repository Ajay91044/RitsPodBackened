const express = require('express');
const mongoose = require('mongoose');
const connectToMongoDb=require('./db/connection')
const FormdataRoutes = require('./Routes/Formdata.routes');
const model=require('./Model/Formdata.model')
require('dotenv').config();
const cors = require('cors');

let app=express()

app.use(cors());

app.use(express.json())

app.use('/api/formdatas',FormdataRoutes)


let startserver = async () =>
 {
    try { 
        app.listen(process.env.DEV_PORT, () =>
        {
            console.log(`server is running on port ${process.env.DEV_PORT}`);
          
        })
        await connectToMongoDb(process.env.DEV_Mongo_URL);
        console.log('MongoDb connected succesfully ');
    }
    catch(err)
    {
        console.log((err));
    }
    
 }

 startserver()





// const model=require('./public/Model/Products.model')
// const cors = require('cors');


// require('dotenv').config();

// let app = express();

// app.use(cors());

// app.use(express.json());

// app.use('/api/products', productRoutes)

// let startserver = async () =>
//  {
//     try {
//         app.listen(process.env.DEV_PORT, () =>
//         {
//             console.log(`server is running on port ${process.env.DEV_PORT}`);
          
//         })
//         await connectToMongoDb(process.env.DEV_Mongo_URL);
//         console.log('MongoDb connected succesfully ');
//     }
//     catch(err)
//     {
//         console.log((err));
//     }
    
//  }

//  startserver()


