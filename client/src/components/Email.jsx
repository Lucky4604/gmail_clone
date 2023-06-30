/* eslint-disable no-unused-vars */
import { useOutletContext,useParams } from "react-router-dom";
import { API_URLS } from "../api/api.url";
import useApi from "../hooks/useApi";
import { useEffect,useState } from "react";
import { Box, List, Checkbox } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import DisplayEmail from "./DisplayEmail";
import { EMPTY_TABS } from "../assests/Assest";
import NoMails from "./error/NoMails";







const Email =()=>{
    const [starredEmail, setStarredEmail] = useState(false);
    const [selectedEmails ,setSelectedEmails]=useState([]);
   

    const {openDrawer}=useOutletContext();
    const {type}=useParams();
    const getEmailService=useApi(API_URLS.getEmail);
    const moveEmailToBin=useApi(API_URLS.moveToBin);
    const deleteEmailService=useApi(API_URLS.deleteEmail)

    useEffect(() => {
      
        getEmailService.call({},type);
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])
    const selectAllEmails=(e)=>{
        if(e.target.checked){
            const emails=getEmailService?.response?.map(email=>email._id);
            setSelectedEmails(emails);


        }else{
            setSelectedEmails([])

        }
        setStarredEmail(prevState => !prevState);

    }
    const deleteEmails=(e)=>{
        if(type==='bin'){
            deleteEmailService.call(selectedEmails)

        }else{
            moveEmailToBin.call(selectedEmails)

        }
        
    }
    

    return(
        <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100%-250px)' } : { width: '100%' } }>
           <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
            <Checkbox size="small" onChange={(e)=>selectAllEmails(e)}/>
            <DeleteOutline
                onClick={(e)=>deleteEmails(e)}
            />
           </Box>
           <List>
            {
                getEmailService?.response?.map(email=>(
                    <DisplayEmail
                         email={email} 
                        key={email._id}
                        setStarredEmail={setStarredEmail} 
                        selectedEmails={selectedEmails}
                        setSelectedEmails={setSelectedEmails}
                   
                        
                    />
                   
               
                ))
            }
           
           </List>
           {
            getEmailService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]} />
            }

          

        </Box>
    )

}
export default Email;