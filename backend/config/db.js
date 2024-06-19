const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect('mongodb+srv://luckygovindrao18:YvPikKGB4RYHkZMY@cluster0.z9kqdwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

module.exports=connect;