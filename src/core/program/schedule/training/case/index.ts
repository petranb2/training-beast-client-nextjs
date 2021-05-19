import FetchTrainingsWithDateRange from "./fetchTrainingsWithDateRangeCase";
import MergeNewTrainingsArrayCase from "./mergeNewTrainingsArrayCase";
import SetStyleToTrainingEventCase from "./setStyleToTrainingEventCase";
import FetchTrainingGroupWithUID from "./fetchTrainingsWithDateUIDCase";
import CompleteTrainingAsScheduleCase from "./completeTrainingAsScheduleCase";
import ChangeTrainingDate from "./changeTrainingDateCase"
import { scheduleTrainingsRepo } from "../repo"

const fetchTrainingsWithDateRange = new FetchTrainingsWithDateRange(scheduleTrainingsRepo);

const fetchTrainingGroupWithUID = new FetchTrainingGroupWithUID(scheduleTrainingsRepo);

const completeTrainingAsScheduleCase = new CompleteTrainingAsScheduleCase(scheduleTrainingsRepo);

const changeTrainingDate = new ChangeTrainingDate(scheduleTrainingsRepo);

const mergeNewTrainingsArrayCase = new MergeNewTrainingsArrayCase();

const setStyleToTrainingEventCase = new SetStyleToTrainingEventCase();

export {
    fetchTrainingsWithDateRange,
    mergeNewTrainingsArrayCase,
    setStyleToTrainingEventCase,
    fetchTrainingGroupWithUID,
    completeTrainingAsScheduleCase,
    changeTrainingDate
}