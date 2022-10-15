import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Modal from './Modal';
import { useState } from "react";
import './TermPage.css';
import {getIncorrectCourses} from "../utilities/incorrectCourses";

const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selectedCourses, setselectedCourses] = useState([]);
    const [coursePlanOpened, setCoursePlanOpened] = useState(false);
    const [incorrectCourses, setincorrectCourses] = useState([])

    const toggleSelected = (item) => {

        if (!incorrectCourses.includes(item)) {
            setselectedCourses(selectedCourses.includes(item) ?
            selectedCourses.filter(n => n !== item)
            : [...selectedCourses, item]);

    let incorrect = getIncorrectCourses(courses, item);
    setincorrectCourses(
        selectedCourses.includes(item)
        ? incorrectCourses.filter(course => !incorrect.includes(course))
        : incorrectCourses.concat(incorrect)
    )

}
    }

    const openCoursePlan = () => setCoursePlanOpened(true);
    const closeCoursePlan = () => setCoursePlanOpened(false);

    return (
        <div>
            <nav className="d-flex">
                <TermSelector className='ms-auto btn' selection={selectedTerm} setSelection={setSelectedTerm}/>
                <button className="ms-auto btn btn-outline-primary" onClick={openCoursePlan}><i className="bi bi-cart4">Course Plan</i></button>
            </nav>
            <Modal open={coursePlanOpened} close={closeCoursePlan}>
                <div>
                    {selectedCourses.length > 0 
                    ? selectedCourses.map(selectedCourse => <div>{` CS ${courses[selectedCourse].number} ${courses[selectedCourse].title} ${courses[selectedCourse].meets}`} </div>)
                    : <div>
                        <div>No course is selected.</div>
                        <div>Clicking on a course card to select the course.</div>
                    </div>
                    }
                </div>
            </Modal>
            <CourseList courses={courses} selection={selectedTerm} selected={selectedCourses} toggleSelected={toggleSelected} incorrectCourses={incorrectCourses}/>
        </div>
    
    )
}

export default TermPage;