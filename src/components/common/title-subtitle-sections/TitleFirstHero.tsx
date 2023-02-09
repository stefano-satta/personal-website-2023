import {useCallback, useEffect, useState} from "react";

const names = [
    'developer.', 'adventurer.', 'dreamer.'
]

const TitleFirstHero = () => {
    const [newName, setnewName] = useState<string>(names[0]);

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <h1 className="fw-ultra-bold text-center"
            style={{fontSize: 'clamp(60px, 17.7464788732px + 8.4507042254vw, 180px)'}}>
            {newName}
        </h1>
    )
}

export default TitleFirstHero;