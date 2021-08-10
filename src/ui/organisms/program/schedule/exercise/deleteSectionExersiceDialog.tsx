import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axiosBeast from "@infra/http/axiosBeast";

export default function DeleteTrainingDialog(props) {
  const { open, handleClose, section, training, exersice } = props;


  const deleteSection = (exersice) => {
    axiosBeast
      .delete(`/trainings/sections/exersices/${exersice._id}`)
      .then((res) => {
        // dispatch({ type: Actions.DELETE_EXERCISE, payload: exersice });
        // handleClose();
      });
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Διαγραφή Άσκησης</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Διαγραφή Άσκησης
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Ακύρωση
          </Button>
          <Button
            onClick={() => {
              deleteSection(exersice);
            }}
            autoFocus
          >
            Διαγραφή
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
