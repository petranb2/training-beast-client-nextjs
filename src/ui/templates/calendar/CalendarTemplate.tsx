import React, { useState, useEffect, useContext } from 'react'
import { View } from 'react-big-calendar'
import { dateUtil, DateUtilInterface } from "@infra/dateTime";
import { useAuth } from "@ui/templates/user/hook/useAuth";
import { LayoutContext } from "@ui/templates/layout/context/layoutContext";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";
import { TrainingEventModel } from "@core/program/schedule/training/model/domain/trainingEvent.model";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view";
import {
    fetchTrainingsWithDateRange,
    mergeNewTrainingsArrayCase,
    fetchTrainingGroupWithUID,
    changeTrainingDate
} from '@core/program/schedule/training/case';
import {
    DateRangeModel,
    CalendarViews,
    getDateRangeForView,
    isDateRangeFetched
} from "./dateCalendarUtil";
import BasicCalendar from "./BasicCalendar";
import ScheduleTrainingDialog from "@ui/organisms/program/schedule/training/scheduleTrainingDialog";
import NewScheduleTrainingDialog from "@ui/organisms/program/schedule/training/newScheduleTrainingDialog";

/**
 * 
 * TODO: Currently the Drag and Drop functionality has a bug at the month view
 * migrate to drag and drop when the PR  https://github.com/jquense/react-big-calendar/pull/1865 merged
 * 
 */
function TBCCalendar() {
    useAuth();
    let layoutContext = useContext(LayoutContext);
    const { showError } = useTBCSnackBar();
    const [events, setEvents] = useState<TrainingEventModel[]>([]);
    const [trainingsMap, setTrainingsMap] = useState<Map<string, TrainingEventModel>>(new Map());
    const [fetchedDatesMap, setFetchedDatesMap] = useState<Map<string, DateRangeModel>>(new Map());
    const [openScheduleTraining, setOpenScheduleTraining] = useState(false);
    const [openNewScheduleTraining, setOpenNewScheduleTraining] = useState(false);
    const [newScheduleTrainingDate, setNewScheduleTrainingDate] = useState<Date>();
    const [selectedScheduleTraining, setSelectedScheduleTraining] = useState<TrainingScheduleGroupModel>();

    const onNavigate = async (date: any, view: View, dateUtil: DateUtilInterface) => {
        let dates = getDateRangeForView(date, view, dateUtil);
        if (!isDateRangeFetched(fetchedDatesMap, dates)) {
            fetchAndSetNewTrainingEvents(dates);
        }
    }
    /**
     * Fetch, merge and set new trainings with date range
     */
    const fetchAndSetNewTrainingEvents = async (dates: any): Promise<void> => {
        layoutContext.setLinearProgress(true);
        try {
            let trainingsList = await fetchTrainingsWithDateRange.execute(dates.start, dates.end);
            let freshTrainingsMap = mergeNewTrainingsArrayCase.execute(trainingsMap, trainingsList);
            updateTrainingEventsFromMap(freshTrainingsMap);
            fetchedDatesMap.set(dates.start.toISOString(), dates);
            setFetchedDatesMap(fetchedDatesMap);
        } catch (error) {
            showError(error.message)
        } finally {
            layoutContext.setLinearProgress(false);
        }
    }
    const onSelectTrainingEvent = async (trainingEvent: TrainingEventModel) => {
        layoutContext.setLinearProgress(true);
        try {
            let trainingGroup = await fetchTrainingGroupWithUID.execute(trainingEvent.id);
            setOpenScheduleTraining(true);
            setSelectedScheduleTraining(trainingGroup);
        } catch (error) {
            showError(error.message)
        } finally {
            layoutContext.setLinearProgress(false);
        }
    }
    const onChangeDateTrainingEvent = async (trainingEvent: TrainingEventModel, date: string) => {
        layoutContext.setLinearProgress(true);
        try {
            let trainingEventToUpdate = trainingsMap.get(trainingEvent.id);
            if (trainingEventToUpdate) {
                trainingEventToUpdate.start = new Date(date);
                trainingEventToUpdate.end = new Date(date);
                trainingsMap.set(trainingEvent.id, trainingEventToUpdate);
                updateTrainingEventsFromMap(trainingsMap);
            }
            await changeTrainingDate.execute(trainingEvent.id, date);
        } catch (error) {
            showError(error.message)
        } finally {
            layoutContext.setLinearProgress(false);
        }
    }
    const onTrainingEventCompleted = (uid: string) => {
        let completedTrainingEvent = trainingsMap.get(uid);
        if (completedTrainingEvent) {
            completedTrainingEvent.status = 'DONE';
            trainingsMap.set(uid, completedTrainingEvent);
            updateTrainingEventsFromMap(trainingsMap);
        }
    }
    const updateTrainingEventsFromMap = (freshTrainingsMap: Map<string, TrainingEventModel>) => {
        setTrainingsMap(freshTrainingsMap);
        let freshTrainingsArray = Array.from(freshTrainingsMap.values());
        setEvents(freshTrainingsArray)
    }
    const onSelectSlot = (date: string) => {
        setNewScheduleTrainingDate(new Date(date));
        setOpenNewScheduleTraining(true);
    }
    useEffect(() => {
        (async function run() {
            let dates = getDateRangeForView(new Date(), CalendarViews.MONTH, dateUtil);
            await fetchAndSetNewTrainingEvents(dates)
        })()
    }, []);

    return (<>
        <BasicCalendar
            events={events}
            onNavigate={onNavigate}
            onSelectTrainingEvent={onSelectTrainingEvent}
            onChangeDateTrainingEvent={onChangeDateTrainingEvent}
            onSelectSlot={onSelectSlot}
        />
        <ScheduleTrainingDialog
            setEventCompleted={onTrainingEventCompleted}
            open={openScheduleTraining}
            data={selectedScheduleTraining}
            close={() => setOpenScheduleTraining(false)}
        />
        <NewScheduleTrainingDialog
            open={openNewScheduleTraining}
            close={() => setOpenNewScheduleTraining(false)}
            date={newScheduleTrainingDate}
        />
    </>)
}

export default TBCCalendar;