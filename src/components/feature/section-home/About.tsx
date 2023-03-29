import {Card, Col, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import AppIcon from "@/components/common/app-icon/AppIcon";
import SubtitleSection from "@/components/common/title-subtitle-sections/SubtitleSection";
import AngularLogo from '../../../../public/logos/angular.png';
import ReactLogo from '../../../../public/logos/react.png';
import JavascriptLogo from '../../../../public/logos/javascript.png';
import TypescriptLogo from '../../../../public/logos/typescript.png';
import NextLogo from '../../../../public/logos/next.svg';
import Image from "next/image";
import ideaProductImg from '../../../../public/idea-products.jpg';
import Link from "next/link";
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";


const About = () => {

    return (
        <section id="about-section-hero" className="container">
            <TitleSection title={'What I Do.'}/>
            <SubtitleSection subtitle={'Experience in developing, testing and debugging web applications and websites'}/>
            <p className="fs-4 text-grey">More info in <Link href={'/about'} className="link">about</Link> page</p>

            <Row className="py-3">
                <Col xs="12" md="6">
                    <Card className="h-100 fs-3 fw-semibold idea-project">
                        <div className="fs-2">Turning ideas into real life <span className="black-highlight">products</span>.</div>
                        <Image src={ideaProductImg} width={300} alt={'idea-into-products-illustration'} className="mt-4 mx-auto"/>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-between gap-3">
                    <Card className="d-flex flex-column">
                        <div className="fs-2 fw-semibold">Modern technologies</div>
                        <div className="d-flex justify-content-center flex-wrap mt-4">
                            <CustomTooltip text="Angular">
                                <AppIcon url={AngularLogo} altLabel={'angular_logo'} width={50}/>
                            </CustomTooltip>
                            <CustomTooltip text="React">
                                <AppIcon url={ReactLogo} altLabel={'react_logo'} width={50}/>
                            </CustomTooltip>
                            <CustomTooltip text="NextJS">
                                <AppIcon url={NextLogo} altLabel={'next_logo'} width={60}/>
                            </CustomTooltip>
                            <CustomTooltip text="JavaScript">
                                <AppIcon url={JavascriptLogo} altLabel={'js_logo'} width={60}/>
                            </CustomTooltip>
                            <CustomTooltip text="TypeScript">
                                <AppIcon url={TypescriptLogo} altLabel={'ts_logo'}/>
                            </CustomTooltip>
                        </div>
                    </Card>
                    <Card className="bg-grey">
                        <div className="fs-2 fw-semibold">Projects</div>
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