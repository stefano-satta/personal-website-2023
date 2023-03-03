import Custom404Page from "@/pages/404";
import Head from "next/head";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import NavBar from "./navbar/Navbar";
import Footer from "@/components/common/footer/Footer";



const RouterLayout = ({children}: any) => {
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    // const {isScrollToTop} = useScrollToTop();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoader(false);
    //     }, 1500);
    // },[])


    return (<> 
            <Head>
                <title>Stefano Satta - Front-end developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            { 
                router.pathname === '/404' ? <Custom404Page/> :
                    loader ? 
                    // <InitialLoader/> : 
                    'loader' : 
                    (<>
                        <NavBar/>
                            <main className="position-relative" style={{marginTop: '80px'}}>
                                {children}
                                {/* {isScrollToTop && <ButtonScrollTop/>} */}
                            </main>
                         <Footer/>
                    </>)
            } 
    </>)
}

export default RouterLayout;