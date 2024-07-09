import Login from "./Components/Login/Login";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
  <div>
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path="/"element={<Home/>}/>
  <Route path="/login"element={<Login/>}/>
  <Route path="/signup"element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
