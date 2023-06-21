const email=require('../model/email')

const saveSentEmail=(request,response)=>{
    try {
     const Email=   new email(request.body);
     Email.save();

     response.status(200).json("email is saved")
        
    } catch (error) {
        response.status(500).json(error.message);
        
    }


}
module.exports=saveSentEmail;