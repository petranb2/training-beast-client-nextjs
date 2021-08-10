import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UpdateSectionDialog from './updateScheduleSectionDialog';
import DeleteSectionDialog from './deleteScheduleSectionDialog';
import NewExerciseDialog from '@ui/organisms/program/schedule/exercise/newScheduleExerciseDialog';
import { scheduleExercise } from "@core/program/schedule/exercise/model/view";
import ScheduleExerciseItem from '@ui/organisms/program/schedule/exercise/scheduleExerciseItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        "border-style": "solid",
        "border-width": "5px",
        "border-color": theme.palette.primary.main,
        marginTop: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(1),
    },
    exerciseBtnMargin: {
    },
    list: {
        flexGrow: 1,
        maxWidth: 752,
    },
}));

export default function ScheduleSectionItem(props) {
    const { section, exercises, updateSection, deleteSection } = props;
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openNewExerciseDialog, setOpenNewExerciseDialog] = useState(false);
    const [exercisesMap, setExercisesMap] = useState(new Map<String, scheduleExercise>());
    const classes = useStyles();

    useEffect(() => {
        const tempΕxercisesMap = new Map<String, scheduleExercise>();

        exercises?.forEach((exercise: scheduleExercise) => {
            console.info('exercise ' + JSON.stringify(exercise));
            tempΕxercisesMap.set(exercise._id, exercise);
            console.info('tempΕxercisesMap foreach' + [...tempΕxercisesMap]);
        })
        console.info('tempΕxercisesMap ' + [...tempΕxercisesMap]);
        setExercisesMap(tempΕxercisesMap);

    }, []);

    console.info('exercisesMap ' + [...exercisesMap]);

    const addExercise = (newExercise: scheduleExercise) => {
        exercisesMap.set(newExercise._id, newExercise);
        setExercisesMap(exercisesMap);
    }

    const updateExercise = (updatedExercise: scheduleExercise) => {
        exercisesMap.set(updatedExercise._id, updatedExercise);
        setExercisesMap(new Map(exercisesMap));
    }

    const deleteExercise = (deletedExercise: scheduleExercise) => {
        exercisesMap.delete(deletedExercise._id);
        setExercisesMap(new Map(exercisesMap));
    }
    if (!section) {
        return null
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom align={'center'}>
                        {section.name}
                    </Typography>
                    <Typography align={'center'}>{section.comments}</Typography>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => setOpenUpdateDialog(true)}
                    >
                        Update
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => setOpenDeleteDialog(true)}
                    >
                        Delete
                    </Button>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom align={'center'}>
                        Exercises
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => setOpenNewExerciseDialog(true)}
                        className={classes.exerciseBtnMargin}
                    >
                        New Exercise
                    </Button>
                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>
                    <List component="nav" aria-label="contacts">
                        {/* <ListExercises exercises={Array.from(exercisesMap)} /> */}
                        {renderExercises(section, exercisesMap, { update: updateExercise, delete: deleteExercise })}
                    </List>
                </Grid>
            </Grid>
            <UpdateSectionDialog section={section} open={openUpdateDialog} close={() => setOpenUpdateDialog(false)} updateSection={updateSection} />
            <DeleteSectionDialog section={section} open={openDeleteDialog} close={() => setOpenDeleteDialog(false)} deleteSection={deleteSection} />
            <NewExerciseDialog section={section} addExercise={addExercise} open={openNewExerciseDialog} close={() => setOpenNewExerciseDialog(false)} />
        </div>
    );
}

const renderExercises = (section, exercisesData: Map<String, scheduleExercise>, exerciseOperations) => {
    console.log("exercisesData" + [...exercisesData]);
    console.log("section" + JSON.stringify(section));
    let exerciseItemsArray: JSX.Element[] = []
    exercisesData?.forEach((exercise: scheduleExercise, key: String) => {
        if (exercise.sectionScheduleUUID === section._id) {
            console.log("exercise.sectionScheduleUUID === section._id");
            exerciseItemsArray.push(<Grid item xs={12}>
                <ScheduleExerciseItem key={key} section={section} exercise={exercise} updateExercise={exerciseOperations.update} deleteExercise={exerciseOperations.delete} />
            </Grid>)
        }
    });
    // console.log("exerciseItemsArray.size" + exerciseItemsArray.size);
    return exerciseItemsArray;
}