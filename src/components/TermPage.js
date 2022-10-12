import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";

const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selectedCourse, setSelectedCourse] = useState([]);

    const toggleSelected = (item) => setSelectedCourse(
        selectedCourse.includes(item)
        ? selectedCourse.filter(x => x !== item)
        : [...selectedCourse, item]
    );

    return (
        <div>
            <TermSelector selection={selectedTerm} setSelection={setSelectedTerm}/>
            <CourseList courses={courses} selection={selectedTerm} selected={selectedCourse} toggleSelected={toggleSelected}/>
        </div>
    
    )
}

export default TermPage;