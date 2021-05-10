import { DateUtilInterface } from "./DateUtilInterface"
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

class DateUtil implements DateUtilInterface {
    getFirstWeekDay(date: Date): Date {
        date.setHours(0, 0);
        let firstWeekDay = dayjs(date).subtract(date.getDay(), 'days');
        return new Date(firstWeekDay.utc(true).toISOString());
    }
    getLastWeekDay(date: Date): Date {
        date.setHours(0, 0, 0);
        let lastWeekDay = dayjs(date).add(6 - date.getDay(), 'days');
        return new Date(lastWeekDay.utc(true).toISOString());
    }
    getFirstMonthDay(date: Date): Date {
        date.setHours(0, 0, 0);
        let firstMonthDay = dayjs(date).subtract(date.getDate() - 1, 'days');
        return new Date(dayjs(firstMonthDay).utc(true).toISOString());
    }
    getLastMonthDay(date: Date): Date {
        date.setHours(0, 0, 0);
        let lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        return new Date(dayjs(lastMonthDay).utc(true).toISOString());
    }
    getFirstCalendarMonthDay(date: Date): Date {
        date.setHours(0, 0, 0);
        let firstMonthDay = this.getFirstMonthDay(date);
        let firstCalendarMonthDay = this.getFirstWeekDay(firstMonthDay);
        return new Date(dayjs(firstCalendarMonthDay).utc(true).toISOString());
    }
    getLastCalendarMonthDay(date: Date): Date {
        date.setHours(0, 0, 0);
        let lastMonthDay = this.getLastMonthDay(date);
        let lastCalendarMonthDay = this.getLastWeekDay(lastMonthDay);
        return new Date(dayjs(lastCalendarMonthDay).utc(true).toISOString());
    }

    /**
     * 
     * @returns the date in 2021-12-05 format 
     */
    getDateFromISOString = (date: Date): string => {
        return date.toISOString().split('T')[0];
    }

}

export default DateUtil;