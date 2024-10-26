import TitleFirstHero from "@/components/common/title-subtitle-sections/TitleFirstHero";
import SocialContacts from "@/components/common/navbar/SocialContacts";
import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Container } from "react-bootstrap";


const FirstHero = () => {

    return (
        <Container as="section" id="first-hello-hero" className="text-center">
            <TitleFirstHero/>
            <p className="fs-3 mt-5">
                Hi! I’m <strong className="text-black">Stefano Satta</strong>. <br/>
                I am a passionate <strong className="text-black">front-end developer</strong> based in Italy. <br/>
                Focused on building responsive front-end web applications with <br/>
                modern technologies.
            </p>
            <SocialContacts className="mt-4 d-none d-lg-flex" socialColorLink="social-link-black"/>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                passHref
                className="btn btn-black d-lg-none mt-4 rounded-pill">
                Hire Me!
            </Link>
        </Container>
    )
}

export default FirstHero;