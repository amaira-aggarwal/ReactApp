import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flowers from "./components/Flowers";
import SignUp from "./components/SignUp";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Project" aboutText="About" />
        <div
          className="container my-3"
          style={{
            padding: "20px",
            margin: "0 ",
            maxWidth: "2000px",
            maxHeight: "500px",
          }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Jumbotron />} />

            <Route path="/flowers" element={<Flowers />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
