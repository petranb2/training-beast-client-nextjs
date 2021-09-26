import React from 'react';
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TransitionDown from "@ui/molecules/transitions/transitionDown";
import { dateUtil } from "@infra/dateTime";

type NewScheduleTrainingDialogProps = {
    open: boolean,
    close(): void,
    date?: Date
}

function NewScheduleTrainingDialog(props: NewScheduleTrainingDialogProps) {
    const router = useRouter();
    const date = props?.date || new Date();
    const href = `/program/schedule/training/new?date=${dateUtil.formatDate(date)}`;

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={TransitionDown}
                keepMounted
                onClose={props.close}
                aria-labelledby="dialog-new-schedule-training"
                aria-describedby="dialog-new-schedule-training-description"
            >
                <DialogTitle id="dialog-new-schedule-training-title">Do you want to create a new training at {props.date?.toLocaleDateString()}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-new-schedule-training-description">
                        <Button variant='contained' onClick={() => router.push(href)} fullWidth color='secondary'>New Training</Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={props.close} color="primary">
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewScheduleTrainingDialog;