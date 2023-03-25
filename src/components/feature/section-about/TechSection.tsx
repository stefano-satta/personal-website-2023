import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";


const TechSection = () => {

    return (
        <Row className="py-5" id="tech-section" as="section">
            <Col xs={12} md={6} className="fs-3">
                <p className="mb-4">
                    Hi! My name is Stefano and I am <span className="fw-semibold">front-end developer</span> with over six years of experience
                    in building scalable web applications.
                </p>
                <p className="mb-4">
                    I have experience in developing, testing and debugging web applications and websites.
                </p>
                <p className="mb-4">
                    I have participated in a number of intense tech projects(private and public administration) where I acquired 
                    technical and soft skills.
                </p>
                <p>
                    I like to learn and I have also acquired high level programming skills from online courses on Udemy.
                </p>
                <p>
                    Here are modern technologies I’ve been working with recently:
                </p>
                <ul className="tech-list ps-0">
                    <li>ReactJS</li>
                    <li>Angular 2+</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>NextJS</li>
                    <li>NodeJs</li>
                    <li>SASS</li>
                    <li>Git</li>
                </ul>
                <p>
                    For more information visit my
                    <Link href={myInfo.linkedin} 
                        passHref 
                        className="ms-2 text-black text-decoration-none link">
                            Linkedin Profile
                    </Link>
                </p>
            </Col>
            <Col xs={12} md={6}></Col>
        </Row>
    )
}

export default TechSection;