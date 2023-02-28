import myInfo from "@/utility/my-info";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Icon from "../icons/Icon";

interface SocialContactsProps extends HTMLAttributes<HTMLDivElement> {}


const SocialContacts = ({className = ''}: SocialContactsProps) => {
    
    return (
        <div className={`d-flex ${className}`}>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`} passHref className="text-reset fs-2 me-5">
                <Icon icon={'envelope-fill'}/>
            </Link>
            <Link href={myInfo.linkedin} passHref target="_blank" className="text-reset fs-2 me-5">
                <Icon icon={'linkedin'}/>
            </Link>
            <Link href={myInfo.github} passHref target="_blank" className="text-reset fs-2">
                <Icon icon={'github'}/>
            </Link>
        </div>
    )
}

export default SocialContacts;