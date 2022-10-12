import './CourseCard.css';

const CourseCard = ({id, title, name, time, selected, toggleSelected}) => {
    return <div className={`card m-1 p-2 ${selected.includes(id) ? 'selected' : ''}`} onClick={() => toggleSelected(id)}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{name}</p>
        </div>
        <div className={`card-footer ${selected.includes(id) ? 'selected' : ''}`}>{time}</div>
    </div>
}

export default CourseCard;