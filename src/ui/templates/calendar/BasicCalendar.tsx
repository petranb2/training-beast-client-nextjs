import React from 'react'
import { Calendar, momentLocalizer, View } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { dateUtil, DateUtilInterface } from "@infra/dateTime";
import moment from 'moment';
import { setStyleToTrainingEventCase } from '@core/program/schedule/training/case'
import { TrainingEventModel } from "@core/program/schedule/training/model/domain/trainingEvent.model"
const DragAndDropCalendar = withDragAndDrop<any, any>(Calendar);
const localizer = momentLocalizer(moment);
type BasicCalendarProps = {
    events: TrainingEventModel[],
    onNavigate(date: any, view: View, dateUtil: DateUtilInterface): void
    onSelectTrainingEvent(trainingEvent: TrainingEventModel): void
    onChangeDateTrainingEvent(trainingEvent: TrainingEventModel, date: string): void
}
/**
 * 
 * TODO: Currently the Drag and Drop functionality has a bug at the month view
 * migrate to drag and drop when the PR  https://github.com/jquense/react-big-calendar/pull/1865 merged
 * 
 */
function BasicCalendar(props: BasicCalendarProps) {

    return <DragAndDropCalendar
        popup
        selectable
        resizable={false}
        localizer={localizer}
        events={props.events}
        defaultView={'month'}
        style={{ height: 500 }}
        onNavigate={(date: any, view: View) => props.onNavigate(date, view, dateUtil)}
        eventPropGetter={setStyleToTrainingEventCase.execute}
        onSelectEvent={props.onSelectTrainingEvent}
        onSelectSlot={(slotInfo) => alert(JSON.stringify(slotInfo))}
        onEventDrop={({ event, start }) => props.onChangeDateTrainingEvent(event, start as string)}
    // onRangeChange={(range: any, view: any) => getDateRangeFromView(range, view)}
    />
}

export default BasicCalendar;