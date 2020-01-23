

export function formatDate(timestamp, format) {
    let d;
    // formatDateTime: function(timestamp, format, utc) {
    timestamp = parseInt(timestamp);
    if (!timestamp || timestamp <= 0)
        return 'invalid';


    d = new Date(timestamp * 1000);

    if (!format)
        format = 'dd.MM.yyyy hh:mm:ss';

    if (format.indexOf('dd') > -1)
        format = format.replace('dd', padZero(d.getUTCDate()));
    if (format.indexOf('d') > -1)
        format = format.replace('d', d.getUTCDate());
    if (format.indexOf('MM') > -1)
        format = format.replace('MM', padZero(d.getUTCMonth() + 1));
    if (format.indexOf('M') > -1)
        format = format.replace('M', d.getUTCMonth() + 1);
    if (format.indexOf('yyyy') > -1)
        format = format.replace('yyyy', d.getUTCFullYear());
    if (format.indexOf('hh') > -1)
        format = format.replace('hh', padZero(d.getUTCHours()));
    if (format.indexOf('h') > -1)
        format = format.replace('h', d.getUTCHours());
    if (format.indexOf('mm') > -1)
        format = format.replace('mm', padZero(d.getUTCMinutes()));
    if (format.indexOf('m') > -1)
        format = format.replace('m', d.getUTCMinutes());
    if (format.indexOf('ss') > -1)
        format = format.replace('ss', padZero(d.getUTCSeconds()));
    if (format.indexOf('s') > -1)
        format = format.replace('s', d.getUTCSeconds());
    return format;
}


function padZero (st) {
    if (st < 10)
        return '0' + st;
    return st;
}


/*
 * Addiert eine anzahl 'months' zum übergebenen Datum und liefert ein Date zurück
 *
 * // https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
 */
export function addMonth(date, months) {
    let target = new Date(date.getTime());
    let n = date.getDate();
    target.setDate(1);
    target.setMonth(date.getMonth() + months);
    target.setDate(Math.min(n, getDaysInMonth(target)));
    return target;
}

function isLeapYear (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}


function getDaysInMonth (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    let days = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days[month];
}


export function isValidTimestamp(ts) {
    const newTimestamp = new Date(ts*1).getTime();
    return isNumeric(newTimestamp) && newTimestamp <= 999999999999;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/* Parst ein Datum im Format "dd.MM.yyyy HH:mm:ss"
 * Liefert ein Date, wenn die Eingabe gültig ist
 * Liefert null, wenn die Eingabe ungültig ist
 */
export function parseDate(dateString) {
    console.debug("parse " + dateString);

    const regex = /(\d{2}).(\d{2}).(\d{4}) (\d{2}):(\d{2}):(\d{2})/;
    const dateArray = regex.exec(dateString);

    if (dateArray == null) {
        console.debug("UNGÜLTIG");
        return null;
    }
    //new Date(year, monthIndex [, day [, hour [, minutes [, seconds [, milliseconds]]]]]);
    return new Date(Date.UTC(
            (+dateArray[3]),
            (+dateArray[2])-1, // Careful, month starts at 0!
            (+dateArray[1]),
            (+dateArray[4]),
            (+dateArray[5]),
            (+dateArray[6])
        ));

    // var dateString = "2010-08-09 01:02:03";
    //     // var regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    //     // var dateArray = regex.exec(dateString);
    //     // console.debug(dateArray);
    //     // // return new Date(
    //     // //     (+dateArray[1]),
    //     // //     (+dateArray[2])-1, // Careful, month starts at 0!
    //     // //     (+dateArray[3]),
    //     // //     (+dateArray[4]),
    //     // //     (+dateArray[5]),
    //     // //     (+dateArray[6])
    //     // // );
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