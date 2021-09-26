import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import axiosBeast from "@infra/http/axiosBeast";
import ListSections from '@ui/organisms/program/schedule/section/listSections';
import ScheduleTrainingForm from "@ui/organisms/program/schedule/training/newScheduleTrainingForm";
import { TrainingScheduleGroupModel, TrainingScheduleModel } from "@core/program/schedule/training/model/view";
import { TrainingInitialValuesModel } from "@core/program/schedule/training/model/domain"
import { dateUtil } from "@infra/dateTime"
import DangerButton from "@ui/atoms/buttons/dangerButton";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";
import { createTrainingCase, updateTrainingCase } from "@core/program/schedule/training/case";


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    grid: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    card: {
        width: "100%",
        border: "solid",
        "border-width": "1px",
        "border-color": theme.palette.primary.main,
    },
}));

type SetSubmitting = (submitting: boolean) => void;

function TrainingScheduleGroupForm(props: { date?: string | null, trainingGroup: TrainingScheduleGroupModel | TrainingScheduleModel | null }) {
    const classes = useStyles();
    const { showInfo, showError } = useTBCSnackBar();
    const [training, setTraining] = useState(props.trainingGroup);
    const { date } = props;

    const submitScheduleTrainingForm = (values: any, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
        if (!training) {
            createTraining(values, setSubmitting);
        }
        updateTraining(values, setSubmitting, training)
    };

    const createTraining = async (values: any, setSubmitting: SetSubmitting) => {

        try {
            let training = await createTrainingCase.execute(values);
            setTraining(training);
            setSubmitting(false);
            showInfo('training created')
            window.history.pushState(null, '', `/program/schedule/training/${training._id}`)
        } catch (e) {
            showError(e.message);
        }
    };

    const updateTraining = async (values: any, setSubmitting: SetSubmitting, training: any) => {
        values = {
            _id: training._id,
            ...values,
        };

        try {
            let training = await updateTrainingCase.execute(values);
            setTraining(training)
            setSubmitting(false);
            showInfo('training updated')
        } catch (e) {
            showError(e.message);
        }

    };
    // TODO: REFACTOR WITH A CASE
    const revertToScheduled = (training) => {
        axiosBeast.post("/schedule/training/revertToScheduled", { uid: training._id }).then((res) => {
            window.history.replaceState(null, '', `/calendar`)
        });
    };


    let initialScheduleTrainingFormValues: TrainingInitialValuesModel;
    if (training) {
        initialScheduleTrainingFormValues = {
            name: training.name,
            comments: training.comments || '',
            multiSection: training.multiSection,
            cyclic: training.cyclic,
            date: dateUtil.formatDate(new Date(training.date)),
            status: training.status
        }
    } else {
        initialScheduleTrainingFormValues = {
            name: '',
            comments: '',
            multiSection: true,
            cyclic: true,
            date: date,
            // TODO: CREATE A CONST AND REPLACE
            status: 'SCHEDULE'
        }
    }
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/calendar" >
                    Calendar
                </Link>
                <Typography color="textPrimary">New Training Builder</Typography>
            </Breadcrumbs>
            <Typography variant="h3" gutterBottom align={'center'}>
                Schedule Training Builder
            </Typography>
            <ScheduleTrainingForm
                initialValues={initialScheduleTrainingFormValues}
                submitForm={submitScheduleTrainingForm}
                initialSubmit={training ? false : true}
            />
            {training && <ListSections training={training as TrainingScheduleGroupModel} />}

            {training && (
                <div>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12}>
                            <DangerButton
                                variant="outlined"
                                fullWidth
                            // onClick={() => setDeleteDialogFlag(true)}
                            >
                                Delete Training
                            </DangerButton>
                        </Grid>
                    </Grid>
                </div>
            )}
        </div >
    );
}

export default TrainingScheduleGroupForm;