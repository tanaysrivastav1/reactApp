const courseList  = ({courses}) => {
    let keys = Object.keys(courses)
    return <div> {keys.map(key => <div> {courses[key].term} CS {courses[key].number}: {courses[key].title}</div>)} 
    </div>

}

export default courseList;