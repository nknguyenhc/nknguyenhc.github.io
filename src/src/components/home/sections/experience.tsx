import { splitArray } from '../../../utils/array';
import dsLogo from '../../../assets/home/DS-logo.jpg';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useViewportWidth from '../../../utils/viewport';
import { TechStackType, alpine, emotion, pug, react, scss, tailwind, typescript } from '../../../constants/techstack';

type InternProject = {
    title: string,
    text: string,
    result: string,
}

type InternExperience = {
    image: string,
    position: string,
    duration: string,
    projects: Array<InternProject>,
    techstacks: Array<TechStackType>,
}

const experienceData: Array<InternExperience> = [
    {
        image: dsLogo,
        position: "Frontend software engineer at Decision Science Agency",
        duration: "May 2023 - Aug 2023",
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
            react,
            typescript,
            scss,
            alpine,
            tailwind,
            pug,
            emotion,
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
    const isDesktop = useViewportWidth();
    const bottomTolerance = useMemo(() => isDesktop ? 200 : 100, [isDesktop]);

    const calculateInView = useCallback<() => void>(() => {
        setIsInView(experienceDiv.current!.getBoundingClientRect().top < window.innerHeight - bottomTolerance);
    }, [bottomTolerance]);

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
        <div className="experience-item-duration">{experience.duration}</div>
        <div className="experience-item-body">
            <div className="experience-item-left">
                <div className="experience-item-photo">
                    <img src={experience.image} alt="company" />
                </div>
                <div className="experience-item-techstacks">
                    {splitArray<TechStackType>(experience.techstacks, 3).map((techstackRow, techstackIndex) => (
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
    row: Array<TechStackType>
}): JSX.Element => {
    const [highlightIndex, setHighlightIndex] = useState<number>(-1);
    const isDesktop = useViewportWidth();

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
                        highlightIndex !== -1 && isDesktop
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