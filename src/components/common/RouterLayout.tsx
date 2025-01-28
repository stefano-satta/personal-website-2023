import Custom404Page from "@/pages/404";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "./navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import useScrollToTop from "@/hooks/useScrollToTop";
import ButtonScrollTop from "./button-scroll-to-top/ButtonScrollTop";
import Links from "@/pages/links";


const RouterLayout = ({children}: any) => {
    const router = useRouter();
    const {isScrollToTop} = useScrollToTop();

    return (<> 
        <Head>
            <title>Stefano Satta | Front-end developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="I'm a passionate front-end developer based in Italy. Focused on building responsive front-end web applications with <br/>
                modern technologies."/>
            <meta name="og:title" content="Stefano Satta | Front-end developer"/>
            <meta name="og:description" content="I'm a passionate front-end developer based in Italy. Focused on building responsive front-end web applications with <br/>
                modern technologies."/>
            <meta name="og:site_name" content="Stefano Satta"/>
            <meta property="og:url" content="https://stefanosatta.vercel.app"/>
            <meta property="og:locale" content="en_US"/>
        </Head>
        {
            router.pathname === '/404' ? <Custom404Page/> : router.pathname === '/links' ? <Links/> :
                (<>
                    <NavBar/>
                        <main className="position-relative" style={{marginTop: '80px'}}>
                            {children}
                            {isScrollToTop && <ButtonScrollTop/>}
                        </main>
                     <Footer/>
                </>)
        }
    </>)
}

export default RouterLayout;