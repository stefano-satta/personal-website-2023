import Link from "next/link";
import { HTMLAttributes } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import SocialContacts from "./SocialContacts";
import useCurrentDate from "@/hooks/useCurrentDate";

interface OffCanvasMenuProps extends HTMLAttributes<HTMLDivElement> {
    isShow: boolean;
    closeMenu: () => void;
    size?: 'sm' | 'md' | 'lg';
    placement?: 'start' | 'end' | 'top' | 'bottom';
}


const OffCanvasMenu = (props: OffCanvasMenuProps) => {
    const {isShow, closeMenu, size = '', placement = 'end', className} = props;
    const {getCurrentYear} = useCurrentDate();

    return (
        <Offcanvas show={isShow} onHide={closeMenu} responsive={size} placement={placement} className={className}>
            <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title>
                    <NavbarLogo/>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="h-75">
                <Nav className="justify-content-center align-items-center h-100 mx-auto fs-5">
                    <Nav.Item className="">
                        <Link className={`link fw-semibold`}
                              href={'/'}
                              passHref
                              onClick={closeMenu}>
                            HOME
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="">
                        <Link className={`link fw-semibold`}
                              href={'/about'}
                              passHref
                              onClick={closeMenu}>
                            ABOUT
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={`link fw-semibold`}
                              href={'/#contact-hero'}
                              passHref
                              onClick={closeMenu}>
                            CONTACT
                        </Link>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
            <SocialContacts className="justify-content-center" socialColorLink="social-link-white"/>
            <p className="m-0 my-3 text-center">&copy; {getCurrentYear()} Stefano Satta</p>
        </Offcanvas>
    )
}

export default OffCanvasMenu;