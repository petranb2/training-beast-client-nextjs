import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import axiosBeast from "@infra/http/axiosBeast";
import DangerButton from "@ui/atoms/buttons/dangerButton"
const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));
export default function SectionDialog(props: any) {
    const { section, deleteSection, open, close } = props;
    const deleteSectionForm = (_id: string) => {
        axiosBeast.post("/schedule/section/delete", { _id: _id }).then(() => {
            deleteSection(section);
            close();
        });
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="form-dialog-title"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">
                    <Typography variant="h5" color='error' gutterBottom align={'center'}>
                        Are you sure you want to delete
                    </Typography>
                    <Typography variant="h5" color="textSecondary" gutterBottom align={'center'}>
                        {section.name}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12}>
                            <DangerButton
                                variant="outlined"
                                color="primary"
                                fullWidth
                                onClick={() => deleteSectionForm(section._id)}
                            >
                                delete
                            </DangerButton>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={close}
                        color="primary"
                    >
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}