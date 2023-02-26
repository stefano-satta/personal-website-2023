import TitleFirstHero from "@/components/common/title-subtitle-sections/TitleFirstHero";
import Link from "next/link";
import myInfo from "@/utility/my-info";

const FirstHero = () => {

    return (
        <section id="first-hello-hero" className="container text-center">
            <TitleFirstHero/>
            <p className="text-grey fs-3 mt-5">
                Hi! I’m <span className="text-black fw-bold">Stefano Satta</span>. <br/>
                I am a passionate <span className="text-black fw-bold">front-end developer</span> based in Italy. <br/>
                Focused on building responsive front-end web applications with <br/>
                modern technologies.
            </p>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                  passHref
                  className="btn btn-black mt-4">
                Contact Me
            </Link>
        </section>
    )
}

export default FirstHero;