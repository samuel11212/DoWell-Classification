import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserInputs from '../UserInputs/UserInputs';
import ClassificationType from "../ClassificationTypes/ClassificationType";

function Home() {

  return (
   
    <div className='home'>
      <Router>
      <div className="pages">
        <Routes>
          <Route path="/"  element={<UserInputs />} />
          <Route path="/ClassificationType" exact element={<ClassificationType />} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}

export default Home;
