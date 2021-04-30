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
import { updateDisplayNameCase } from "../../../../core/user/case";
import getStyles from "./displayName.style";

function DisplayName(props: any) {
  const classes = getStyles();
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);
  const { enqueueSnackbar } = useSnackbar();
  const displayName = props.displayName;
  const submitForm = async (values: any, { setSubmitting }: any) => {
    if (authContext.displayName === values.displayName) {
      setSubmitting(false);
      return;
    }

    layoutContext.setLinearProgress(true);

    try {
      await updateDisplayNameCase.execute(values.displayName);
      authContext.updateState({
        ...authContext,
        displayName: values.displayName,
      });
      enqueueSnackbar('Display Name updated');
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'warning' });
    } finally {
      layoutContext.setLinearProgress(false);
    }
  };

  return (
    <Formik
      initialValues={{
        displayName: displayName,
      }}
      validationSchema={Yup.object().shape({
        displayName: Yup.string()
          .max(100)
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
              <Typography>Display name: </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="displayName"
                name="displayName"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.displayName}
                error={(errors.displayName && touched.displayName) ? true : false}
                helperText={values.displayName ? values.displayName.length : null}
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

export default DisplayName;
