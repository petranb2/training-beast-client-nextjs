import GetAllTemplateProgramsCase from "./getAllTemplateProgramCase";
import { templateProgramsRepo } from "../repo"

const getAllTemplateProgramsCase = new GetAllTemplateProgramsCase(templateProgramsRepo);

export {
    getAllTemplateProgramsCase
}