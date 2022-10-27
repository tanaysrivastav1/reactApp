import { useFormData } from './useFormData';
import { useNavigate } from 'react-router-dom';

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();

  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate('/')}>Cancel</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const Form = ({values}) => {
  const [state, change] = useFormData(null, values);
  const submit = (evt) => {
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <ButtonBar message={""} />
    </form>
  )
};

export default Form;