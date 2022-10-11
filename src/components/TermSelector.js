const terms = ['Fall', 'Winter', 'Spring']

const TermSelector = ({term, setTerm}) => (
    <div className="btn-group">
    { 
      terms.map(termName => <TermButton key={termName} termName={termName} term={term} setTerm={setTerm} />)
    }
    </div>
);

const TermButton = ({termName, term, setTerm}) => (
    <div>
      <input type="radio" id={termName} className="btn-check" checked={termName === term} autoComplete="off"
        onChange={() => setTerm(termName)} />
      <label className="btn btn-outline-primary mb-1 p-2" htmlFor={termName}>
      { termName }
      </label>
    </div>
  );

export default TermSelector;