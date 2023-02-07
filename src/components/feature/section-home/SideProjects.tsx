import CategoryTitleCard from "@/components/common/cards/CategoryTitleCard";
import SPCard from "@/components/common/cards/ProjectCard";
import TitleCard from "@/components/common/cards/TitleCard";
import {SIDE_PROJECTS} from "@/utility/projects-list";
import Image from "next/image";
import cryptoTemplateImg from '../../../../public/crypto_template.png';
import Webisite22TemplateImg from '../../../../public/website22_template.png';
import ITongueTemplateImg from '../../../../public/itongue-template.png';
import GoRightsTemplateImg from '../../../../public/gorights-template.png';

const SideProjects = () => {
    const [cryptoProject, websiteProject, goRightsProject, iTongueProject] = SIDE_PROJECTS;

    return (
        <section className="overflow-hidden container" id="side-projects-hero">
            <h2 className="fs-title-section fw-ultra-bold mb-3">Projects.</h2>
            <p className="fs-4 mb-3 text-grey">A small list of other projects chosen by me.</p>

            <div id="side-projects-container" className="d-flex flex-nowrap py-3 px-1 mt-5">
                <SPCard infoProject={cryptoProject}>
                    <CategoryTitleCard categoryTitle={cryptoProject.category}/>
                    <TitleCard title={cryptoProject.name}/>
                    <Image src={cryptoTemplateImg} alt="crypto_template_project" width={300} priority/>
                </SPCard>
                <SPCard className="bg-black text-white" infoProject={websiteProject}>
                    <CategoryTitleCard categoryTitle={websiteProject.category}/>
                    <TitleCard title={websiteProject.name}/>
                    <Image src={Webisite22TemplateImg} alt="crypto_template_project" width={320} priority/>
                </SPCard>
                <SPCard className="bg-black text-white" infoProject={goRightsProject}>
                    <CategoryTitleCard categoryTitle={goRightsProject.category}/>
                    <TitleCard title={goRightsProject.name}/>
                    <Image src={GoRightsTemplateImg} alt="crypto_template_project" width={320} priority/>
                </SPCard>
                <SPCard infoProject={iTongueProject}>
                    <CategoryTitleCard categoryTitle={iTongueProject.category}/>
                    <TitleCard title={iTongueProject.name}/>
                    <Image src={ITongueTemplateImg} alt="crypto_template_project" width={320} priority/>
                </SPCard>
            </div>

        </section>
    )
}

export default SideProjects;