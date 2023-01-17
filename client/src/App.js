import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './views/Student';
import StudentForm from './views/StudentForm';
import StudentEdit from './views/StudentEdit';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add-student" element={<StudentForm/>} />
          <Route path='/edit-student/:id' element={<StudentEdit/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
