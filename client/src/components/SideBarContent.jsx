import { Box, Button,List,ListItem,styled } from '@mui/material'
import { CreateOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../content/SideBar.content';
import Compose from './Compose';
import { useParams ,NavLink} from 'react-router-dom';
import {routes} from '../routes/route'



const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const {type}=useParams();

    const Container=styled(Box)({
        padding: 8,
        '& > ul':{
            padding: "10px 0 0 5px",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        '& >a':{
            textDecoration:'none',
            color:'inherit'
        }
        },
        '& >u1>li>svg':{
            marginRight:20,
        }


    })
    const ComposeButton=styled(Button)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`
   
const onComposeClick = () => {
    setOpenDialog(true);
}
    
  return (
    <Container>
    
   <ComposeButton onClick={() => onComposeClick()}>
   <CreateOutlined style={{ marginRight: 10 }} />
         Compose
   </ComposeButton>
    <List>
    {
        SIDEBAR_DATA.map(data=>(
            <NavLink key={data.name} to={`${routes.email.path}/${data.name}`}>
            <ListItem style={{ display: 'flex', alignItems: 'center', gap: '20px', ...(type === data.name.toLowerCase() ?{
                backgroundColor:"#d3e3fd",
                borderRadius:"0 16px 16px 0"
            }:{}
            && { /* additional styles */ }) }}>

            <data.icon fontSize="small"/>
            {data.title}
           
            </ListItem>
            </NavLink>
        ))
    }

    </List>
    <Compose openDialog={openDialog} setOpenDialog={setOpenDialog}/>

    </Container>
  )
}

export default SideBarContent