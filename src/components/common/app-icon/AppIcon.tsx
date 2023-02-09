import Image from "next/image";
import {PropsWithChildren} from "react";

interface AppIconProps {
    url: string;
    altLabel: string;
}

const AppIcon = ({url, altLabel}: PropsWithChildren<AppIconProps>) => {

    return (
        <div className="app-icon">
            <Image src={url} alt={altLabel} width={64} priority/>
        </div>
    )
}

export default AppIcon;