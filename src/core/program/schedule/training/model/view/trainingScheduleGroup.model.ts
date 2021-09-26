import { scheduleExercise } from "@core/program/schedule/exercise/model/view";
import { ScheduleSection } from "@core/program/schedule/section/model/view";

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
    multiSection: boolean,
    date: string,
    status: string,
    sections: ScheduleSection[],
    exercises: scheduleExercise[]
}