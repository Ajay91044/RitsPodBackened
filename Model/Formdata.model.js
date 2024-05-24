const { Schema, model } = require('mongoose');

let SignupDataSchema = new Schema({
    id: {
        type: String,
    },
    description: {
        type: String,
    },
    Rules:{
        type:String,
    },
    Setting:{
        type:String,
    },
    sequence: {
        type: String,
    },
    hpoint: {
        type: String,
    },
    activity: {
        type: String,
    },
    Hmethod: {
        type: String,
    },
    Enabled: {
        type: String,
    },
    UArgument: {
        type: String,
    }
},{timestamps:true})

// ! collection 

module.exports=model('activity',SignupDataSchema) 