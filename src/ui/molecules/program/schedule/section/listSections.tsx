import Typography from '@material-ui/core/Typography';
import ListExercises from "@ui/molecules/program/schedule/exercise/listExercises";
import { scheduleSection } from "@core/program/schedule/section/model/view";
import { scheduleExercise } from "@core/program/schedule/exercise/model/view";
import { v4 as uuidv4 } from 'uuid';

type ListSectionsProps = {
    sections: scheduleSection[],
    exercises: scheduleExercise[],
    trainingStatus: string
}
const ListSections = (props: ListSectionsProps) => {

    const { sections, exercises, trainingStatus } = props;

    if (!sections) {
        return null
    }

    let sectionArray: any[] = [];
    sections.forEach((section) => {
        if (section.status !== trainingStatus) {
            return
        }
        let sectionExercises = getSectionExercises(exercises, section._id);
        sectionArray.push(
            <div key={uuidv4()}>
                <Typography color='textSecondary' variant={'body1'} >{section.name}</Typography>
                <Typography color='textSecondary' variant={'body1'} >{section.comments}</Typography>
                <hr />
                <ListExercises exercises={sectionExercises} />
            </div>
        )
    })
    return (
        <>
            {sectionArray}
        </>
    );
}

const getSectionExercises = (exercises: scheduleExercise[], sectionUid: string) => {
    return exercises.filter((exercise) => exercise.sectionScheduleUUID === sectionUid)
}

export default ListSections;