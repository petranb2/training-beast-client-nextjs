import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axiosBeast from "@infra/http/axiosBeast";

export default function SectionDialog(props) {
  const { training, addSection, open, close } = props;
  // alert(training)
  const trainingScheduleUUID = training ? training._id : null;
  const createNewSection = (values, { setSubmitting }) => {
    axiosBeast.post("/schedule/section/create", values).then((res) => {
      const section = res.data;
      console.log(section);
      addSection(section);
      setSubmitting(false);
      close();
    });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Section</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={
              {
                name: "# Main Section",
                comments: "This is the main training section",
                trainingScheduleUUID: trainingScheduleUUID,
                status: training?.status
              }
            }
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              trainingScheduleUUID: Yup.string().required(),
            })}
            onSubmit={createNewSection}
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
              <form onSubmit={handleSubmit}>
                <div>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                      {" "}
                      <TextField
                        name="name"
                        variant='outlined'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        error={errors.name && touched.name}
                        placeholder="Name"
                        label="Name"
                        fullWidth
                      />
                      <Field type="text" name="trainingScheduleUUID" hidden />
                      <Field type="text" name="status" hidden />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <TextField
                        name="comments"
                        variant='outlined'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                        placeholder="Comments"
                        label="Comments"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
