import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import getStyle from "./signIn.style";

export default function SignIn() {
    const classes = getStyle();


    return (

        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={6}
            >
                <img
                    className={classes.image}
                    src="./undrawBackground.png"></img>
            </Grid>
            <Grid item xs={false} sm={1} md={1} style={{ backgroundColor: "white" }}></Grid>
            <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
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
                        </div>
                        <div className={classes.padding}><FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /></div>

                        <div className={classes.padding}>
                            <Button
                                style={{ backgroundColor: "#abdaa1", color: "white" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                // color="primary"
                                className={classes.submit}
                            >
                                Sign In
            </Button>
                        </div>

                        <Grid container className={classes.padding}>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
