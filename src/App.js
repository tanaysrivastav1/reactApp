import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import TermPage from './components/TermPage';
import CourseList from './components/CourseList';
import FormPage from './components/FormPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import {useDbData} from './utilities/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = () => {
  //const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [schedule, error] = useDbData('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (schedule === undefined) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;
  return (
    <div>
      <Banner title={schedule.title} />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TermPage courses={schedule.courses}></TermPage>}/>
        <Route path='/courses/:id' element={<FormPage courses={schedule.courses}></FormPage>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
  }

const queryClient = new QueryClient();

  const App = () => {
    return <QueryClientProvider client={queryClient}>
      <div className="container">
        <Main />
      </div>
    </QueryClientProvider>
  };

export default App;