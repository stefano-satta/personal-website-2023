import Blob from "@/components/common/blob/Blob";
import Icon from "@/components/common/icons/Icon";
import SocialContacts from "@/components/common/navbar/SocialContacts";
import Pill from "@/components/common/pills/Pill";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";


const ContactSection = () => {

    return (
        <section className="mt-5 py-5">
            <TitleSection title={'Let\'s <br/> Connect'} className="mb-5"/>

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
                <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                    <p className="fw-medium my-4 fs-3">
                        Are you minding a project together? <br />
                        Let me Know!
                    </p>
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