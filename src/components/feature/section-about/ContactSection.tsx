import Blob from "@/components/common/blob/Blob";
import Icon from "@/components/common/icons/Icon";
import Pill from "@/components/common/pills/Pill";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";


const ContactSection = () => {

    return (
        <section className="mt-5 py-5">
            <TitleSection title={'Let\'s Connect'} className="mb-4"/>

            <Link href={`mailto:${myInfo.email}?subject=Project info: New collaboration`}
                passHref
                className="me-3">
                <Pill bgColor="light" textColor="dark" label="New Collaboration" className="fs-4"/>
            </Link>
            <Link href={`mailto:${myInfo.email}?subject=No coding, only pizza and beer!`}
                passHref>
                <Pill bgColor="light" textColor="dark" label="Pizza 🍕" className="fs-4"/>
            </Link>

            <Row>
                <Col xs={12} md={6} className="d-flex flex-column ">
                    <p className="fw-medium my-4 fs-3 text-grey">
                        Are you minding a project together? <br />
                        My inbox is always open. <br />
                        I'll do my best to get back to you soon!
                    </p>
                    <ul className="mt-3 fs-4 ps-0">
                        <li className="list-unstyled mb-2">
                            <Icon icon={'linkedin'} className="me-3"></Icon>
                            <Link href={'https://www.linkedin.com/in/stefano-satta'}
                                  passHref
                                  target="_blank"
                                  className="link text-decoration-none text-wrap">
                                LinkedIn profile
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={'github'} className="me-3"></Icon>
                            <Link href="https://github.com/stefano-satta"
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                GitHub profile
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={'geo-alt-fill'} className="me-3"></Icon>
                            <Link href="https://www.google.com/maps/place/Sardegna/@40.0562185,7.8577047,8z/data=!3m1!4b1!4m5!3m4!1s0x12ddc48d448d3591:0x339674b6e4ab6631!8m2!3d40.1208752!4d9.0128926?hl=it"
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                Sardinia, IT
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={6} className="position-relative">
                    <Link href={`mailto:${myInfo.email}?subject=Project info.`} 
                        passHref 
                        className="text-reset position-absolute top-50 start-50 translate-middle"
                        style={{fontSize: '5rem'}}>
                        <Icon icon={'envelope'}/>
                    </Link>
                    <Blob style={{height: '350px'}}/>
                </Col>
            </Row>
        </section>
    )
}

export default ContactSection;