
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome,  FaBook,  FaBookReader } from "react-icons/fa";
import Home from './Components/Home';
import Thrillers from './Components/Thrillers';
import Classics from './Components/Classics';
import Nonfiction from './Components/Nonfiction';
import Romance from './Components/Romance';
import Sciencefiction from './Components/Sciencefiction';
function App() {
  return (
    <div className="App">
   
    <Router>
            <Navbar className="navbar-bg" expand="lg">
                <Navbar.Brand>
                    <h1 className="navbar-brand-text">
                        <Link to="/" className="brand-link">
                        <FaBookReader /> Rupesh Gupta 
                        </Link>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/thrillers" className="nav-link">
                            <FaBook /> Thrillers
                        </Nav.Link>
                        <Nav.Link as={Link} to="/classics" className="nav-link">
                            <FaBook /> Classics
                        </Nav.Link>
                        <Nav.Link as={Link} to="/nonfiction" className="nav-link">
                            <FaBook /> Non Fiction
                        </Nav.Link>
                        <Nav.Link as={Link} to="/romance" className="nav-link">
                            <FaBook /> Romance
                        </Nav.Link>
                        <Nav.Link as={Link} to="/sciencefiction" className="nav-link">
                            <FaBook /> Science Fiction
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="/thrillers" element={<Thrillers />} />
                        <Route path="/classics" element={<Classics />} />
                        <Route path="/nonfiction" element={<Nonfiction />} />
                        <Route path="/romance" element={<Romance />} />
                        <Route path="/sciencefiction" element={<Sciencefiction />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
