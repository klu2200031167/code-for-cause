import './App.css';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Student from './Components/Student';
import AddFaculty from './Components/AddFaculty';
import DeleteFaculty from './Components/DeleteFaculty';
import ViewFaculty from './Components/ViewFaculty';
import UpdateFaculty from './Components/UpdateFaculty';
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path="courses" element={<Courses/>}/>
<Route path="faculty" element={<Faculty/>}>
  <Route path="addFaculty"element={<AddFaculty/>}/>
  <Route path="viewFaculty"element={<ViewFaculty/>}/>
  <Route path="updateFaculty"element={<UpdateFaculty/>}/>
  <Route path="deleteFaculty"element={<DeleteFaculty/>}/>
  </Route>
  <Route path="profile"element={<Profile/>}>Profile</Route>
  <Route path="student" element={<Student/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
