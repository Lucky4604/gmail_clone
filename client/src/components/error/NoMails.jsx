import React from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';


const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  marginTop: 50,
  opacity: 0.8,
});

const StyledDivider = styled(Divider)({
  width: '100%',
  marginTop: 10,
});

const NoMails = ({ message }) => {
  return (
    <Container>
      <Typography variant="h6">{message.heading}</Typography>
      <Typography variant="subtitle1">{message.subHeading}</Typography>
      <StyledDivider />
    </Container>
  );
};

export default NoMails;
