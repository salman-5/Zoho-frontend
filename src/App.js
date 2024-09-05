import Contacts from "./Components/Contacts";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="h-screen bg-pink-200">
        <Router>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
