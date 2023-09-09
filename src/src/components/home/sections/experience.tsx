import { splitArray } from '../../../utils/array';
import reactIcon from '../../../assets/icons/react.png';
import typescriptIcon from '../../../assets/icons/typescript.svg';
import scssIcon from '../../../assets/icons/scss.png';
import alpineIcon from '../../../assets/icons/alpine.svg';
import tailwindIcon from '../../../assets/icons/tailwind.png';
import pugIcon from '../../../assets/icons/pug.png';
import emotionCssIcon from '../../../assets/icons/emotion-css.png';
import dsLogo from '../../../assets/home/DS-logo.jpg';
import { useCallback, useEffect, useRef, useState } from 'react';

type InternProject = {
    title: string,
    text: string,
    result: string,
}

type TechStack = {
    image: string,
    note: string,
    link: string,
}

type InternExperience = {
    image: string,
    position: string,
    projects: Array<InternProject>,
    techstacks: Array<TechStack>,
}

const experienceData: Array<InternExperience> = [
    {
        image: dsLogo,
        position: "Frontend software engineer at Decision Science Agency",
        projects: [
            {
                title: "Singlife - NISL",
                text: "Upgraded NISL Singlife's webpage using AlpineJS, SCSS, Tailwind and PUG HTML templating.",
                result: "Ensuring smooth communication between Singlife and its collaborators",
            },
            {
                title: "Singlife - eservice forms",
                text: "Developed and maintained Singlife's eservices form using React Typescript and Emotion CSS.",
                result: "Benefitting Singlife and thousands of Singlife's customers.",
            },
            {
                title: "HDB Change Flat Ownership",
                text: "Upgraded HDB's flat ownership application page using ReactJS, React Typescript and SCSS.",
                result: "Ensuring smooth administration of HDB.",
            },
        ],
        techstacks: [
            {
                image: reactIcon,
                note: 'React',
                link: 'https://react.dev/',
            },
            {
                image: typescriptIcon,
                note: 'Typescript',
                link: 'https://www.typescriptlang.org/',
            },
            {
                image: scssIcon,
                note: 'SCSS',
                link: 'https://sass-lang.com/',
            },
            {
                image: alpineIcon,
                note: 'Alpine',
                link: 'https://alpinejs.dev/',
            },
            {
                image: tailwindIcon,
                note: 'Tailwind',
                link: 'https://tailwindcss.com/',
            },
            {
                image: pugIcon,
                note: 'PUG HTML Templating',
                link: 'https://pugjs.org/api/getting-started.html',
            },
            {
                image: emotionCssIcon,
                note: 'Emotion CSS',
                link: 'https://emotion.sh/docs/introduction',
            }
        ]
    }
]

export default function Experience(): JSX.Element {
    return <div className="experience" id="experience">
        <div className="experience-title">Experience</div>
        <div className="experience-list">
            {experienceData.map((experience, i) => (
                <ExperienceItem experience={experience} key={i} />
            ))}
        </div>
    </div>;
}

const ExperienceItem = ({ experience }: {
    experience: InternExperience
}): JSX.Element => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const experienceDiv = useRef<HTMLDivElement>(null);
    const bottomTolerance = 200;

    const calculateInView = useCallback<() => void>(() => {
        setIsInView(experienceDiv.current!.getBoundingClientRect().bottom < window.innerHeight + bottomTolerance);
    }, []);

    useEffect(() => {
        calculateInView();
        window.addEventListener('scroll', calculateInView);
        return () => window.removeEventListener('scroll', calculateInView);
    }, [calculateInView]);

    return <div 
        className={"experience-item" + (isInView ? "" : " experience-item-hide")}
        ref={experienceDiv}
    >
        <div className="experience-item-title">{experience.position}</div>
        <div className="experience-item-body">
            <div className="experience-item-left">
                <div className="experience-item-photo">
                    <img src={experience.image} alt="company" />
                </div>
                <div className="experience-item-techstacks">
                    {splitArray<TechStack>(experience.techstacks, 3).map((techstackRow, techstackIndex) => (
                        <TechStackRow row={techstackRow} key={techstackIndex} />
                    ))}
                </div>
            </div>
            <div className="experience-item-details">
                <div className="experience-item-projects">
                    <div className="experience-item-projects-header">Projects I did</div>
                    <div className="experience-item-projects-details">
                        {experience.projects.map((project, projectIndex) => (
                            <div className="experience-project" key={projectIndex}>
                                <div className="experience-project-title">{project.title}</div>
                                <ul className="experience-project-details">
                                    <li className="experience-project-detail">{project.text}</li>
                                    <li className="experience-project-detail">{project.result}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const TechStackRow = ({ row }: {
    row: Array<TechStack>
}): JSX.Element => {
    const [highlightIndex, setHighlightIndex] = useState<number>(-1);

    return <div className="experience-item-techstacks-row">
        {row.map((techstack, techstackIndex) => (
            <a 
                className="experience-item-techstack-container" 
                href={techstack.link}
                key={techstackIndex}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHighlightIndex(techstackIndex)}
                onMouseLeave={() => setHighlightIndex(-1)}
            >
                <div className={
                    "experience-item-techstack"
                    + (
                        highlightIndex !== -1
                        ? techstackIndex === highlightIndex
                            ? " experience-item-techstack-highlight"
                            : techstackIndex < highlightIndex
                            ? " experience-item-techstack-left"
                            : " experience-item-techstack-right"
                        : ""
                    )
                }>
                    <img src={techstack.image} alt={techstack.note} />
                </div>
            </a>
        ))}
    </div>;
}