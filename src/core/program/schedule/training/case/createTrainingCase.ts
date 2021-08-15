import { ScheduleTrainingsInterface } from "../repo"
import { TrainingScheduleModel, TrainingInitialValuesModel } from "../model/view";
import { CaseInterface } from "@core/shared/interfaces";


class CreateTrainingCase implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel> {
        try {
            let scheduleTraining = await this.scheduleTrainingsRepo.createTraining(training);
            return scheduleTraining;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default CreateTrainingCase;