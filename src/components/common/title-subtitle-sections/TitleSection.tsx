import DOMPurify from 'isomorphic-dompurify';
import { HTMLAttributes } from 'react';

interface TitleSectionProps extends HTMLAttributes<HTMLBaseElement> {
    title: string;
}

const TitleSection = ({title, className = ''}: TitleSectionProps) => {

    return (
        <h2 className={`fs-title-section fw-ultra-bold mb-3 ${className}`}
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}/>
    )
}

export default TitleSection;