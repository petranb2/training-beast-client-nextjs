import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { scheduleExercise } from "@core/program/schedule/exercise/model/view";
import ListExerciseAnalysis from "@ui/molecules/program/schedule/exercise/listExerciseAnalysis";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    leftMargin: {
        marginLeft: theme.spacing(3),
    }
}));
type ListExercisesProps = {
    exercises: scheduleExercise[]
}

const ListExercises = (props: ListExercisesProps) => {
    const classes = useStyles();
    const { exercises } = props;

    if (exercises.length === 0) {
        return <Typography color='textSecondary'>No exercises</Typography>
    }

    return (<div >
        { exercises.map((exercise: scheduleExercise) => {
            return (
                <div key={uuidv4()} >
                    <div key={uuidv4()} className={classes.leftMargin}>
                        <Typography color='textSecondary'>{exercise.name}</Typography>
                        <Typography color='textSecondary'>{exercise?.comments}</Typography>
                        <ListExerciseAnalysis analysisArray={exercise.analysis} />
                    </div>
                    <hr style={{ borderTop: '3px dashed #bbb' }} />
                </div>
            )
        })}
    </div>)

}

export default ListExercises;