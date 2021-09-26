import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import axiosBeast from "@infra/http/axiosBeast";
import DangerButton from "@ui/atoms/buttons/dangerButton"

export default function DeleteTrainingDialog(props) {
  const { open, handleClose, deleteExercise, exercise } = props;


  const deleteScheduleExercise = (exercise) => {
    axiosBeast
      .post('/schedule/exercises/delete', { uid: exercise._id })
      .then((res) => {
        
        handleClose();
        deleteExercise(exercise);
      });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          <Typography variant="h5" color='error' gutterBottom align={'center'}>
            Are you sure you want to delete
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom align={'center'}>
            {exercise.name}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <DangerButton
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => deleteScheduleExercise(exercise)}
              >
                delete
              </DangerButton>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleClose}
            color="primary"
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
