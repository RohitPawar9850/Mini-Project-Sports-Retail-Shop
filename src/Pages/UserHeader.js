import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/Login", { replace: true });
  };

  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav.Link
            as={Link}
            to="/userhome"
            style={{ fontSize: "20px", color: "red", fontSize: "30px" }}
          >
            Sports Spot
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/UserHome"}>
                Home
              </Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Cricket">Cricket</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Football</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Basketball
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Sports Wear
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Men's Wear
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Women's Wear
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Cycling</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserHeader;
