import { keyValueUnit } from "@core/shared/model/domain"

export interface analysis {
    duration: keyValueUnit,
    rest: keyValueUnit,
    sets: keyValueUnit,
    volume: keyValueUnit
}