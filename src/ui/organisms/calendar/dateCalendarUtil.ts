import { DateUtilInterface, dateUtil } from "@infra/dateTime";
import { View } from 'react-big-calendar'

type DateRangeModel = {
    start: Date,
    end: Date
}

type StringDateRangeModel = {
    start: string,
    end: string
}

enum CalendarViews {
    MONTH = 'month',
    WEEK = 'week',
    DAY = 'day',
    AGENDA = 'agenda'
}

/**
 * Get the visible date range for the calendar by view
 * @param date 
 * @param view 
 * @param dateUtil 
 * @returns 
 */
const getDateRangeForView = (date: Date, view: View, dateUtil: DateUtilInterface): DateRangeModel => {

    let start = date;
    let end = date;

    if (view === CalendarViews.DAY) {
        start = date;
        end = date;
    }
    else if (view === CalendarViews.WEEK) {
        start = dateUtil.getFirstWeekDay(date);
        end = dateUtil.getLastWeekDay(date);
    }
    else if (view === CalendarViews.MONTH) {
        start = dateUtil.getFirstCalendarMonthDay(date);
        end = dateUtil.getLastCalendarMonthDay(date);
    }
    else if (view === CalendarViews.AGENDA) {
        start = date;
        end = date;
    }

    return {
        start: start,
        end: end
    }
}

const isDateRangeFetched = (fetchedDatesMap: Map<string, DateRangeModel>, dates: DateRangeModel): boolean => {

    let dateRange = fetchedDatesMap.get(dates.start.toISOString());

    if (!dateRange) {
        return false;
    }

    if (dateUtil.getDateFromISOString(dateRange.start) === dateUtil.getDateFromISOString(dates.start) && dateUtil.getDateFromISOString(dateRange.end) === dateUtil.getDateFromISOString(dates.end)) {
        return true;
    }

    return false;

}


export type {
    DateRangeModel,
    StringDateRangeModel
}
export { CalendarViews, getDateRangeForView, isDateRangeFetched }