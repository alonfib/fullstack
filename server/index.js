import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors";

import postRouts from './routes/posts.js';
import employeesRouts from './routes/employees.js';

const app = express()


app.use(bodyParser.json({limit: "30mb",  extended: "true"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}))
app.use(cors());

app.use('/posts', postRouts)
app.use('/employees', employeesRouts)

const CONNECTION_URL = "mongodb+srv://alonfibert:alonfibert123@cluster0.em9fl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT =process.env.PORT || 5000;

 app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}` )
 })
