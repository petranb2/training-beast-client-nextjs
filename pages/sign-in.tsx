import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import axiosBeast from "../src/infra/httpClient/axiosBeast";
import Image from 'next/image'
import { LayoutContext } from "../src/ui/templates/layout/context/layoutContext";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    root: {
        backgroundColor: "#000000",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        maxWidth: "200px",
        marginBottom: theme.spacing(3),
    }
}));

function validateEmail(value) {
    let error;
    if (!value) {
        error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
}

export default function SignIn(props) {
    const classes = useStyles();
    const layoutContext = useContext(LayoutContext);
    const [showSnack, setShowSnack] = useState(false);
    const [msgSnack, setMsgSnack] = useState("");
    // Auth state
    const [auth, setAuth] = useState(false);
    const [profile, setProfile] = useState(null);
    // form submit for programm details
    const submitForm = (values, { setSubmitting }) => {
        layoutContext.setLinearProgress(true);
        axiosBeast
            .post("/users/sign-in", values)
            .then((res) => {
                // authContext.setAuth(true);
                setProfile(res.data);
                setAuth(true);
                setSubmitting(false);
                layoutContext.setLinearProgress(false);
                // props.history.push("/programms");
            })
            .catch((err) => {
                alert(err);
                setSubmitting(false);
                setShowSnack(true);
                if (!err.response) {
                    setMsgSnack("Network Error");
                } else {
                    setMsgSnack(err.response.data.msg);
                }

                layoutContext.setLinearProgress(false);
            });
    };

    return (
        <div>
            <Container component="section" maxWidth="xs">
                <CssBaseline />
                <Box border={1}>
                    <div className={classes.paper}>
                        <Image alt="dragon" loading='eager' src={'https://bucket.trainingbeast.co/logo/head_no_glow.png'} priority className={classes.logo} width={"200px"}
                            height={"210px"} />
                        <Typography component="h2" variant="h2" style={{ float: 'left' }}>
                            Sign In
            </Typography>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email().required(),
                                password: Yup.string().min(8).required(),
                            })}
                            onSubmit={submitForm}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                disabled={isSubmitting}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                error={errors.email && touched.email}
                                                label={errors.email}
                                                fullWidth
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                placeholder="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                disabled={isSubmitting}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                error={errors.password && touched.password}
                                                label={errors.password}
                                                fullWidth
                                                name="password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                placeholder="password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        className={classes.submit}
                                    >
                                        Sign In
                  </Button>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link
                                                href="#"
                                                onClick={() => props.history.push("/signUp")}
                                                variant="body2"
                                            >
                                                Don't have an account? Sign up
                      </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </div>
                </Box>
            </Container>
        </div>
    );
}
