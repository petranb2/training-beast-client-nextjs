import { ScheduleTrainingsInterface } from "../repo"
import { operation } from "@core/shared/model/view";
import { CaseInterface } from "@core/shared/interfaces";


class CompleteTrainingAsSchedule implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(uid: string): Promise<operation> {
        try {
            let operationResponse = await this.scheduleTrainingsRepo.completeTrainingAsSchedule(uid);
            return operationResponse;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default CompleteTrainingAsSchedule;