import { TemplateProgramsRepoInterface } from "../repo"
import ProgramTemplate from "../model/view/programTemplate.model";

class GetAllTemplateProgramsCase {

    private templateProgramsRepo: TemplateProgramsRepoInterface

    constructor(templateProgramsRepo: TemplateProgramsRepoInterface) {
        this.templateProgramsRepo = templateProgramsRepo;
    }

    async execute(cookie: string): Promise<ProgramTemplate[]> {
        try {
            let userProfile = await this.templateProgramsRepo.fetchAllTemplatePrograms(cookie);
            return userProfile;
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default GetAllTemplateProgramsCase;