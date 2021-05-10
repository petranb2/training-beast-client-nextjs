import { HttpClientInterface } from "@infra/http/HttpClientInterface";
import ROUTES from "../util/routes";
import { TrainingScheduleModel, StringDateRangeModel } from "../model/view";
import { dateUtil } from "@infra/dateTime"


interface ScheduleTrainingsInterface {
    fetchTrainingsWithDateRange(start: Date, end: Date): Promise<TrainingScheduleModel[]>
}

class ScheduleTrainingsRepo implements ScheduleTrainingsInterface {
    private httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }

    async fetchTrainingsWithDateRange(start: Date, end: Date): Promise<TrainingScheduleModel[]> {

        let scheduleTrainings;
        let stringFromDate = dateUtil.getDateFromISOString(start);
        let stringEndDate = dateUtil.getDateFromISOString(end);
        let stringDateRange: StringDateRangeModel = {
            fromDate: stringFromDate,
            endDate: stringEndDate
        }
        try {
            let httpResponse = await this.httpClient.post(ROUTES.FETCH_SCHEDULE_TRAININGS_WITH_RANGE, { data: stringDateRange });
            scheduleTrainings = httpResponse.data as TrainingScheduleModel[];
        } catch (error) {
            throw error;
        }
        return scheduleTrainings;
    }

}

export { ScheduleTrainingsRepo };
export type { ScheduleTrainingsInterface };