const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect('mongodb://localhost:/gmial_db');
}

module.exports=connect;