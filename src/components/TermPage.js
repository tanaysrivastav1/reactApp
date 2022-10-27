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

    const closeModal = () => setCoursePlanOpened(false);

    const toggleSelected = (item) => {
        if(selectedCourses.includes(item) || !getIncorrectCourses(courses[item], Object.entries(courses)
            .filter(([id, course]) => selectedCourses.includes(id))
            .map(([id, course]) => course)))
        setselectedCourses(
            selectedCourses.includes(item)
            ? selectedCourses.filter(x => x !== item)
            : [...selectedCourses, item]
        )
    };

    const openCoursePlan = () => setCoursePlanOpened(true);

    return (
        <div>
            <nav className="d-flex">
                <TermSelector className='ms-auto btn' selection={selectedTerm} setSelection={setSelectedTerm}/>
                <button className="ms-auto btn btn-outline-primary" onClick={openCoursePlan}><i className="bi bi-cart4">Course Plan</i></button>
            </nav>
            <Modal open={coursePlanOpened} close={closeModal}>
                <div>
                    {selectedCourses.length > 0 
                    ? selectedCourses.map(selectedCourse => <div>{` CS ${courses[selectedCourse].number} ${courses[selectedCourse].title} ${courses[selectedCourse].meets}`} </div>)
                    : <div>
                        <div>Please select a course to show up on the course plan.</div>
                    </div>
                    }
                </div>
            </Modal>
            <CourseList courses={courses} selection={selectedTerm} selected={selectedCourses} toggleSelected={toggleSelected} incorrectCourses={incorrectCourses}/>
        </div>
    
    )
}

export default TermPage;