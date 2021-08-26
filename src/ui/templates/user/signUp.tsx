import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import getStyle from "./signUp.style";

export default function SignUp() {
    const classes = getStyle();
    return (




        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={12} md={12}
                style={{ height: "80%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
            >

                <img
                    className={classes.image}
                    src="./signup.jpg"></img>

                <Grid item xs={12} sm={7} md={5} className={classes.paperGrid} >
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <ExitToAppSharpIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
          </Typography>
                        <form className={classes.form} noValidate
                        // onSubmit={submitForm}

                        >
                            <div className={classes.formDiv}>
                                <TextField
                                    style={{ width: "90%" }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    id="email"
                                    label="Name"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    style={{ width: "90%" }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    style={{ width: "90%" }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    style={{ width: "90%" }}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    // fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className={classes.padding}><FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /></div>

                            <div className={classes.padding}>
                                <Button
                                    style={{ backgroundColor: "#56b35c", color: "white" }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    // color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
            </Button>
                            </div>

                            <Grid container className={classes.padding}>
                                <Grid item xs>

                                </Grid>
                                <Grid item>
                                    <Link href="/sign-in" variant="body2">
                                        {"Do have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>
        // <div>


        //     <Container component="section" maxWidth="xs">
        //         <Box border={1}>
        //             <div className={classes.paper}>
        //                 <img alt="dragon"  src={'https://files.trainingbeast.co/file/tbc-files/logo/head_no_glow.png'}  className={classes.logo} width={"200px"}
        //                     height={"210px"} />
        //                 <Typography component="h2" variant="h2" style={{ float: 'left' }}>
        //                     Sign up
        //                 </Typography>
        //                 <SignUpForm />
        //                 <Grid container justify="flex-end">
        //                     <Grid item>
        //                         <Link
        //                             href="/sign-in" color='primary'
        //                         >
        //                             Already have an account? Sign in
        //                         </Link>
        //                     </Grid>
        //                 </Grid>
        //             </div>
        //         </Box>
        //     </Container>
        // </div>
    );
}
