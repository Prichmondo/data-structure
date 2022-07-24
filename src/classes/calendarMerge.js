"use strict";
const maxRange = ['9:00', '18:30'];
const duration = '0:30';
const calendar1 = [['10:30', '11:30'], ['12:00', '13:00'], ['16:00', '17:00']];
const calendar2 = [['9:00', '11:00'], ['11:30', '12:00'], ['15:00', '16:30']];
function getMeetingTimeString(minutes) {
    const hour = minutes / 60;
    const strHour = `${Math.floor(hour)}`;
    const strMinutes = `${(hour % 1) * 60}`;
    return `${strHour}:${strMinutes.length > 1 ? strMinutes : `0${strMinutes}`}`;
}
function getTime(time) {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    return { hours, minutes };
}
function getMinutes(time) {
    const meetingTime = getTime(time);
    return meetingTime.hours * 60 + meetingTime.minutes;
}
const mergeCalendars = (calendar1, calendar2) => {
    if (calendar1.length === 0 && calendar2.length === 0) {
        return [];
    }
    let response = [];
    const calendars = [...calendar1, ...calendar2].sort((a, b) => {
        if (getMinutes(a[0]) > getMinutes(b[0]))
            return 1;
        if (getMinutes(a[0]) < getMinutes(b[0]))
            return -1;
        return 0;
    });
    let startMeeting = calendars[0];
    let currentMeeting;
    let index = 1;
    while (index < calendars.length) {
        currentMeeting = calendars[index];
        const startMeetingEnd = getMinutes(startMeeting[1]);
        const currentMeetingStart = getMinutes(currentMeeting[0]);
        const currentMeetingEnd = getMinutes(currentMeeting[1]);
        if (startMeetingEnd <= currentMeetingEnd) {
            if (startMeetingEnd >= currentMeetingStart) {
                startMeeting = [startMeeting[0], currentMeeting[1]];
            }
            else {
                response.push([...startMeeting]);
                startMeeting = currentMeeting;
            }
        }
        index += 1;
        if (index >= calendars.length) {
            response.push([...startMeeting]);
        }
    }
    console.log(calendars);
    console.log(response);
    return response;
};
const findMeetingSlots = (calendar1, calendar2) => {
    const mergedCalendars = [[maxRange[0], maxRange[0]], ...mergeCalendars(calendar1, calendar2), [maxRange[1], maxRange[1]]];
    let durationMinutes = getMinutes(duration);
    const result = [];
    for (let i = 0; i < mergedCalendars.length; i++) {
        const currentMeeting = mergedCalendars[i];
        const nextMeeting = mergedCalendars[i + 1];
        if (!nextMeeting) {
            break;
        }
        if (getMinutes(nextMeeting[0]) - getMinutes(currentMeeting[1]) >= durationMinutes) {
            result.push([currentMeeting[1], nextMeeting[0]]);
        }
    }
    return result;
};
console.log('response', findMeetingSlots(calendar1, calendar2));
