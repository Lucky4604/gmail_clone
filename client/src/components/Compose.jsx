/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { Box, Dialog ,InputBase,Typography,styled,TextField,Button} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { API_URLS } from '../api/api.url';
import useApi from "../hooks/useApi"


const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header=styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 15px",
    background: "#f2f6fc",
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
    

})
const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        line-height:20px;
        text-decoration:none solid rgb(34,34,34)
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;
    

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 36px 20px;
    align-items: center;
`;
const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`
const Compose = ({openDialog,setOpenDialog}) => {
    const [data, setData] = useState({});
    const sendEmail=useApi(API_URLS.saveSentEmail);
    const saveDraft=useApi(API_URLS.SaveDraftEmails);

    const onValueChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)

    }

    const closeComposeClick=(e)=>{
        e.preventDefault();
        const payload={
            to:data.to,
            from:"luckygovindrao182@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:" ",
            name:"lucky",
            starred:false,
            type:'drafts',
        }
        saveDraft.call(payload);
        if(!saveDraft.error){
            setOpenDialog(false);
            setData({})
        }else{

        }

    }
    const sendMail=async(e)=>{
        e.preventDefault();
        if(window.Email){
           window.Email.send({
                Host : "smtp.elasticemail.com",
                Username : "noobprob23@gmail.com",
                Password : "A545ABB6027C0E2DD01DA718A4439A783BAC",
                Port:2525,
                To : data.to,
                From : "luckygovindrao182@gmail.com",
                Subject : data.subject,
                 Body : data.body
            }).then(
              message => alert(message)
            );

        }

        const payload={
            to:data.to,
            from:"luckygovindrao182@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:" ",
            name:"lucky",
            starred:false,
            type:'sent',
        }
        sendEmail.call(payload);

        if(!sendEmail){
            setOpenDialog(false);
            setData({})
        }else{

        }
       
        setOpenDialog(false);
      
    }
   const deleteMail=()=>{
    setOpenDialog(false)
   }

  return (
   <Dialog
   open={openDialog}
   PaperProps={{ sx: dialogStyle }}
   >

  <Header>

    <Typography >New Message</Typography>
    <CloseIcon fontSize="small" onClick={(e) => closeComposeClick(e)} />


  </Header>
     <RecipientWrapper style={{}}>
     <InputBase placeholder='Recipients' onChange={(e)=>onValueChange(e)} name="to" />
     <InputBase placeholder='Subject' onChange={(e)=>onValueChange(e)} name="subject"/>
     </RecipientWrapper>

      <TextField 
                multiline
                rows={10}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e)=>onValueChange(e)}
                
                
               
            />
        <Footer>
        <SendButton onClick={(e)=> sendMail(e)}>Send</SendButton>

        <DeleteOutlineOutlinedIcon  onClick={()=>deleteMail()}/>
               
            </Footer>

   </Dialog>
  )
}

export default Compose