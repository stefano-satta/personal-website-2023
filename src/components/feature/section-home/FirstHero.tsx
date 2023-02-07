import TitleFirstHero from "@/components/common/title-first-hero/TitleFirstHero";
import {Button} from "react-bootstrap";
import Link from "next/link";
import myInfo from "@/utility/my-info";

const FirstHero = () => {

    return (
        <section id="first-hello-hero" className="text-center">
            <TitleFirstHero/>
            <p className=" text-grey fs-4 mt-5">
                Hi! I’m <span className="text-black fw-bold">Stefano Satta</span>. <br/>
                I am a passionate <span className="text-black fw-bold">front-end developer</span> based in Italy. <br/>
                I have many years of experience in web app consulting. <br/>
                I love surfing, pasta and photography.
            </p>
            <Link href={`mailto:${myInfo.email}?subject=Project info. Let's talk!`}
                  passHref
                  className="btn text-white bg-black mt-4">
                Contact Me
            </Link>
        </section>
    )
}

export default FirstHero;