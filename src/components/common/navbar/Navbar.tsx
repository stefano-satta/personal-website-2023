import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Icon from "@/components/common/icons/Icon";
import myInfo from "@/utility/my-info";

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                {/* <Navbar.Brand href="/">S.</Navbar.Brand> */}
                <Link className="text-reset fw-bold text-decoration-none fs-3"
                      href={'/'}
                      passHref>
                    S.
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Item>
                            <Link className="nav-link" href={'/'} passHref>
                                Home
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <div className="d-flex">
                        <Link href={`mailto:${myInfo.email}?subject=Project info. Let's talk!`} passHref className="text-reset fs-4 me-2">
                            <Icon icon={'envelope-fill'}/>
                        </Link>
                        <Link href={myInfo.linkedin} passHref target="_blank" className="text-reset fs-4 me-2">
                            <Icon icon={'linkedin'}/>
                        </Link>
                        <Link href={myInfo.github} passHref target="_blank" className="text-reset fs-4">
                            <Icon icon={'github'}/>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default NavBar;