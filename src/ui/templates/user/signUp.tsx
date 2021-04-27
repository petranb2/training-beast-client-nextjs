import React from "react";
import Image from 'next/image';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import SignUpForm from "../../organisms/signUp/signUpForm";
import getStyle from "./signUp.style";

export default function SignUp() {
    const classes = getStyle();
    return (
        <div>
            <Container component="section" maxWidth="xs">
                <Box border={1}>
                    <div className={classes.paper}>
                        <Image alt="dragon" loading='eager' src={'/head_no_glow.png'} priority className={classes.logo} width={"200px"}
                            height={"210px"} />
                        <Typography component="h2" variant="h2" style={{ float: 'left' }}>
                            Sign up
                        </Typography>
                        <SignUpForm />
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link
                                    href="/sign-in" color='primary'
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </div>
    );
}
