import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Icon from "@/components/common/icons/Icon";
import { useEffect, useState } from "react";
import OffCanvasMenu from "./OffCanvansMenu";
import NavbarLogo from "./NavbarLogo";
import myInfo from "@/utility/my-info";


const NavBar = () => {
    const [nbScrolledClass, setNbScrolledClass] = useState('');
    const [isShowMenu, setShowMenu] = useState(false);
    const handleCloseMenu = () => setShowMenu(false);
    const handleShowMenu = () => setShowMenu(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setNbScrolledClass('navbar-scrolled bg-black text-white rounded-pill');
            } else if (window.pageYOffset < 50) {
                setNbScrolledClass('');
            }
          });
       
    }, [])

    return (
        <Navbar expand="lg" fixed="top" className="py-3 mx-2">
            <Container className={nbScrolledClass}>
                <NavbarLogo/>
                <button style={{background: 'none', border: 'none'}} 
                    className={`d-sm-block d-lg-none ${nbScrolledClass ? 'text-white': 'text-black'}`} 
                    onClick={handleShowMenu}>
                        <Icon icon={'fa-solid fa-bars'} className="fs-2 cursor-pointer"/>
                </button>
                <OffCanvasMenu isShow={isShowMenu} 
                    closeMenu={handleCloseMenu}
                    className="d-sm-block d-lg-none bg-black text-white w-100"/>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="fs-5 d-none d-lg-inline-flex" 
                        style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                        <Nav.Item className="me-5">
                            <Link className={`link text-uppercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                href={'/'} 
                                passHref>
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="me-5">
                            <Link className={`link text-uppercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                href={'/about'} 
                                passHref>
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={`link text-uppercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                href={'/#contact-hero'} 
                                passHref>
                                Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <div className="d-none d-lg-inline-flex ms-auto">
                        <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                            passHref
                            className="btn btn-black rounded-pill">
                            Hire Me!
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default NavBar;