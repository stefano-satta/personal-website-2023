import myInfo from "@/utility/my-info";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Icon from "../icons/Icon";
import icon from "./../../../utility/icon";

interface SocialContactsProps extends HTMLAttributes<HTMLDivElement> {
    socialColorLink: 'social-link-black' | 'social-link-white';
}


const SocialContacts = ({className = '', socialColorLink = 'social-link-black'}: SocialContactsProps) => {
    
    return (
        <div className={`d-flex ${className}`}>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`} passHref className={`text-reset fs-5 me-3 ${socialColorLink}`}>
                <Icon icon={icon.mail}/>
            </Link>
            <Link href={myInfo.linkedin} passHref target="_blank" className={`text-reset fs-5 me-3 ${socialColorLink}`}>
                <Icon icon={icon.linkedin}/>
            </Link>
            <Link href={myInfo.github} passHref target="_blank" className={`text-reset fs-5 me-3 ${socialColorLink}`}>
                <Icon icon={icon.github}/>
            </Link>
        </div>
    )
}

export default SocialContacts;