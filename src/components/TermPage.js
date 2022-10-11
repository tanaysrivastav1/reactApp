import { useState } from "react";
import TermSelector from './TermSelector';
import CourseList from "./CourseList";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState('Fall');

    return (
        <>
            <TermSelector term={term} setTerm={setTerm}/>
            <CourseList term={term} courses={courses}/>
        </>
    );
}

export default TermPage;