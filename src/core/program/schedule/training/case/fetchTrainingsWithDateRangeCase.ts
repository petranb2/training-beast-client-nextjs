import { ScheduleTrainingsInterface } from "../repo"
import { TrainingScheduleModel } from "../model/view/trainingSchedule.model";
import { CaseInterface } from "@core/shared/interfaces";


class FetchTrainingsWithDateRange implements CaseInterface {

    private scheduleTrainingsRepo: ScheduleTrainingsInterface

    constructor(scheduleTrainingsRepo: ScheduleTrainingsInterface) {
        this.scheduleTrainingsRepo = scheduleTrainingsRepo;
    }

    async execute(start: Date, end: Date): Promise<TrainingScheduleModel[]> {
        try {
            let scheduleTrainings = await this.scheduleTrainingsRepo.fetchTrainingsWithDateRange(start, end);
            return scheduleTrainings;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default FetchTrainingsWithDateRange;