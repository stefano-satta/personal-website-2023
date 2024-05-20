import CategoryTitleCard from "@/components/common/cards/CategoryTitleCard";
import SPCard from "@/components/common/cards/ProjectCard";
import TitleCard from "@/components/common/cards/TitleCard";
import {SIDE_PROJECTS} from "@/utility/projects-list";
import Image from "next/image";
import cryptoTemplateImg from '../../../../public/crypto_template.png';
import Website22TemplateImg from '../../../../public/website22_template.png';
import ITongueTemplateImg from '../../../../public/itongue-template.png';
import CarRentalTemplateImg from '../../../../public/car-rental.png';
import MySite23Img from '../../../../public/mysite23.png';
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import { Container } from "react-bootstrap";


const SideProjects = () => {
    const [currentPortfolio, cryptoProject, websiteProject, goRightsProject, iTongueProject] = SIDE_PROJECTS;

    return (
        <Container className="overflow-hidden" as="section" id="side-projects-hero">
            <TitleSection title={'Projects.'}/>
            <p className="fs-4 mb-3">A small list of other projects chosen by me.</p>

            <Swiper
                breakpoints={{
                    320: {slidesPerView: 1, spaceBetween: 60},
                    768: {slidesPerView: 1.5, spaceBetween: 10},
                    992: {slidesPerView: 3.2, spaceBetween: 20}
                }}
                centeredSlides={false}
                pagination={{clickable: true}}
                simulateTouch
                navigation={true}
                modules={[Navigation]}
                id="slider-projects"
            >
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={currentPortfolio}>
                        <CategoryTitleCard categoryTitle={currentPortfolio.category}/>
                        <TitleCard title={currentPortfolio.name} className="gradient-red"/>
                        <Image src={MySite23Img} alt="portfolio_template_project" width={300} priority className="mt-5"/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard infoProject={cryptoProject}>
                        <CategoryTitleCard categoryTitle={cryptoProject.category}/>
                        <TitleCard title={cryptoProject.name}/>
                        <Image src={cryptoTemplateImg} alt="crypto_template_project" width={300} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={websiteProject}>
                        <CategoryTitleCard categoryTitle={websiteProject.category}/>
                        <TitleCard title={websiteProject.name}/>
                        <Image src={Website22TemplateImg} alt="portfolio_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={goRightsProject}>
                        <CategoryTitleCard categoryTitle={goRightsProject.category}/>
                        <TitleCard title={goRightsProject.name}/>
                        <Image src={CarRentalTemplateImg} alt="music_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard infoProject={iTongueProject}>
                        <CategoryTitleCard categoryTitle={iTongueProject.category}/>
                        <TitleCard title={iTongueProject.name}/>
                        <Image src={ITongueTemplateImg} alt="translation_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default SideProjects;