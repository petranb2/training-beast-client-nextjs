import { ScheduleTrainingsInterface } from "../repo"
import { TrainingScheduleModel, TrainingInitialValuesModel } from "../model/view";
import { CaseInterface } from "@core/shared/interfaces";


class UpdateTrainingCase implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel> {
        try {
            let scheduleTraining = await this.scheduleTrainingsRepo.updateTraining(training);
            return scheduleTraining;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default UpdateTrainingCase;