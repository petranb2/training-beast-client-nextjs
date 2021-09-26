import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from '@material-ui/core/Typography';
import DialogTitle from "@material-ui/core/DialogTitle";
import axiosBeast from "@infra/http/axiosBeast";
import ExerciseForm from "./scheduleExerciseForm";

export default function newScheduleExersiceDialog(props) {
  const { section, addExercise, close } = props;
  const createNewExercise = (values, { setSubmitting }) => {
    // alert(JSON.stringify(values));
    // exercises.add(values);
    // setSubmitting(false);
    // close();
    values.sectionScheduleUUID = section._id;
    axiosBeast.post("/schedule/exercises/create", values).then((res) => {
      const exersice = res.data;
      console.log(exersice);
      addExercise(exersice);
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
          <ExerciseForm submitFunction={createNewExercise} initialValues={{
            name: "Push ups",
            comments: "",
            sport: 'running',
            analysis: [{ sets: { v: '4', u: "sets" }, duration: { v: '30', u: "reps" }, rest: { v: '30', u: "min" }, volume: { v: '30', u: "kg" } }],
          }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}