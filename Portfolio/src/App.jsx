import Projects from "./data/Projects";
import Projectcard from "./components/Projectcard";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;



function App() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <div className="projects-container">
        {Projects.map((project) => (
          <Projectcard
            key={project.projectname}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default App;