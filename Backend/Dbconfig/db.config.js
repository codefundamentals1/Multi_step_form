require("dotenv").config()

const mongoose = require("mongoose")
const url = process.env.mongo_url
async function makeconnection (){
try {
    const connection = await mongoose.connect(url);
    console.log("Db connected succesfully")
} catch (error) {
    console.log(error)
}}

module.exports = {makeconnection}