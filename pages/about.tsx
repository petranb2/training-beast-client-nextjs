import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HttpClient from "../src/infra/http/HttpClient";
import { AuthContext } from "../src/ui/templates/user/context/authContext";

function About({ data }: any) {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (data) {
      authContext.updateState(data);
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This is the about page
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          <p>{data.auth}</p>
          <p>{data.email}</p>
          <p>{data.displayName}</p>
        </Typography>
      </Box>
    </Container>
  );
}
// This gets called on every request
export async function getServerSideProps(ctx: any) {

  let res;
  try {
    res = await HttpClient.get('/users/check-auth', { params: {}, headers: { cookie: ctx.req.headers.cookie } });
    return { props: { data: res.data } }
  } catch (error: any) {

  }
  console.log('server side about page')
  // Pass data to the page via props
  return { props: { data: null } }
}
export default About;