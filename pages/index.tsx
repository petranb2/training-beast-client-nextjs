import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/ui/molecules/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This is the main page of the application
        </Typography>
        <Link href="/sign-in" color="secondary">
          Go to the sign in page
        </Link>
        <br />
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}
