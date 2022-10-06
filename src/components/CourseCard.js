import './CourseCard.css';

const CourseCard = ({title, name, time}) => {
    return <div className="card m-1 p-2">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{name}</p>
        </div>
        <div className="card-footer">{time}</div>
    </div>
}

export default CourseCard;