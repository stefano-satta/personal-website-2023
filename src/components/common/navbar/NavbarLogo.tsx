import Link from "next/link";

const NavbarLogo = () => {
    
    return (
        <Link className="text-reset fw-bold text-decoration-none fs-3"
            href={'/'}
            passHref>
            S.
        </Link>
    )
}

export default NavbarLogo;