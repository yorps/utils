

export function formatDate(timestamp: number | string, format?: string): string {
    let d: Date;
    // formatDateTime: function(timestamp, format, utc) {
    let ts = typeof timestamp === 'string' ? parseInt(timestamp) : timestamp;
    if (!ts || ts <= 0)
        return 'invalid';


    d = new Date(ts * 1000);

    if (!format)
        format = 'dd.MM.yyyy hh:mm:ss';

    let result = format;

    if (result.indexOf('dd') > -1)
        result = result.replace('dd', padZero(d.getUTCDate()));
    if (result.indexOf('d') > -1)
        result = result.replace('d', d.getUTCDate().toString());
    if (result.indexOf('MM') > -1)
        result = result.replace('MM', padZero(d.getUTCMonth() + 1));
    if (result.indexOf('M') > -1)
        result = result.replace('M', (d.getUTCMonth() + 1).toString());
    if (result.indexOf('yyyy') > -1)
        result = result.replace('yyyy', d.getUTCFullYear().toString());
    if (result.indexOf('hh') > -1)
        result = result.replace('hh', padZero(d.getUTCHours()));
    if (result.indexOf('h') > -1)
        result = result.replace('h', d.getUTCHours().toString());
    if (result.indexOf('mm') > -1)
        result = result.replace('mm', padZero(d.getUTCMinutes()));
    if (result.indexOf('m') > -1)
        result = result.replace('m', d.getUTCMinutes().toString());
    if (result.indexOf('ss') > -1)
        result = result.replace('ss', padZero(d.getUTCSeconds()));
    if (result.indexOf('s') > -1)
        result = result.replace('s', d.getUTCSeconds().toString());
    return result;
}


function padZero (st: number): string {
    if (st < 10)
        return '0' + st;
    return st.toString();
}


/*
 * Addiert eine anzahl 'months' zum übergebenen Datum und liefert ein Date zurück
 *
 * // https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
 */
export function addMonth(date: Date, months: number): Date {
    let target = new Date(date.getTime());
    let n = date.getDate();
    target.setDate(1);
    target.setMonth(date.getMonth() + months);
    target.setDate(Math.min(n, getDaysInMonth(target)));
    return target;
}

function isLeapYear (year: number): boolean {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}


function getDaysInMonth (date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();
    let days = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days[month] as number;
}

/* Valid = numeric value with less than 12 or with 15 digits
 * 
 */

export function isValidTimestamp(ts: number | string): boolean {
    const newTimestamp = new Date((Number(ts))*1).getTime();
    return isNumeric(newTimestamp) && 
    (newTimestamp <= 9999999999 || 
        (newTimestamp >= 1000000000000 && newTimestamp <= 9999999999999));
}

function isNumeric(n: unknown): n is number {
    return typeof n === 'number' && !isNaN(n) && isFinite(n);
}

/* Parst ein Datum im Format "dd.MM.yyyy HH:mm:ss"
 * Liefert ein Date, wenn die Eingabe gültig ist
 * Liefert null, wenn die Eingabe ungültig ist
 */
export function parseDate(dateString: string): Date | null {

    const regex = /(\d{2}).(\d{2}).(\d{4}) (\d{2}):(\d{2}):(\d{2})/;
    const dateArray = regex.exec(dateString);

    if (dateArray == null) {
        return null;
    }
    //new Date(year, monthIndex [, day [, hour [, minutes [, seconds [, milliseconds]]]]]);
    return new Date(Date.UTC(
            (+(dateArray[3] as string)),
            (+(dateArray[2] as string))-1, // Careful, month starts at 0!
            (+(dateArray[1] as string)),
            (+(dateArray[4] as string)),
            (+(dateArray[5] as string)),
            (+(dateArray[6] as string))
        ));
}
// Date.isLeapYear = function (year) {
//     return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
// };
//
// Date.getDaysInMonth = function (year, month) {
//     return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
// };
//
// Date.prototype.isLeapYear = function () {
//     return Date.isLeapYear(this.getFullYear());
// };
//
// Date.prototype.getDaysInMonth = function () {
//     return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
// };
//
// Date.prototype.addMonths = function (value) {
//     var n = this.getDate();
//     this.setDate(1);
//     this.setMonth(this.getMonth() + value);
//     this.setDate(Math.min(n, this.getDaysInMonth()));
//     return this;
// };