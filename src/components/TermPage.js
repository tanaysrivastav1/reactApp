import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Modal from './Modal';
import { useState } from "react";

const TermPage = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selectedCourses, setselectedCourses] = useState([]);
    const [coursePlanOpened, setCoursePlanOpened] = useState(false);

    const toggleSelected = (item) => setselectedCourses(
        selectedCourses.includes(item)
        ? selectedCourses.filter(x => x !== item)
        : [...selectedCourses, item]
    );

    const openCoursePlan = () => setCoursePlanOpened(true);
    const closeCoursePlan = () => setCoursePlanOpened(false);

    return (
        <div>
            <nav className="d-flex">
                <TermSelector className='ms-auto btn' selection={selectedTerm} setSelection={setSelectedTerm}/>
                <button className="ms-auto btn btn-outline-dark" onClick={openCoursePlan}><i className="bi bi-cart4">Course Plan</i></button>
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
            <CourseList courses={courses} selection={selectedTerm} selected={selectedCourses} toggleSelected={toggleSelected}/>
        </div>
    
    )
}

export default TermPage;