import React from 'react'
import { ListItem, Checkbox, Typography, Box, styled } from "@mui/material"
import { StarBorder, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {routes} from '../routes/route'
import useApi from '../hooks/useApi';
import { API_URLS } from '../api/api.url';


const DisplayEmail = ({ email, selectedEmails,  setSelectedEmails }) => {
    const toggleService = useApi(API_URLS.starredEmail);
    const toggleStarred = () => {
      toggleService.call({ id: email._id, value: !email.starred });
      email.starred = !email.starred;
       // Update the `starred` property directly on the email object
    };

    const onSelectChange=()=>{
        if(selectedEmails.includes(email._id)){
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));

        }else{
            setSelectedEmails(prevState => [...prevState, email._id]);
        }

    }

    const reduceEmailBody = (body, maxLength) => {
        if (body.length <= maxLength) {
          return body;
        }
        return body.slice(0, maxLength) + "...";
      };
    
      const truncatedBody = email.body ? reduceEmailBody(email.body, 20) : '';
    
    const Wrapper=styled(Box)({
        padding:'0 0 0 10px',
        background: '#f2f6fc',
        display:'flex',
        alignItems:'center',
        cursor: 'pointer',
        '&>div':{
            display: 'flex',
             width: '100%',

        },
        '& > div > p':{
            fontSize: '14px',

        }
    })
    const Indicator=styled(Typography)({
        fontSize: '12px !important',
        background: '#ddd',
        color: '#222',
        borderRadius: '4px',
        marginRight: '6px',
        padding: '0 4px',

    }
    )
    const Date = styled(Typography)({
        marginLeft: 'auto',
        marginRight: 20,
        fontSize: 12,
        color: '#5F6368'
    })
    const navigate=useNavigate()
        
    
  return (
 <Wrapper >
      <Checkbox size="small"
        checked={selectedEmails.includes(email._id)}
        onChange={()=>onSelectChange()}
      />
     {email.starred ? (
        <Star fontSize="small" style={{ marginRight: 10,color:'#FFF200' }} onClick={toggleStarred} />
      ) : (
        <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={toggleStarred} />
      )}

      <Box onClick={() => navigate(routes.view.path, { state: { email: email }})}>
      <Typography style={{ width: 200,overflow:'hidden' }}>{email.name}</Typography>
      <Indicator>Inbox</Indicator>
      <Typography>{email.subject} {email.body && '-'}{truncatedBody}</Typography>
      <Date>
        {(new window.Date(email.date).getDate())}
        {(new window.Date(email.date).toLocaleString('default',{month:'long'}))}
      </Date>
      </Box>
 </Wrapper>
  )
}

export default DisplayEmail