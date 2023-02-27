import myInfo from "@/utility/my-info";
import Link from "next/link";
import Icon from "../icons/Icon";


const SocialContacts = () => {
    
    return (
        <div className="d-flex d-none d-lg-block">
            <Link href={`mailto:${myInfo.email}?subject=Project info.`} passHref className="text-reset fs-4 me-3">
                <Icon icon={'envelope-fill'}/>
            </Link>
            <Link href={myInfo.linkedin} passHref target="_blank" className="text-reset fs-4 me-3">
                <Icon icon={'linkedin'}/>
            </Link>
            <Link href={myInfo.github} passHref target="_blank" className="text-reset fs-4">
                <Icon icon={'github'}/>
            </Link>
        </div>
    )
}

export default SocialContacts;