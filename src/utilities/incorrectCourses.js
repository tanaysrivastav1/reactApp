export const getIncorrectCourses = (courses, courseid) => Object.keys(courses).filter(course => course !== courseid && courseWrong(courses[courseid], courses[course]))

//compare two course times
const courseWrong = (course1, course2) => {
    const [m1, m2] = [course1.meets, course2.meets]
    if (m1 === "" || m2 == "") {
        return false
    }
    //get the term for courses
    const [term1, term2] = [course1.term, course2.term]

    //get the date for courses
    const [date1, time1] = m1.split(" ");
    const [date2, time2] = m2.split(" ");

    return inSameTerm(term1, term2)
        && onSameDate(date1.split(/(?=[A-Z])/), date2.split(/(?=[A-Z])/)) 
        && atSameTime(time1, time2)
}

const compareTime = (time1, time2) => {
    const [hour1, min1] = time1.split(':').map(x => parseInt(x, 10));
    const [hour2, min2] = time2.split(':').map(x => parseInt(x, 10));
    
    return hour1 > hour2 ? 1 : hour1 < hour2 ? -1 : min1 > min2 ? 1 : min1 < min2 ? -1 : 0
}

const atSameTime = (time1, time2) => {
    const [start1, end1] = time1.split('-');
    const [start2, end2] = time2.split('-');

    return (compareTime(start1, start2) >= 0 && compareTime(start1, end2) <= 0)
    || (compareTime(start2, start1) >= 0 && compareTime(start2, end1) <= 0)
    || (compareTime(start1, start2) >= 0 && compareTime(end1, end2) <= 0)
    || (compareTime(start2, start1) >= 0 && compareTime(end2, end1) <= 0)

}

const onSameDate = (dates1, dates2) => dates1.some(date => dates2.includes(date));
const inSameTerm = (term1, term2) => term1 === term2
