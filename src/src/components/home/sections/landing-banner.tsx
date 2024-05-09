import landing1 from '../../../assets/home/landing-1.jpeg';
import landing2 from '../../../assets/home/landing-2.jpg';
import landing3 from '../../../assets/home/landing-3.jpeg';
import { useState, useEffect } from 'react';
import {
    TechStackType,
    alpine,
    anaconda,
    angular,
    aws,
    azure,
    bootstrap,
    c,
    cpp,
    django,
    docker,
    emotion,
    express,
    fastApi,
    firebase,
    flask,
    flutter,
    godot,
    gradle,
    graphql,
    heroku,
    java,
    javascript,
    jsDomManipulation,
    maven,
    nodejs,
    npm,
    numpy,
    openai,
    pip,
    pug,
    puppeteer,
    python,
    pytorch,
    react,
    scss,
    sql,
    stabilityai,
    tailwind,
    telegram,
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

type TechStackSection = {
    name: string,
    techstacks: Array<TechStackType>,
};

const techstackData: Array<TechStackSection> = [
    {
        name: "Frontend",
        techstacks: [react, angular, typescript, graphql, alpine, scss, emotion, pug, tailwind, bootstrap, flutter],
    },
    {
        name: "Backend",
        techstacks: [django, flask, fastApi, express],
    },
    {
        name: "Database",
        techstacks: [sql, firebase],
    },
    {
        name: "Build automation",
        techstacks: [docker, pip, anaconda, npm, gradle, maven],
    },
    {
        name: "Cloud",
        techstacks: [azure, aws, heroku],
    },
    {
        name: "Artificial Intelligence",
        techstacks: [stabilityai, openai, numpy, pytorch],
    },
    {
        name: "Programming Languages",
        techstacks: [python, java, javascript, nodejs, typescript, c, cpp],
    },
    {
        name: "Game Development",
        techstacks: [godot],
    },
    {
        name: "Scripting/Bot",
        techstacks: [jsDomManipulation, puppeteer, telegram],
    },
];

const TechStacks = (): JSX.Element => {
    return <div className="landing-banner-techstacks">
        {techstackData.map(group => (
            <div className="landing-banner-techstacks-row" key={group.name}>
                <div className="landing-banner-techstacks-row-name">{group.name}</div>
                <div className="landing-banner-techstacks-row-techstacks">
                    {group.techstacks.map(techstack => (
                        <TechStack data={techstack} key={techstack.note} />
                    ))}
                </div>
            </div>
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
