import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import {
  Routes,
  Route,
  Link,
  useLocation, useNavigate
} from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LogoutUser } from './components/api/Authentication';
import Home from './components/Home';
import Orders from './components/orders';
import Products from './components/Products';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  if(!localStorage.getItem('authUser')){
    return navigate('/home');
  }

  return (
    <div className="App">
      <Navbar variant="dark" className="Navtop">
        <Container>
          <Navbar.Brand as={Link} to="/">Warehouse</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {localStorage.getItem('authUser') ? (
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">products</Nav.Link>
              <Nav.Link as={Link} to="/orders">orders</Nav.Link>
              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">About me</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="" onClick={LogoutUser}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );

}

export default App;
