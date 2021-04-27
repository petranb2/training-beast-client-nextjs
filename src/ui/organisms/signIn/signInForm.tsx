
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));
export default function SignInForm(props: any) {
    const classes = useStyles();
    let { submitForm } = props;
    return (
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
                                error={(errors.email && touched.email) ? true : false}
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
                                error={(errors.password && touched.password) ? true : false}
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
                                href="/sign-up" color='primary'
                            >
                                Don't have an account? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>)
}