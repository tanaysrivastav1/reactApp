import './CourseCard.css';
import { Link } from "react-router-dom";

const CourseCard = ({id, title, name, time, selected, toggleSelected, incorrectCourses}) => {
    return <div className={`card m-1 p-2 ${selected.includes(id) ? 'selected' : ''} ${incorrectCourses.includes(id) ? 'incorrect' : ''}`} onClick={() => toggleSelected(id)}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{name}</p>
            <p><Link to={`/courses/${id}`}>Edit Course</Link></p>
        </div>
        <div className={`card-footer ${selected.includes(id) ? 'selected' : ''} ${incorrectCourses.includes(id) ? 'incorrect' : ''}`}>{time}</div>
    </div>
}

export default CourseCard;