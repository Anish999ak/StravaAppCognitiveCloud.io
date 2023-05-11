//@ts-nocheck
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Activities from './Activities';
import CreateActivities from './CreateActivities';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/activities' element={<Activities/>}/>
      <Route path='/createactivities' element={<CreateActivities/>}/>
      </Routes>
    </Router>    
    </>
      
  );
};

export default App;
