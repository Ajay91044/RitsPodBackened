let SignupdataCollection = require('../Model/Formdata.model');

const path = require('path');
const fs = require('fs');

// let data=require('/Users/aj/Documents/NewRitsPod/src/Components/Pluggings/Assemble')

// const dcCoollect=require(`C:\Users\aj\Documents\NewRitsPod\src\Components\Pluggings\Assemble.jsx`)


let getStartService=async (req,res)=>
    {
        try {
            res.json({ error: false, message: "Started successfully", data: addSignupData });
          
        } catch (err) {
            console.error("Error adding data:", err);
            res.status(500).json({ error: true, message: "Failed to add data" });
        }
    }
let getCompleteService=async (req,res)=>
    {
        try {
            res.json({ error: false, message: "Completed Succesfully", data: addSignupData });

        } catch (err) {
            console.error("Error adding data:", err);
            res.status(500).json({ error: true, message: "Failed to add data" });
        }
    }
let getSignOffService=async (req,res)=>
    {
        try {
            res.json({ error: false, message: "SignedOff successfully", data: addSignupData });

        } catch (err) {
            console.error("Error adding data:", err);
            res.status(500).json({ error: true, message: "Failed to add data" });
        }
    }

// Add a new signup data
let addSignupData = async (req, res) => {
    try {
        let { id, description } = req.body;
        let addSignupData = await SignupdataCollection.create({ id, description });
        res.json({ error: false, message: "Data added successfully", data: addSignupData });
    } catch (err) {
        console.error("Error adding data:", err);
        res.status(500).json({ error: true, message: "Failed to add data" });
    }
}


let rulesdata = async (req, res) => {
    try {
        let { id, Rules, Setting } = req.body;

        const existingData = await SignupdataCollection.findOne({ id: id });

        if (existingData) 
            {
            await SignupdataCollection.updateOne({ id: id }, { $set: { Rules, Setting } });
        }
        else  
        {
            // If data with the ID doesn't exist, create a new record
            res.json({error:true,message:'No data exists with this id number'})
        }

        res.json({ error: false, message: "Data added successfully", data: rulesdata });
    } catch (err) {
        console.error("Error adding data:", err);
        res.status(500).json({ error: true, message: "Failed to add data" });
    }
}

// Retrieve all signup data
let getdata = async (req, res) => {
    try {
        let getdatas = await SignupdataCollection.find();
        let totalDocument = await SignupdataCollection.find().count();

        // res.json({ error: false, dataFromMongo: getdatas,totalDocument:totalDocument });
        res.json({ error: false, dataFromMongo: 'http/Users/aj/Documents/NewRitsPod/src/Components/Pluggings/Assemble',totalDocument:totalDocument });
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: true, message: "Failed to fetch data" });
    }
}

// Delete a single data entry by ID
let deleteSingleData = async (req, res) => {
    let id = req.params.id;
    try {
        const deletedData = await SignupdataCollection.findByIdAndDelete(id);
        if (!deletedData) {
            res.status(404).json({ error: true, message: "Data not found" });
        } else {
            res.json({ error: false, message: "Data deleted successfully", deletedData });
        }
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).json({ error: true, message: "Failed to delete data" });
    }
}




module.exports = { addSignupData, getdata, deleteSingleData, rulesdata,getStartService,getCompleteService,getSignOffService};

