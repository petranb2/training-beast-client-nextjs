import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


function About({ data }: any) {
  if (data === true) {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button variant="contained" color="primary" href="/">
            Go to the main page
          </Button>
        </Box>
      </Container>
    );
  }
  return <p>Not auth</p>
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  console.log('server side about page')
  let data = true;
  // Pass data to the page via props
  return { props: { data } }
}
export default About;