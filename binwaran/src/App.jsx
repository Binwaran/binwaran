import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";


function App() {
  return (
    <Router> {/* Router ต้องเป็นตัวครอบหลัก */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/article" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
      <Home />
     
    </Router>
  );
}

export default App;
