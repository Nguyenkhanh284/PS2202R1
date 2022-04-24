class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get getDay() {
        return this.day;
    }
    get getMonth() {
        return this.month;
    }
    get getYear() {
        return this.year;
    }
    setDay(day) {
        this.day = day;
    }
    setMonth(month) {
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    toString() {
        var s = "";
        s = s + this.day + '/' + this.month + '/' + this.year;
        return s;
    }
}
let date = new MyDate(2, 2, 2007);
let day = date.getDay;
let month = date.getMonth;
let year = date.getYear;
console.log(day + "/" + month + "/" + year);
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
console.log(date.setDay(10, 10, 2019));
console.log(date.toString());