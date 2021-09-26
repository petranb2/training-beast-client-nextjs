import { analysis } from "@core/program/schedule/exercise/model/domain";

export interface scheduleExercise {
    _id: string,
    _v: number,
    sectionScheduleUUID: string,
    name: string,
    sport: string,
    comments?: string,
    analysis: analysis[],
    createdAt: string,
    updatedAt: string,
}