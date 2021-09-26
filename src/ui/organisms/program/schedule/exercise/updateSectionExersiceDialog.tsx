import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from '@material-ui/core/Typography';
import DialogTitle from "@material-ui/core/DialogTitle";
import axiosBeast from "@infra/http/axiosBeast";
import ExerciseForm from "./scheduleExerciseForm";

export default function UpdateScheduleExersiceDialog(props) {
  const { exercise, section, updateExercise, close } = props;
  const updateScheduleExercise = (values: any, { setSubmitting }: { setSubmitting: (flag: boolean) => {} }) => {
    let { analysis, name, comments } = values;

    values = {
      sectionScheduleUUID: section._id,
      _id: exercise._id,
      analysis,
      name,
      comments,
    };
    console.log(values);
    axiosBeast.post("/schedule/exercises/update", values).then((res) => {
      const exersice = res.data;
      console.log(exersice);
      updateExercise(exersice);
      setSubmitting(false);
      close();
    });
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography variant="h5" gutterBottom align={'center'}>
            Exercise Builder
          </Typography>
        </DialogTitle>
        <DialogContent>
          <ExerciseForm
            submitFunction={updateScheduleExercise}
            initialValues={{
              name: exercise.name,
              comments: exercise.comments,
              sport: 'running',
              analysis: exercise.analysis,
            }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}