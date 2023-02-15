import {Card, Col, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import AppIcon from "@/components/common/app-icon/AppIcon";
import SubtitleSection from "@/components/common/title-subtitle-sections/SubtitleSection";
import AngularLogo from '../../../../public/logos/angular.png';
import ReactLogo from '../../../../public/logos/react.png';
import JavascriptLogo from '../../../../public/logos/javascript.png';
import TypescriptLogo from '../../../../public/logos/typescript.png';
import NextLogo from '../../../../public/logos/next.svg';

const About = () => {
    return (
        <section id="about-section-hero" className="container">
            <TitleSection title={'What I Do.'}/>
            <SubtitleSection subtitle={'Experience in developing, testing and debugging web applications and websites'}/>

            <Row className="py-3 "style={{height: '29.41176rem'}}>
                <Col xs="12" md="6">
                    <Card className="card-about h-100">
                        <div className="fs-3 fw-semibold">Let's build something together!</div>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-between">
                    <Card style={{height: '47%'}} className="d-flex flex-column">
                        <div className="fs-3 fw-semibold">Modern technologies</div>
                        <div className="d-flex justify-content-center mt-4">
                            <AppIcon url={AngularLogo} altLabel={'angular_logo'} width={50}/>
                            <AppIcon url={ReactLogo} altLabel={'react_logo'} width={50}/>
                            <AppIcon url={NextLogo} altLabel={'next_logo'} width={60}/>
                            <AppIcon url={JavascriptLogo} altLabel={'js_logo'}/>
                            <AppIcon url={TypescriptLogo} altLabel={'ts_logo'}/>
                        </div>
                    </Card>
                    <Card style={{height: '47%'}} className="bg-grey">
                        <div className="fs-3 fw-semibold">Projects</div>
                        <div className="fw-ultra-bold position-absolute text-grey projects-count">
                            +15
                        </div>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default About;