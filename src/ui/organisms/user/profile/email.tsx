import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: "100%",
  },
  field: {
    "& .MuiInputBase-input": {
      padding: "0px 0px 0px",
      marginTop: "1px",
    },
  },
}));
function Email(props: any) {
  const classes = useStyles();
  const { email } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2}>
        <Typography>Email: </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField fullWidth disabled value={email} className={classes.field} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" color="primary" disabled>
          edit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Email;
