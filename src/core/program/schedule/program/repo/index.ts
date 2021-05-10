import { TemplateProgramsRepo, TemplateProgramsRepoInterface } from "./templatePrograms.repo";
import HttpClient from "@infra/http/HttpClient";

const templateProgramsRepo = new TemplateProgramsRepo(HttpClient);
export {
    templateProgramsRepo
};
export type { TemplateProgramsRepoInterface };
