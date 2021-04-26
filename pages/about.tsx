import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import HttpClient from "../src/infra/http/HttpClient";
import { AuthContext } from "../src/ui/templates/user/context/authContext";

function About({ data }: any) {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('useEffect')
    if (data) {
      authContext.updateState(data);
    }
  }, []);
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          <p>auth</p>
          <p>{authContext.email}</p>
          <p>{authContext.displayName}</p>
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
// This gets called on every request
export async function getServerSideProps(ctx: any) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  console.log(ctx.req.headers.cookie);
  let res;
  try {
    res = await HttpClient.get('/users/check-auth', { params: {}, headers: { cookie: ctx.req.headers.cookie } });
    return { props: { data: res.data } }
  } catch (error) {

  }
  console.log('server side about page')
  // Pass data to the page via props
  return { props: { data: null } }
}
export default About;