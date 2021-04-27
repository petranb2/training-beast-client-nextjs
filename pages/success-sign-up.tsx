import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SuccessSignUp() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Great You Will Get An Email To Verify The Registration
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          Check your junk mail
        </Typography>
      </Box>
    </Container>
  );
}
