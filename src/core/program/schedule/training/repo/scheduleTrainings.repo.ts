import { HttpClientInterface } from "@infra/http/HttpClientInterface";
import ROUTES from "../util/routes";
import { TrainingScheduleModel, StringDateRangeModel, TrainingScheduleGroupModel, TrainingInitialValuesModel } from "../model/view";
import { operation } from "@core/shared/model/view";
import { dateUtil } from "@infra/dateTime"


interface ScheduleTrainingsInterface {
    fetchTrainingsWithDateRange(start: Date, end: Date): Promise<TrainingScheduleModel[]>
    fetchTrainingGroupWithUID(uid: string): Promise<TrainingScheduleGroupModel>
    completeTrainingAsSchedule(uid: string): Promise<operation>
    changeTrainingDate(uid: string, date: string): Promise<TrainingScheduleGroupModel>
    createTraining(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel>
    updateTraining(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel>
}

class ScheduleTrainingsRepo implements ScheduleTrainingsInterface {
    private httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }

    async createTraining(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel> {
        let scheduleTraining;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.CREATE_SCHEDULE_TRAINING, { data: training });
            scheduleTraining = httpResponse.data as TrainingScheduleModel;
        } catch (error) {
            throw error;
        }
        return scheduleTraining;
    }

    async updateTraining(training: TrainingInitialValuesModel): Promise<TrainingScheduleModel> {
        let scheduleTraining;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.UPDATE_SCHEDULE_TRAINING, { data: training });
            scheduleTraining = httpResponse.data as TrainingScheduleModel;
        } catch (error) {
            throw error;
        }
        return scheduleTraining;
    }
    
    async changeTrainingDate(uid: string, date: string): Promise<TrainingScheduleGroupModel> {
        let scheduleTrainingGroup;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.CHANGE_TRAINING_DATE, { data: { uid: uid, date: date } });
            scheduleTrainingGroup = httpResponse.data as TrainingScheduleGroupModel;
        } catch (error) {
            throw error;
        }
        return scheduleTrainingGroup;
    }

    async completeTrainingAsSchedule(uid: string): Promise<operation> {
        let operationResponse;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.COMPLETE_TRAINING_AS_SCHEDULE, { data: { uid: uid } });
            operationResponse = httpResponse.data as operation;
        } catch (error) {
            throw error;
        }
        return operationResponse;
    }

    async fetchTrainingGroupWithUID(uid: string): Promise<TrainingScheduleGroupModel> {
        let scheduleTrainingGroup;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.FETCH_SCHEDULE_GROUP_TRAINING_WITH_UID, { data: { uid: uid } });
            scheduleTrainingGroup = httpResponse.data as TrainingScheduleGroupModel;
        } catch (error) {
            throw error;
        }
        return scheduleTrainingGroup;
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