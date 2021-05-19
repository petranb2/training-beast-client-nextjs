import React, { useState, useEffect, useContext } from 'react'
import { Calendar, momentLocalizer, View } from 'react-big-calendar'
import { dateUtil, DateUtilInterface } from "@infra/dateTime";
import moment from 'moment';
import { useAuth } from "@ui/templates/user/hook/useAuth";
import { LayoutContext } from "@ui/templates/layout/context/layoutContext";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar"
import { TrainingEventModel } from "@core/program/schedule/training/model/domain/trainingEvent.model"
import { fetchTrainingsWithDateRange, mergeNewTrainingsArrayCase, setStyleToTrainingEventCase } from '@core/program/schedule/training/case'
import {
    DateRangeModel,
    CalendarViews,
    getDateRangeForView,
    isDateRangeFetched
} from "./dateCalendarUtil";

const localizer = momentLocalizer(moment);

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
            setTrainingsMap(freshTrainingsMap);
            let freshTrainingsArray = Array.from(freshTrainingsMap.values());
            setEvents(freshTrainingsArray)
            fetchedDatesMap.set(dates.start.toISOString(), dates);
            setFetchedDatesMap(fetchedDatesMap);
        } catch (error) {
            showError(error.message)
        } finally {
            layoutContext.setLinearProgress(false);
        }
    }


    useEffect(() => {
        (async function run() {
            let dates = getDateRangeForView(new Date(), CalendarViews.MONTH, dateUtil);
            await fetchAndSetNewTrainingEvents(dates)
        })()
    }, []);

    return <Calendar
        popup
        selectable
        localizer={localizer}
        events={events}
        defaultView={'month'}
        style={{ height: 500 }}
        onNavigate={(date: any, view: View) => onNavigate(date, view, dateUtil)}
        eventPropGetter={setStyleToTrainingEventCase.execute}
        onSelectEvent={(event) => alert(JSON.stringify(event))}
        onSelectSlot={(slotInfo) => alert(JSON.stringify(slotInfo))}
    // onRangeChange={(range: any, view: any) => getDateRangeFromView(range, view)}
    />
}

export default TBCCalendar;