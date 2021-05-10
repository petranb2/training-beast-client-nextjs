import { TrainingScheduleModel } from "../model/view";
import { TrainingEventModel } from "../model/domain/trainingEvent.model";
import { CaseInterface } from "@core/shared/interfaces";


class MergeNewTrainingsArrayCase implements CaseInterface {


    execute(trainingsMap: Map<string, TrainingEventModel>, trainingsList: TrainingScheduleModel[]): Map<string, TrainingEventModel> {
        let freshTrainingsMap = new Map<string, TrainingEventModel>(trainingsMap)
        trainingsList.forEach((training: any) => {
            let trainingEvent: TrainingEventModel = {
                start: new Date(training.date),
                end: new Date(training.date),
                title: training.name,
                id: training._id,
                allDay: true,
                status: training.status
            };

            freshTrainingsMap.set(training._id, trainingEvent);
        });
        return freshTrainingsMap;
    }
}

export default MergeNewTrainingsArrayCase;