import landing1 from '../../../assets/home/landing-1.jpeg';
import landing2 from '../../../assets/home/landing-2.jpg';
import landing3 from '../../../assets/home/landing-3.jpeg';
import { useState, useEffect } from 'react';
import {
    TechStackType,
    alpine,
    angular,
    aws,
    azure,
    bootstrap,
    cpp,
    django,
    docker,
    emotion,
    fastApi,
    firebase,
    flask,
    godot,
    graphql,
    java,
    jsDomManipulation,
    nodejs,
    openai,
    pug,
    puppeteer,
    react,
    scss,
    sql,
    stabilityai,
    tailwind,
    typescript
} from '../../../constants/techstack';
import useViewportWidth from '../../../utils/viewport';
import TooltipDesktop from '../../tooltip/desktop';

type Image = {
    src: string,
    circleCrop: boolean
}

const images: Array<Image> = [
    {
        src: landing1,
        circleCrop: true,
    },
    {
        src: landing2,
        circleCrop: true,
    },
    {
        src: landing3,
        circleCrop: true,
    },
];

export default function LandingBanner(): JSX.Element {
    const [showOrder, setShowOrder] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowOrder(curr => (curr + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return <div className='landing-banner' id="landing-banner">
        <div className="landing-banner-images" onClick={() => setShowOrder(curr => (curr + 1) % images.length)}>
            {images.map((img, srcIndex) => (
                <img 
                    src={img.src} 
                    alt={`myself ${srcIndex}`} 
                    key={srcIndex} 
                    className={"landing-banner-image" + (img.circleCrop ? "" : " landing-banner-image-not-circle") + (showOrder === srcIndex ? " landing-banner-image-show" : "")}
                />
            ))}
        </div>
        <div className="landing-banner-text">
            <div className="landing-banner-text-top">Hello, I'm</div>
            <div className="landing-banner-text-bottom">Nguyen Khoi Nguyen</div>
        </div>
        <TechStacks />
    </div>
}

const techstackData: Array<TechStackType> = [
    django,
    react,
    typescript,
    angular,
    nodejs,
    flask,
    fastApi,
    sql,
    cpp,
    java,
    firebase,
    graphql,
    alpine,
    jsDomManipulation,
    scss,
    emotion,
    pug,
    tailwind,
    bootstrap,
    godot,
    docker,
    azure,
    aws,
    puppeteer,
    stabilityai,
    openai,
];

const TechStacks = (): JSX.Element => {
    return <div className="landing-banner-techstacks">
        {techstackData.map(techstack => (
            <TechStack data={techstack} key={techstack.note} />
        ))}
    </div>;
}

const TechStack = ({ data }: {
    data: TechStackType
}): JSX.Element => {
    const isDesktop = useViewportWidth();
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return <a 
        href={data.link} 
        target="_blank" 
        rel="noreferrer" 
        className="landing-banner-techstack"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <img src={data.image} alt="" />
        {isDesktop && isHovering && <TooltipDesktop 
            text={data.note}
            place="bottom"
        />}
    </a>;
}
