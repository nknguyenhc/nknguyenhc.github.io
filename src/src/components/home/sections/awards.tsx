import DeansList from '../../../assets/home/deans-list.png';
import CS1101S from '../../../assets/home/CS1101S.png';
import CS1231S from '../../../assets/home/CS1231S.png';
import SPL from '../../../assets/home/SPL.png';
import CDDC from '../../../assets/home/CDDC.png';
import SPhO from '../../../assets/home/SPhO.png';
import SMO8 from '../../../assets/home/SMO8.png';
import SMO20 from '../../../assets/home/SMO20.png';
import SJPO from '../../../assets/home/SJPO.png';
import { useState, useEffect, useRef, useCallback } from 'react';

type Award = {
    name: string,
    description: string,
    details: Array<string>,
    img: string
}

const awards: Array<Award> = [
    {
        name: "Dean's List, NUS School of Computing",
        description: "Dean's List certificate in NUS School of Computing was awarded to students with top performance (5-10%).",
        details: [
            "Obtained in Semester 1 of AY 2022-2023",
            "Overall GPA: 5.0",
        ],
        img: DeansList,
    },
    {
        name: "Top in Programming Methodology module (CS1101S)",
        description: "Top Student certificate was awarded to students with top performance in Programming Methodology module (CS1101S).",
        details: [
            "Obtained in Semester 1 of AY 2022-2023",
            "Overall module score: A+",
        ],
        img: CS1101S,
    },
    {
        name: "Top in Discrete Structure module (CS1231S)",
        description: "Top Student certificate was awarded to students with top performance in Discrete Structure module (CS1231S).",
        details: [
            "Obtained in Semester 1 of AY 2022-2023",
            "Overall module score: A+",
        ],
        img: CS1231S,
    },
    {
        name: "Cyber Defense Discovery Camp (CDDC), 8th (Uni category)",
        description: "CDDC is a Capture The Flag event organised by Defense Science and Technology Agency, aimed at enhancing students' knowledge in cyber security. My team was shortlisted to the final round, and obtained 8th rank.",
        details: [
            "Obtained in Jun 2023",
        ],
        img: CDDC,
    },
    {
        name: "Singapore Physics League, 8th and Gold Award",
        description: "Students work in teams of 3-5 people to solve Physics problems and advance on the leaderboard. The problems are pitched at Physics Olympiad level, and answers are autograded. More than 100 teams participated in the competition.",
        details: [
            "Obtained in Jun 2021",
            "Team with highest score in Hwa Chong Institution",
        ],
        img: SPL,
    },
    {
        name: "Singapore Physics Olympiad, Gold",
        description: "Singapore Physics Olympiad is a venue for students to showcase their knowledge and understanding in Physics. More than 200 students from schools in Singapore participate in the competition, with around 20 top students obtaining gold medal. The competition consists of two rounds, theoretical and practical rounds.",
        details: [
            "Obtained in Feb 2021",
        ],
        img: SPhO,
    },
    {
        name: "Singapore Mathematical Olympiad, Gold & 8th rank (senior section)",
        description: "Singapore Mathematical Olympiad is a venue for students showcase their Mathematical skills. The contest is divided into 3 sections, where senior section is for secondary students. The competition consists of two rounds, with round 1 being multiple-choice and round 2 being free-response.",
        details: [
            "Obtained in Aug 2018",
        ],
        img: SMO8,
    },
    {
        name: "Singapore Mathematical Olympiad, Gold & 20th rank (open section)",
        description: "Singapore Mathematical Olympiad is a venue for students showcase their Mathematical skills. The contest is divided into 3 sections, where open section is for all students of JC level or below. The competition consists of two rounds, with round 1 being multiple-choice and round 2 being free-response.",
        details: [
            "Obtained in Aug 2019",
        ],
        img: SMO20,
    },
    {
        name: "Singapore Junior Physics Olympiad, Gold",
        description: "Singapore Junior Physics Olympiad is a platform for secondary school students to showcase their Physics knowledge and skills. The Open section is open to secondary schools not meeting age criterion.",
        details: [
            "Obtained in Aug 2019",
        ],
        img: SJPO,
    },
]

export default function Awards(): JSX.Element {
    return <div className="awards" id="awards">
        <div className="home-section-title">Awards and Certificates</div>
        <div className="awards-list">
            {awards.map((award, awardIndex) => (
                <AwardListing award={award} key={awardIndex} />
            ))}
        </div>
    </div>;
}

const AwardListing = ({ award }: {
    award: Award
}): JSX.Element => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const awardDiv = useRef<HTMLDivElement>(null);
    const bottomTolerance = 200;

    const calculateInView = useCallback(() => {
        setIsInView(awardDiv.current!.getBoundingClientRect().bottom < window.innerHeight + bottomTolerance);
    }, []);

    useEffect(() => {
        calculateInView();
        window.addEventListener('scroll', calculateInView);
        return () => window.removeEventListener('scroll', calculateInView);
    })

    return <div className="award" ref={awardDiv}>
        <div className="award-image">
            <img src={award.img} alt="award certificate/medal" />
        </div>
        <div className={"award-text" + (isInView ? " award-text-show" : "")}>
            <div className="award-name">{award.name}</div>
            <div className="award-description">{award.description}</div>
            <div className="award-details">
                {award.details.map((detail, detailIndex) => (
                    <div className="award-detail" key={detailIndex}>
                        <BulletListing />
                        <div className="award-detail-text">{detail}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

const BulletListing = (): JSX.Element => {
    return (
        <svg height="14" width="14">
            <line x1="0" x2="12" y1="0" y2="7" />
            <line x1="0" x2="12" y1="14" y2="7" />
        </svg>
    )
}