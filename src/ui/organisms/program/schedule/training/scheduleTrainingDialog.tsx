import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { LayoutContext } from '@ui/templates/layout/context/layoutContext';
import TransitionDown from "@ui/molecules/transitions/transitionDown";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view";
import { completeTrainingAsScheduleCase } from '@core/program/schedule/training/case';
import ListSections from "@ui/molecules/program/schedule/section/listSections";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";

const useStyles = makeStyles((theme) => ({
    buttomMargin: {
        marginBottom: theme.spacing(1),
    }
}));

type ScheduleTrainingDialogProps = {
    data?: TrainingScheduleGroupModel
    open: boolean
    close(): void
    setEventCompleted(uid: string): void
}

function ScheduleTrainingDialog(props: ScheduleTrainingDialogProps) {
    const classes = useStyles();
    const { showError } = useTBCSnackBar();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const layoutContext = useContext(LayoutContext);
    const { data, open, close, setEventCompleted } = props;

    const completeAsSchedule = async (uid: string) => {
        try {
            layoutContext.setLinearProgress(true);
            setIsSubmitting(true);
            await completeTrainingAsScheduleCase.execute(uid);
            setEventCompleted(uid);
            close();
        } catch (error) {
            showError(error.message)
        } finally {
            setIsSubmitting(false);
            layoutContext.setLinearProgress(false);
        }
    }

    if (!data) {
        return null
    }

    const { sections, exercises, name, status, _id } = data

    return (
        <div>
            <Dialog
                open={open}
                maxWidth={'md'}
                fullWidth={true}
                TransitionComponent={TransitionDown}
                keepMounted
                onClose={close}
                aria-labelledby="dialog-schedule-training"
                aria-describedby="dialog-schedule-training-description"
            >
                <DialogTitle id="dialog-schedule-training-title"  >{name}</DialogTitle>
                <DialogContent>
                    <Typography color='textSecondary'>status : {status}</Typography>
                    <br />
                    <ListSections sections={sections} exercises={exercises} trainingStatus={status} />
                    {status !== 'DONE' &&
                        (<Button
                            fullWidth
                            variant='contained'
                            onClick={() => completeAsSchedule(_id)}
                            disabled={isSubmitting}
                            color="secondary"
                            className={classes.buttomMargin}>
                            complete
                        </Button>)}
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color="primary">
                        edit training
                    </Button>
                    <Button variant='outlined' onClick={close} color="primary">
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ScheduleTrainingDialog;