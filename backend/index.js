const express=require("express")
const connect=require("./config/db");
const routes=require('./routes/route');
const cors = require('cors')


const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use('/',routes)




app.listen(3001,async()=>{
    console.log("server running on port 3001")
    await connect();
    console.log("mongoDB connected");
    
})