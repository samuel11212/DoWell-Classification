/*
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import ClassificationType from "./Components/ClassificationTypes/ClassificationType";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Home />
        <div className="pages">
          <Routes>
        <Route path="/about" element={<ClassificationType />} />
        </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
*/



import './App.css';
import Home from './Components/Home/Home';
function App() {
  return (
     <div className="App">
      <Home/>
    </div>
  );
}
export default App;

