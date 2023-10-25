import landing1 from '../../../assets/home/landing-1.jpeg';
import landing2 from '../../../assets/home/landing-2.jpg';
import landing3 from '../../../assets/home/landing-3.jpeg';
import { useState, useEffect } from 'react';
import djangoIcon from '../../../assets/icons/django.png';
import reactIcon from '../../../assets/icons/react.png';
import typescriptIcon from '../../../assets/icons/typescript.svg';
import nodejsIcon from '../../../assets/icons/nodejs.png';
import flaskIcon from '../../../assets/icons/flask.png';
import sqlIcon from '../../../assets/icons/sql.png';
import cppIcon from '../../../assets/icons/cpp.png';
import javaIcon from '../../../assets/icons/java.png';
import firebaseIcon from '../../../assets/icons/firebase.png';
import alpineIcon from '../../../assets/icons/alpine.svg';
import scssIcon from '../../../assets/icons/scss.png';
import emotionIcon from '../../../assets/icons/emotion-css.png';
import pugIcon from '../../../assets/icons/pug.png';
import tailwindIcon from '../../../assets/icons/tailwind.png';
import bootstrapIcon from '../../../assets/icons/bootstrap.png';
import godotIcon from '../../../assets/icons/godot.png';
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

type TechStackType = {
    image: string,
    link: string,
    note: string,
}

const techstackData: Array<TechStackType> = [
    {
        image: djangoIcon,
        link: "https://www.djangoproject.com/",
        note: "Django",
    },
    {
        image: reactIcon,
        link: "https://react.dev/",
        note: "React",
    },
    {
        image: typescriptIcon,
        link: "https://www.typescriptlang.org/",
        note: "Typescript",
    },
    {
        image: nodejsIcon,
        link: "https://nodejs.org/en",
        note: "Node.js",
    },
    {
        image: flaskIcon,
        link: "https://flask.palletsprojects.com/",
        note: "Flask",
    },
    {
        image: sqlIcon,
        link: "https://en.wikipedia.org/wiki/SQL",
        note: "SQL",
    },
    {
        image: cppIcon,
        link: "https://en.wikipedia.org/wiki/C%2B%2B",
        note: "C++",
    },
    {
        image: javaIcon,
        link: "https://www.java.com/en/",
        note: "Java",
    },
    {
        image: firebaseIcon,
        link: "https://firebase.google.com/",
        note: "Firebase",
    },
    {
        image: alpineIcon,
        link: "https://alpinejs.dev/",
        note: "Alpine.js",
    },
    {
        image: scssIcon,
        link: "https://sass-lang.com/",
        note: "SCSS",
    },
    {
        image: emotionIcon,
        link: "https://emotion.sh/docs/introduction",
        note: "EmotionCSS",
    },
    {
        image: pugIcon,
        link: "https://pugjs.org/",
        note: "PUG HTML",
    },
    {
        image: tailwindIcon,
        link: "https://tailwindcss.com/",
        note: "Tailwind",
    },
    {
        image: bootstrapIcon,
        link: "https://getbootstrap.com/",
        note: "Bootstrap",
    },
    {
        image: godotIcon,
        link: "https://godotengine.org/",
        note: "Godot",
    },
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
