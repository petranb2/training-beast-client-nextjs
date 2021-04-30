import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import { AuthContext } from "../../../templates/user/context/authContext";
import { LayoutContext } from "../../../templates/layout/context/layoutContext";
import { updateSportsCase } from "../../../../core/user/case";
import getStyles from "./sports.style";

const SPORTS_CATEGORIES = [
  "marathon",
  "bodybuilding",
  "calisthenis",
  "box",
  "kick-box",
  "running",
];
const MAX_SPORTS_NUMBER = 5;
function Sports(props: any) {
  const classes = getStyles();
  const sports = props.sports;
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);
  const { enqueueSnackbar } = useSnackbar();

  const submitForm = async (values: any, { setSubmitting }: any) => {
    if (authContext.sports === values.sports) {
      setSubmitting(false);
      return;
    }
    layoutContext.setLinearProgress(true);

    try {
      await updateSportsCase.execute(values.sports);
      authContext.updateState({
        ...authContext,
        sports: values.sports,
      });
      enqueueSnackbar('Sports updated');
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'warning' });
    } finally {
      layoutContext.setLinearProgress(false);
    }
  };

  return (
    <Formik initialValues={{ sports: sports }} onSubmit={submitForm}>
      {({
        values,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={2} style={{ display: "flex" }}>
              <Typography>Sports:</Typography>
            </Grid>
            <Grid item xs={12} sm={8} style={{ display: "flex" }}>
              <Autocomplete
                multiple
                id="tags-outlined"
                fullWidth
                options={SPORTS_CATEGORIES}
                disabled={isSubmitting}
                onChange={(_event, sports) => {
                  if (sports.length >= MAX_SPORTS_NUMBER) {
                    alert("max number of tags 4");
                    sports.pop();
                    return values.sports;
                  }
                  values.sports = sports;
                }}
                getOptionLabel={(option) => option}
                defaultValue={values.sports}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} />}
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

export default Sports;
