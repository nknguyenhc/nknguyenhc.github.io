import DeansList from '../../../assets/home/deans-list.png';
import CS1101S from '../../../assets/home/CS1101S.png';
import CS1231S from '../../../assets/home/CS1231S.png';
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
            "Overall GPA: 5.0"
        ],
        img: DeansList,
    },
    {
        name: "Top in Programming Methodology module (CS1101S)",
        description: "Top Student certificate was awarded to students with top performance in Programming Methodology module (CS1101S).",
        details: [
            "Obtained in Semester 1 of AY 2022-2023",
            "Overall module score: A+"
        ],
        img: CS1101S,
    },
    {
        name: "Top in Discrete Structure module (CS1231S)",
        description: "Top Student certificate was awarded to students with top performance in Discrete Structure module (CS1231S).",
        details: [
            "Obtained in Semester 1 of AY 2022-2023",
            "Overall module score: A+"
        ],
        img: CS1231S,
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