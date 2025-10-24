require("dotenv").config()
const { default: mongoose } = require("mongoose")
const {makeconnection} = require("./Dbconfig/db.config")
const Form = require("./Dbconfig/db.model")
const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.port

makeconnection()
app.get("/" , (req, res)=> {
    res.status(200).json({msg: "Server is up "})
})


app.post("/api/form", async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data:", data);
    const newForm = new Form(data);
    const savedForm = await newForm.save();

    res.status(201).json({
      message: "Form submitted successfully!",
      form: savedForm,
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({
      message: "Error submitting form",
      error: error.message,
    });
  }
});
app.listen(port , ()=>{
    console.log(`server is up at ${port}`)
})