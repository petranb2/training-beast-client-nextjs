export interface DateUtilInterface {
    getFirstWeekDay(date: Date): Date
    getLastWeekDay(date: Date): Date
    getFirstMonthDay(date: Date): Date
    getLastMonthDay(date: Date): Date
    getFirstCalendarMonthDay(date: Date): Date
    getLastCalendarMonthDay(date: Date): Date
    getDateFromISOString(date: Date): string
}
