import useCurrentDate from "@/hooks/useCurrentDate";
import SocialContacts from "../navbar/SocialContacts";
import myInfo from "@/utility/my-info";


const Footer = () => {
    const {getCurrentYear} = useCurrentDate();

    return (
        <footer className="footer d-flex flex-column justify-content-center align-items-center py-4 mt-auto bg-dark text-white">
            <SocialContacts className="justify-content-center" socialColorLink="social-link-white"/>
            <p className="m-0 mt-3 text-center">Latest update {myInfo.latestUpdate}</p>
            <p className="m-0">&copy; {getCurrentYear()} Stefano Satta</p>
        </footer>
    )
}

export default Footer;