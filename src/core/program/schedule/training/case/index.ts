import FetchTrainingsWithDateRange from "./fetchTrainingsWithDateRangeCase";
import MergeNewTrainingsArrayCase from "./mergeNewTrainingsArrayCase";
import SetStyleToTrainingEventCase from "./setStyleToTrainingEventCase";
import { scheduleTrainingsRepo } from "../repo"

const fetchTrainingsWithDateRange = new FetchTrainingsWithDateRange(scheduleTrainingsRepo);

const mergeNewTrainingsArrayCase = new MergeNewTrainingsArrayCase();

const setStyleToTrainingEventCase = new SetStyleToTrainingEventCase();

export {
    fetchTrainingsWithDateRange,
    mergeNewTrainingsArrayCase,
    setStyleToTrainingEventCase
}