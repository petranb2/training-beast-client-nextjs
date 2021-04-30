import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../../templates/user/context/authContext";
import { LayoutContext } from "../../../templates/layout/context/layoutContext";
import { updateUsernameCase } from "../../../../core/user/case";
import getStyles from "./username.style";

function Username() {
  const classes = getStyles();
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);
  const { enqueueSnackbar } = useSnackbar();

  /**
   * Username regex
   * 1. At least 5 chars with no spaces
   * 2. only '-' as a special character
   */
  const usernameRegex = new RegExp('^[a-zA-Z0-9\--]{5,}$', 'i');

  const submitForm = async (values: any, { setSubmitting }: any) => {
    if (authContext.username === values.username) {
      setSubmitting(false);
      return;
    }
    layoutContext.setLinearProgress(true);

    try {
      await updateUsernameCase.execute(values.username);
      authContext.updateState({
        ...authContext,
        username: values.username,
      });
      enqueueSnackbar('Username updated');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'warning' });
    } finally {
      layoutContext.setLinearProgress(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: authContext.username,
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().matches(usernameRegex, 'Phone number is not valid').required(),
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
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={2}>
              <Typography>Username: </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="username"
                name="username"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={(errors.username && touched.username) ? true : false}
                className={classes.field}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant='outlined' color='primary' type="submit" disabled={isSubmitting}>
                save
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default Username;
