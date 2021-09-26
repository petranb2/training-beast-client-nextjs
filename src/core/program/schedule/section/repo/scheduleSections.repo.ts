import { HttpClientInterface } from "@infra/http/HttpClientInterface";
import ROUTES from "../util/routes";
import { InitialScheduleSection, ScheduleSection } from "@core/program/schedule/section/model/view";
import { uid } from "@core/shared/model/view";
import { operation } from "@core/shared/model/view";


interface ScheduleSectionsInterface {
    create(section: InitialScheduleSection): Promise<ScheduleSection>
    update(section: InitialScheduleSection): Promise<ScheduleSection>
    delete(uid: uid): Promise<operation>
    test<Input, Output>(arg: Input): Promise<Output>
}

class ScheduleSectionsRepo implements ScheduleSectionsInterface {
    private httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }
    async test<Input, Output>(arg: Input): Promise<Output> {
        let response;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.CREATE_SCHEDULE_SECTION, { data: arg });
            response = httpResponse.data as Output;
        } catch (error) {
            throw error;
        }
        return response;
    }

    async create(section: InitialScheduleSection): Promise<ScheduleSection> {
        let scheduleSection;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.CREATE_SCHEDULE_SECTION, { data: section });
            scheduleSection = httpResponse.data as ScheduleSection;
        } catch (error) {
            throw error;
        }
        return scheduleSection;
    }

    async update(section: InitialScheduleSection): Promise<any> {
        let scheduleSection;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.UPDATE_SCHEDULE_SECTION, { data: section });
            scheduleSection = httpResponse.data as ScheduleSection;
        } catch (error) {
            throw error;
        }
        return scheduleSection;
    }

    async delete(uid: uid): Promise<operation> {
        let scheduleSection;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.DELETE_SCHEDULE_SECTION, { data: uid });
            scheduleSection = httpResponse.data as operation;
        } catch (error) {
            throw error;
        }
        return scheduleSection;
    }


}

export { ScheduleSectionsRepo };
export type { ScheduleSectionsInterface };