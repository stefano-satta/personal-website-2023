import DOMPurify from 'isomorphic-dompurify';

interface TitleSectionProps {
    title: string;
}

const TitleSection = ({title}: TitleSectionProps) => {

    return (
        <h2 className="fs-title-section fw-ultra-bold mb-3"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}/>
    )
}

export default TitleSection;