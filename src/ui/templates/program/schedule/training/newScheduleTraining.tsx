import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import axiosBeast from "@infra/http/axiosBeast";
import ListSections from '@ui/organisms/program/schedule/section/listSections';
import ScheduleTrainingForm from "@ui/organisms/program/schedule/training/newScheduleTrainingForm";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view";
import { dateUtil } from "@infra/dateTime"
import DangerButton from "@ui/atoms/buttons/dangerButton";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";

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

function newScheduleTraining(props: { date?: string | null, trainingGroup: TrainingScheduleGroupModel | null }) {
    const classes = useStyles();
    const { showInfo } = useTBCSnackBar();
    const [training, setTraining] = useState(props.trainingGroup);
    const [sections, setSections] = useState(new Map());
    const [exercises, setExercises] = useState(new Map());
    const { date } = props;

    const submitScheduleTrainingForm = (values: any, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
        if (!training) {
            createTraining(values, setSubmitting);
        }
        updateTraining(values, setSubmitting, training)
    };

    const createTraining = (values: any, setSubmitting: SetSubmitting) => {

        axiosBeast.post("/schedule/training/create", values).then((res) => {
            const training = res.data;
            console.log(training);
            setTraining(training)
            setSubmitting(false);
            showInfo('training created')
            window.history.pushState(null, '', `/program/schedule/training/${training._id}`)
        });
    };

    const updateTraining = (values: any, setSubmitting: SetSubmitting, training: any) => {
        values = {
            _id: training._id,
            ...values,
        };
        axiosBeast.post("/schedule/training/update", values).then((res) => {
            const training = res.data;
            console.log(training);
            setTraining(training)
            setSubmitting(false);
            showInfo('training updated')
        });
    };

    const revertToScheduled = (training) => {
        axiosBeast.post("/schedule/training/revertToScheduled", { uid: training._id }).then((res) => {
            window.history.replaceState(null, null, `/calendar`)
        });
    };

    const addSection = (section) => {
        sections.set(section._id, section);
        setSections(sections);
    }

    const updateSection = (section) => {
        // sections.delete(section._id);
        sections.set(section._id, section);
        setSections(new Map(sections));
    }

    const deleteSection = (section) => {
        sections.delete(section._id);
        setSections(new Map(sections));
    }

    const addExercise = (exercise) => {
        exercises.set(exercise._id, exercise);
        setExercises(exercises);
    }

    const updateExercise = (exercise) => {
        exercises.set(exercise._id, exercise);
        setExercises(new Map(exercises));
    }

    const deleteExercise = (exercise) => {
        exercises.delete(exercise._id);
        setExercises(new Map(exercises));
    }


    let initialScheduleTrainingFormValues
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
            <ScheduleTrainingForm initialValues={initialScheduleTrainingFormValues} submitForm={submitScheduleTrainingForm} initialSubmit={training ? false : true} />
            {training && <ListSections training={training} /> }
            
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

export default newScheduleTraining;