import React from 'react';
import Link from 'next/link';
import { Col, Row} from "react-bootstrap";
import Icon from "@/components/common/icons/Icon";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import MailClipboard from '@/components/common/mail-contact-clipboard/MailClipboard';


const Contact = () => {

    return (
        <section className="container" id="contact-hero">
            <TitleSection title={'Wanna be <br />starting something <br /> together ?</h2>'}/>
            <Row>
                <Col xs={12} lg={6} className="mb-4">
                    <p className="text-grey my-4 fs-4">
                        Open to new projects. <br/> If you have any question, feel free to contact me.
                    </p>
                    <ul className="mt-5 fs-4 ps-0">
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
                <Col xs={12} lg={6}>
                    <MailClipboard/>
                </Col>
            </Row>
        </section>
    )
}

export default Contact;