import AppIcon from "@/components/common/app-icon/AppIcon";
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";
import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import AngularLogo from '../../../../public/logos/angular.png';
import ReactLogo from '../../../../public/logos/react.png';
import JavascriptLogo from '../../../../public/logos/javascript.png';
import TypescriptLogo from '../../../../public/logos/typescript.png';
import NextLogo from '../../../../public/logos/next.svg';
import RxJSLogo from '../../../../public/logos/rxjs.png';
import ReduxLogo from '../../../../public/logos/redux.png';
import WebpackLogo from '../../../../public/logos/webpack.png';


const TechSection = () => {

    return (
        <Row className="py-5" id="tech-section" as="section">
            <Col xs={12} md={{ span: 8, offset: 2}} className="fs-3">
                <p className="mb-4">
                    Hi! My name is Stefano and I am <span className="fw-semibold">front-end developer</span> with over six years of experience
                    in building scalable web applications.
                </p>
                <p className="mb-4">
                    I have experience in developing, testing and debugging web applications and websites.
                </p>
                <p className="mb-4">
                    I have participated in a number of intense tech projects(private and public administration) where I acquired 
                    technical and soft skills.
                </p>
                <p className="mb-4">
                    I like to learn and I have also acquired high level programming skills from online courses on Udemy.
                </p>
                <p className="mb-5 pb-5">
                    For more information visit my &nbsp;
                    <Link href={myInfo.linkedin}
                        target={"_blank"}
                        passHref 
                        className="text-black text-decoration-none link">
                            Linkedin profile
                    </Link>
                </p>
                <div className="my-5" 
                    style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', rowGap: '20px', justifyItems: 'center', alignItems: 'center'}}>
                    <div className="">
                        <CustomTooltip text="Angular">
                            <AppIcon url={AngularLogo} altLabel={'angular_logo'} width={50}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="RxJS">
                            <AppIcon url={RxJSLogo} altLabel={'rxjs_logo'} width={50}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="React">
                            <AppIcon url={ReactLogo} altLabel={'react_logo'} width={50}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="Redux">
                            <AppIcon url={ReduxLogo} altLabel={'redux_logo'} width={50}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="NextJS">
                            <AppIcon url={NextLogo} altLabel={'next_logo'} width={60}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="JavaScript">
                            <AppIcon url={JavascriptLogo} altLabel={'js_logo'} width={60}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="TypeScript">
                            <AppIcon url={TypescriptLogo} altLabel={'ts_logo'}/>
                        </CustomTooltip>
                    </div>
                    <div className="">
                        <CustomTooltip text="Webpack">
                            <AppIcon url={WebpackLogo} altLabel={'webpack_logo'}/>
                        </CustomTooltip>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default TechSection;