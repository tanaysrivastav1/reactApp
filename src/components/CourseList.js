import CourseCard from './CourseCard';
import './CourseList.css'

const courseList  = ({courses}) => {
    let courseKeys = Object.keys(courses);
    return <div className="course-list"> 
        {courseKeys.map((key, i) =>  
            <CourseCard key = {i}
            title={`${courses[key].term} CS ${courses[key].number}`}
                        name={courses[key].title}
                        time={courses[key].meets}
            />
        )} 
    </div>
}

export default courseList;