import Image from "next/image";
import Link from "next/link";
import { Col, Row, Card, Carousel } from "react-bootstrap";
import InstagramLogo from '../../../../public/logos/instagram.svg';
import FirstSlideImg from '../../../../public/pferro-surf.jpg';
import SecondSlideImg from '../../../../public/skate.jpg';
import ThirdSlideImg from '../../../../public/speranza-beach.jpg';

const MyMediaSection = () => {
    
    return (
        <Row id="media-section" as="section" className="py-5">
            <Col xs={12} md={6}>
                <div className="">
                    <iframe style={{borderRadius: '18px'}} 
                        src="https://open.spotify.com/embed/playlist/5tNNSY5IXYKlOhDDYE7tTR?utm_source=generator&theme=0" 
                        width="100%" 
                        height="352" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"/>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <Card className="position-relative text-reset text-black p-0" style={{height: '352px'}}>
                    <Link href={'https://www.instagram.com/_stefanosatta'} target={'_blank'}>
                        <Image src={InstagramLogo} className="position-absolute" style={{ top: '24px', right: '24px', zIndex: 20}} width={60} alt={'instagram-logo'}/>
                    </Link>
                    
                    <Carousel.Caption className="fs-2 fw-bold" style={{ zIndex: 20}}>My other passion</Carousel.Caption>
                    <Carousel controls={false} indicators={false} touch fade>
                        <Carousel.Item interval={2000}>
                            <Image src={FirstSlideImg} alt={'slide-photo-surf'} fill/>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image src={SecondSlideImg} alt={'slide-photo-skate'} fill/>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image src={ThirdSlideImg} alt={'slide-photo-beach'} fill/>
                        </Carousel.Item>
                    </Carousel> 
                </Card>
            </Col>
        </Row>
    )
}

export default MyMediaSection;