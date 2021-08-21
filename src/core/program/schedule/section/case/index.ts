import FetchTrainingsWithDateRange from "./fetchTrainingsWithDateRangeCase";
import MergeNewTrainingsArrayCase from "./mergeNewTrainingsArrayCase";
import SetStyleToTrainingEventCase from "./setStyleToTrainingEventCase";
import FetchTrainingGroupWithUID from "./fetchTrainingsWithUIDCase";
import CompleteTrainingAsScheduleCase from "./completeTrainingAsScheduleCase";
import ChangeTrainingDate from "./changeTrainingDateCase"
import CreateTrainingCase from "./createTrainingCase";
import UpdateTrainingCase from "./updateTrainingCase";
import { scheduleTrainingsRepo } from "../repo"

const fetchTrainingsWithDateRange = new FetchTrainingsWithDateRange(scheduleTrainingsRepo);

const fetchTrainingGroupWithUID = new FetchTrainingGroupWithUID(scheduleTrainingsRepo);

const completeTrainingAsScheduleCase = new CompleteTrainingAsScheduleCase(scheduleTrainingsRepo);

const changeTrainingDate = new ChangeTrainingDate(scheduleTrainingsRepo);

const createTrainingCase = new CreateTrainingCase(scheduleTrainingsRepo);

const updateTrainingCase = new UpdateTrainingCase(scheduleTrainingsRepo);

const mergeNewTrainingsArrayCase = new MergeNewTrainingsArrayCase();

const setStyleToTrainingEventCase = new SetStyleToTrainingEventCase();

export {
    fetchTrainingsWithDateRange,
    mergeNewTrainingsArrayCase,
    setStyleToTrainingEventCase,
    fetchTrainingGroupWithUID,
    completeTrainingAsScheduleCase,
    changeTrainingDate,
    createTrainingCase,
    updateTrainingCase
}