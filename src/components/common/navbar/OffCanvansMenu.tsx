import Link from "next/link";
import { HTMLAttributes } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import SocialContacts from "./SocialContacts";

interface OffCanvasMenuProps extends HTMLAttributes<HTMLDivElement> {
    isShow: boolean;
    closeMenu: () => void;
    size?: 'sm' | 'md' | 'lg';
    placement?: 'start' | 'end' | 'top' | 'bottom';
}


const OffCanvasMenu = (props: OffCanvasMenuProps) => {
    const {isShow, closeMenu, size = '', placement = 'end', className} = props;

    return (
        <Offcanvas show={isShow} onHide={closeMenu} responsive={size} placement={placement} className={className}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <NavbarLogo/>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="h-75">
                <Nav className="justify-content-around align-items-center mx-auto h-50 fs-5">
                    <Nav.Item className="">
                        <Link className={`link`} 
                            href={'/'} 
                            passHref
                            onClick={closeMenu}>
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="">
                        <Link className={`link`} 
                            href={'/'} 
                            passHref
                            onClick={closeMenu}>
                            About
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={`link`} 
                            href={'#contact-hero'} 
                            passHref
                            onClick={closeMenu}>
                            Contact
                        </Link>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
            <SocialContacts className="justify-content-center py-5"/>
      </Offcanvas>
    )
}

export default OffCanvasMenu;