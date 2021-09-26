import Typography from '@material-ui/core/Typography';
import { analysis } from "@core/program/schedule/exercise/model/domain";
import { v4 as uuidv4 } from 'uuid';

type ListExerciseAnalysisProps = {
    analysisArray: analysis[]
}

const ListExerciseAnalysis = (props: ListExerciseAnalysisProps) => {
    const { analysisArray } = props;
    if (!analysisArray) {
        return null
    }
    return (
        <div key={uuidv4()}>
            {analysisArray.map((analysis: analysis) => {
                return (
                    <Typography key={uuidv4()} color='textSecondary'>
                        {analysis.sets.k}-{analysis.sets.v}-{analysis.sets?.u} /
                        {analysis.duration.k}-{analysis.duration.v}-{analysis.duration?.u} /
                        {analysis.volume.k}-{analysis.volume.v}-{analysis.volume?.u} /
                        {analysis.rest.k}-{analysis.rest.v}-{analysis.rest?.u}
                    </Typography>
                )
            })}
        </div>);
}

export default ListExerciseAnalysis;