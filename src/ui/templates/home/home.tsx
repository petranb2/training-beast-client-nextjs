import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AuthContext } from "../user/context/authContext";
import {withAuth} from "../user/hoc/withAuth";

function Home() {
    const authContext = useContext(AuthContext);
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    This is the home page of the application
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom>
                    <p>{authContext.email}</p>
                    <p>{authContext.displayName}</p>
                </Typography>
            </Box>
        </Container>
    );
}

export default withAuth(Home);