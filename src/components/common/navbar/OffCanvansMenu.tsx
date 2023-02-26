import { HTMLAttributes } from "react";
import { Offcanvas } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";

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
            <Offcanvas.Body>
                {/* content inside here */}
            </Offcanvas.Body>
      </Offcanvas>
    )
}

export default OffCanvasMenu;