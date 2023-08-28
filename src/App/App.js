import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import Login from "../Components/Registration/Login";
import Signup from "../Components/Registration/Signup";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/rooms/" element={<Room/>} />
        <Route exact path="/login/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/rooms/:slug" element={<SingleRoom/>} />
        <Route exact element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
