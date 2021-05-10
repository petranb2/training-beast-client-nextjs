export interface TrainingScheduleModel {
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
    status: string
}