import useScrollToTop from "@/hooks/useScrollToTop";
import Icon from "../icons/Icon";


const ButtonScrollTop = () => {
    const {scrollToTop} = useScrollToTop();

    return (
        <div className="cursor-pointer" id="btn-scroll-top" onClick={scrollToTop}>
            <Icon icon={'fa-solid fa-chevron-up'} className="fs-2 text-white"/>
        </div>
    )
}

export default ButtonScrollTop;