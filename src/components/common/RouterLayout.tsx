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
            <title>Stefano Satta - Front-end developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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