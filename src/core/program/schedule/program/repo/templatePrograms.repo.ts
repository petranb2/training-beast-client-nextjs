import { HttpClientInterface } from "@infra/http/HttpClientInterface";
import ROUTES from "../util/routes";
import ProgramTemplate from "../model/view/programTemplate.model";

interface TemplateProgramsRepoInterface {
    fetchAllTemplatePrograms(cookie: string): Promise<ProgramTemplate[]>
}

class TemplateProgramsRepo implements TemplateProgramsRepoInterface {
    private httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }

    async fetchAllTemplatePrograms(cookie: string): Promise<ProgramTemplate[]> {
        let templatePrograms;
        try {

            let httpResponse = await this.httpClient.get(ROUTES.TEMPLATE_PROGRAMS, { params: {}, headers: { cookie: cookie } });
            templatePrograms = httpResponse.data as ProgramTemplate[];

        } catch (error) {
            throw error;
        }
        return templatePrograms;
    }


}

export { TemplateProgramsRepo };
export type { TemplateProgramsRepoInterface };