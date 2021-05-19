import { scheduleExercise } from "@core/program/schedule/exercise/model/view";
import { scheduleSection } from "@core/program/schedule/section/model/view";

export interface TrainingScheduleGroupModel {
    _id: string,
    _v: number,
    userUUID: string,
    programUUID: string,
    name: string,
    comments?: string,
    createdAt: string,
    updatedAt: string,
    cyclic: boolean,
    mutliSection: boolean,
    date: string,
    status: string,
    sections: scheduleSection[],
    exercises: scheduleExercise[]
}