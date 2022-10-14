import CourseCard from './CourseCard';
import './CourseList.css'

const CourseList = ({courses, selection, selected, toggleSelected}) => {
    let courseKeys = Object.keys(courses);
    return <div className="course-list"> 
        {courseKeys.map((id, i) => 
            selection === courses[id].term &&
            <CourseCard key = {i}
                        id = {id}
                        title={`${courses[id].term} CS ${courses[id].number}`}
                        name={courses[id].title}
                        time={courses[id].meets}
                        selection={selection} 
                        selected={selected}
                        toggleSelected={toggleSelected}
            />
        )} 
    </div>
}

export default CourseList;