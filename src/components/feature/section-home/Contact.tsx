import React from 'react';
import Link from 'next/link';
import { Col, Container, Row} from "react-bootstrap";
import Icon from "@/components/common/icons/Icon";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import MailClipboard from '@/components/common/mail-contact-clipboard/MailClipboard';
import myInfo from '@/utility/my-info';


const Contact = () => {

    return (
        <Container id="contact-hero" as="section">
            <TitleSection title={'Wanna be <br />starting something <br /> together ?</h2>'}/>
            <Row>
                <Col xs={12} lg={6} className="mb-4">
                    <p className="text-grey my-4 fs-4">
                        Open to new projects. <br/> If you have any question, feel free to contact me.
                    </p>
                    <ul className="mt-5 fs-4 ps-0">
                        <li className="list-unstyled mb-2">
                            <Icon icon={'linkedin'} className="me-3"></Icon>
                            <Link href={myInfo.linkedin}
                                  passHref
                                  target="_blank"
                                  className="link text-decoration-none text-wrap">
                                LinkedIn profile
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={'github'} className="me-3"></Icon>
                            <Link href={myInfo.github}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                GitHub profile
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={'file-text-fill'} className="me-3"></Icon>
                            <Link href={myInfo.notionCV}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                Notion CV
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} lg={6}>
                    <MailClipboard/>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;