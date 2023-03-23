import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import MyMediaSection from "@/components/feature/section-about/MyMediaSection";
import TechSection from "@/components/feature/section-about/TechSection";
import WallTimeSection from "@/components/feature/section-about/WallTimeSection";
import { NextPage } from "next";
import { Container } from "react-bootstrap";


const About: NextPage = () => {

    return (
        <Container className="py-5">
            <WallTimeSection/>
            <TitleSection title={'Nice to meet <br/> you too'} className="fs-title-mega mt-5"/>
            <TechSection/>
            <MyMediaSection/>
            
        </Container>
    )
}

export default About;