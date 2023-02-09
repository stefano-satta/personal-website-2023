import {Card, Col, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";

const About = () => {
    return (
        <section id="about-section-hero" className="container">
            <TitleSection title={'What I Do.'}/>
            <p className="fs-4 mb-3 text-grey">
                Experience in developing, testing and
                debugging web applications and websites
            </p>

            <Row className="py-3 "style={{height: '400px'}}>
                <Col xs="12" md="6">
                    <Card className="card-about h-100"></Card>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-between">
                    <Card style={{height: '48%'}}></Card>
                    <Card style={{height: '48%'}}></Card>
                </Col>
            </Row>
        </section>
    )
}

export default About;