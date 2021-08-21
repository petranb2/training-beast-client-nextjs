import { ScheduleTrainingsInterface } from "../repo"
import { TrainingScheduleGroupModel } from "../model/view";
import { CaseInterface } from "@core/shared/interfaces";


class FetchTrainingsWithUID implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(uid: string): Promise<TrainingScheduleGroupModel> {
        try {
            let scheduleTrainingGroup = await this.scheduleTrainingsRepo.fetchTrainingGroupWithUID(uid);
            return scheduleTrainingGroup;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default FetchTrainingsWithUID;