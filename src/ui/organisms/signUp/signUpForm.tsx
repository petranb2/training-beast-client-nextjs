import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import getStyle from "./signUpForm.style";
import { LayoutContext } from "../../templates/layout/context/layoutContext";
import { signUpCase } from "../../../core/user/case";

export default function SignUpForm() {
    const classes = getStyle();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const layoutContext = useContext(LayoutContext);
    // form submit for programm details
    const submitForm = async (values: any, { setSubmitting }: any) => {
        layoutContext.setLinearProgress(true);
        try {
            await signUpCase.execute({ email: values.email, password: values.password });
            router.push('/success-sign-up');
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'warning' });
        } finally {
            setSubmitting(false);
            layoutContext.setLinearProgress(false);
        }
    };
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                terms: false,
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().min(8).required(),
                confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
                terms: Yup.boolean()
                    .required("The terms and conditions must be accepted.")
                    .oneOf([true], "The terms and conditions must be accepted."),
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
                                required
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
                                required
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
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                disabled={isSubmitting}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                error={((errors.confirmPassword !== errors.password) && touched.confirmPassword) ? true : false}
                                label={errors.confirmPassword}
                                fullWidth
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                placeholder="confirm password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                required
                                error={errors.terms ? true : false}
                                component="fieldset"
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="terms"
                                            name="terms"
                                            disabled={isSubmitting}
                                            checked={values.terms}
                                            onChange={handleChange}
                                            color="primary"
                                        />
                                    }
                                    label="Accept the term of use"
                                />
                                {errors.terms && touched.terms && (
                                    <FormHelperText>{errors.terms}</FormHelperText>
                                )}
                            </FormControl>
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
                        Sign Up
                    </Button>
                </form>
            )}
        </Formik>)
}