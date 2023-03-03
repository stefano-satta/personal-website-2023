import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import WallTimeSection from "@/components/feature/section-about/WallTimeSection";
import { NextPage } from "next";
import { Container } from "react-bootstrap";


const About: NextPage = () => {
    
    return (
        <Container className="py-5">
            {/* <WallTimeSection/> */}
            <TitleSection title={'What I Do.'} className="mt-5"/>
        </Container>
    )
}

export default About;