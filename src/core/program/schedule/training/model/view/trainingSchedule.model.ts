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
    multiSection: boolean,
    date: string,
    status: string
}