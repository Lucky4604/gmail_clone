import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";


const Error=()=>{
    const error=useRouteError();
    console.log(error);
    
    return (
        <Box style={{marginLeft:250}}>
        <Typography>There is an error</Typography>

        </Box>
    )
}

export default Error;