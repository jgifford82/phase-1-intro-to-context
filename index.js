// Your code here
function createEmployeeRecord(employee) {
    return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

// createEmployeeRecord(["Jen", "Gifford", "wizard", 50], ["moe", "sizlak", "barkeep", 2], ["bartholomew", "simpson", "scamp", 3]);

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
    // console.log('event', event)
    // console.log('date', date)
    // let [date, hour] = event.split(" ");
    // console.log("this", this)
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    // employee.timeInEvents = [...employee.timeInEvents, eventObj]

    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    // employee.timeOutEvents = [...employee.timeOutEvents, eventObj]

    this.timeOutEvents.push(eventObj)
    return this 
}

// function createEmployeeRecords(employeeRecord) {
//     // let employeeRecords = [array1][array2]
//     return employeeRecord[0][0];
//     return employeeRecord[1][0];
// }