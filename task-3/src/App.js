import "./App.css";
import { BrowserRouter as Router, Route, Routes,useNavigate, Link } from "react-router-dom";

function Home() {
    const navigate =useNavigate();
  
  return (
    <div>
      <p>Hello this is Home!</p>
      <button className="btns" onClick={()=>navigate("/about")}>About</button>
      <button className="btns"onClick={()=>navigate("/contact")}>conatact</button>
      <button className="btns"onClick={()=>navigate("/userprofile")}>userprofile</button>
    </div>
  );
}

function About() {
  return <p>This is about page</p>;
}

function Contact() {
  return <p>contact us in @gmail.com</p>;
}

function UserProfile() {
  return <p>This is userprofile page</p>;
}

const NotFound = () => {
  return <h1>opps!page not found ,check your network.</h1>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/" style={{ color: "blue" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Me</Link>
          <Link to="/userprofile">UserProfile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
