
const path = require("path") ; 
const express = require("express") ; 
const dotenv = require("dotenv") ;
const cors = require("cors") ;
const connectDB = require("./config/db") ; 

const routerController = require("./routes/stores") ; 
const { connect } = require("http2");

// load env variables 

dotenv.config({path: './config/config.env'}) ; 

// connect to database 

connectDB() ; 

const app = express() ; 

// body parser middleware 

app.use(express.json()) ; 

// enable cors 

app.use(cors()) ; 

// route 

app.use('/', routerController) ; 

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`) ; 
})

