import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    icon: string;
}


const Icon = (props: IconProps) => {
    const {icon, className = ''} = props;

    return (<i className={`${icon} ${className}`}/>)
}

export default Icon;