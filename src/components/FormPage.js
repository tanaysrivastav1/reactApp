import Form from "./form";
import { useParams } from "react-router-dom";

const FormPage = ({courses}) => {
    const params = useParams();

    return <Form values={courses[params.id]}></Form>;
};

export default FormPage;