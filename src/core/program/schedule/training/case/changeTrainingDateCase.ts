import { ScheduleTrainingsInterface } from "../repo"
import { TrainingScheduleModel } from "../model/view/trainingSchedule.model";
import { CaseInterface } from "@core/shared/interfaces";


class ChangeTrainingDate implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(uid: string, date: string): Promise<TrainingScheduleModel> {
        try {
            let scheduleTrainingGroup = await this.scheduleTrainingsRepo.changeTrainingDate(uid, date);
            return scheduleTrainingGroup;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default ChangeTrainingDate;