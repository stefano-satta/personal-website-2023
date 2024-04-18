import useScrollToTop from "@/hooks/useScrollToTop";
import Icon from "../icons/Icon";
import icon from "@/utility/icon";


const ButtonScrollTop = () => {
    const {scrollToTop} = useScrollToTop();

    return (
        <div className="cursor-pointer" id="btn-scroll-top" onClick={scrollToTop}>
            <Icon icon={icon.scrollTop} className="fs-2 text-white"/>
        </div>
    )
}

export default ButtonScrollTop;