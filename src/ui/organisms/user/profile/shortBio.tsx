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
import { updateShortBioCase } from "../../../../core/user/case";
import getStyles from "./shortBio.style";

function ShortBio(props) {
  const classes = getStyles();
  const shortBio = props.shortBio;
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);
  const { enqueueSnackbar } = useSnackbar();


  const submitForm = async (values: any, { setSubmitting }: any) => {
    if (authContext.shortBio === values.shortBio) {
      setSubmitting(false);
      return;
    }
    layoutContext.setLinearProgress(true);

    try {
      await updateShortBioCase.execute(values.shortBio);
      authContext.updateState({
        ...authContext,
        shortBio: values.shortBio,
      });
      enqueueSnackbar('ShortBio updated');
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'warning' });
    } finally {
      layoutContext.setLinearProgress(false);
    }
  };

  return (
    <Formik
      initialValues={{
        shortBio: shortBio || "",
      }}
      validationSchema={Yup.object().shape({
        shortBio: Yup.string().max(200),
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
              <Typography>Short bio: </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="shortBio"
                name="shortBio"
                style={{ width: "100%" }}
                disabled={isSubmitting}
                multiline
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.shortBio}
                error={(errors.shortBio && touched.shortBio) ? true : false}
                helperText={values.shortBio ? values.shortBio.length : null}
                label={errors.shortBio}
                className={classes.field}
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

export default ShortBio;
