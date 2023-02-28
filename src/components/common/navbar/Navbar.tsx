import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Icon from "@/components/common/icons/Icon";
import { useEffect, useState } from "react";
import OffCanvasMenu from "./OffCanvansMenu";
import NavbarLogo from "./NavbarLogo";
import SocialContacts from "./SocialContacts";


const NavBar = () => {
    const [nbScrolledClass, setNbScrolledClass] = useState('');
    const [isShowMenu, setShowMenu] = useState(false);
    const handleCloseMenu = () => setShowMenu(false);
    const handleShowMenu = () => setShowMenu(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setNbScrolledClass('navbar-scrolled bg-black text-white');
            } else if (window.pageYOffset < 50) {
                setNbScrolledClass('');
            }
          });
       
    }, [])

    return (
        <Navbar expand="lg" fixed="top" className="py-3">
            <Container className={nbScrolledClass}>
                <NavbarLogo/>
                <button style={{background: 'none', border: 'none'}} 
                    className={`d-sm-block d-lg-none ${nbScrolledClass ? 'text-white': 'text-black'}`} 
                    onClick={handleShowMenu}>
                        <Icon icon={'list'} className="fs-2 cursor-pointer"/>
                </button>
                <OffCanvasMenu isShow={isShowMenu} 
                    closeMenu={handleCloseMenu}
                    className="d-sm-block d-lg-none"/>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fs-5 d-none d-lg-inline-flex">
                        <Nav.Item className="me-5">
                            <Link className={`link ${nbScrolledClass ? 'text-white' : 'text-black'}`} 
                                href={'/'} 
                                passHref>
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="me-5">
                            <Link className={`link ${nbScrolledClass ? 'text-white' : 'text-black'}`} 
                                href={'/'} 
                                passHref>
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={`link ${nbScrolledClass ? 'text-white' : 'text-black'}`} 
                                href={'#contact-hero'} 
                                passHref>
                                Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                    <SocialContacts/>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default NavBar;