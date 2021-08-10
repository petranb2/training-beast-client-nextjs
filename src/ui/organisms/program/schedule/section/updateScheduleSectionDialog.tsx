import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axiosBeast from "@infra/http/axiosBeast";

export default function SectionDialog(props) {
  const { section, updateSection, open, close } = props;
  const updateSectionFrom = (values, { setSubmitting }) => {
    axiosBeast.post("/schedule/section/update", values).then((res) => {
      const section = res.data;
      console.log(section);
      updateSection(section);
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
        <DialogTitle id="form-dialog-title">Update Section</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={
              {
                name: section.name,
                comments: section.comments,
                _id: section._id,
                status: section.status
              }
            }
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              _id: Yup.string().required(),
              status: Yup.string().required()
            })}
            onSubmit={updateSectionFrom}
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
                        error={(errors.name && touched.name) ? true : false}
                        placeholder="Name"
                        label="Name"
                        fullWidth
                      />
                      <Field type="text" name="status" hidden />
                      <Field type="text" name="_id" hidden />
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