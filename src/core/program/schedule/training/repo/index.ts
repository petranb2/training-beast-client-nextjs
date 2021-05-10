import { ScheduleTrainingsRepo, ScheduleTrainingsInterface } from "./scheduleTrainings.repo";
import httpClient from "@infra/http/HttpClient";

const scheduleTrainingsRepo = new ScheduleTrainingsRepo(httpClient);
export {
    scheduleTrainingsRepo
};
export type { ScheduleTrainingsInterface };
