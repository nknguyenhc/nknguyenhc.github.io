import { useState } from 'react';
import CS1101SIcon from '../../../assets/academics/CS1101S.png';

type DepartmentAverageDictType = {
    [key: string]: number,
};

const departmentAverage: DepartmentAverageDictType = {
    'AY2324-S1': 4.3,
};

type TaDataType = {
    name: string,
    fullname: string,
    icon: string,
    rating: number,
    term: string,
    scope: Array<string>,
    topics: Array<string>,
};

const taData: Array<TaDataType> = [
    {
        name: 'CS1101S',
        fullname: 'Programming Methodology',
        icon: CS1101SIcon,
        rating: 4.5,
        term: 'AY2324-S1',
        scope: [
            'Prepare materials and conduct tutorial classes',
            'Grade missions, quests (homework)',
            'Conduct mastery checks',
        ],
        topics: [
            'Constants, functions and variables',
            'Function evaluation',
            'Recursion and iteration',
            'Orders of growth',
            'Nested declarations',
            'Higher-order functions',
            'Scope of name',
            'Data abstractions and mutations',
            'Sorting',
            'Javascript interpreter model',
            'Streams',
            'Memoization',
            'Metalinguistic abstraction',
        ],
    },
];

export default function Ta(): JSX.Element {
    return <div className="tas">
        <div className="tas-title">My TA positions over my semesters in NUS</div>
        <div className="tas-list">
            {taData.map((data) => (
                <TaPosition data={data} key={data.name} />
            ))}
        </div>
    </div>;
};

const TaPosition = ({ data }: {
    data: TaDataType,
}): JSX.Element => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return <div
        className={"ta" + (isHovering ? " ta-zoomed" : "")}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <div className="ta-icon">
            <img src={data.icon} alt="" />
        </div>
        <div className="ta-data">
            <div className='ta-data-title'>
                <div className="ta-data-title-name">{data.name} - {data.fullname}</div>
                <div className="ta-data-title-term">{data.term}</div>
            </div>
            <div className="ta-data-details">
                <div className="ta-data-details-block">
                    <div>Teaching feedback score: {data.rating}/5.0 (Department average: {departmentAverage[data.term]}/5.0)</div>
                    <div>View <a href={`${process.env.PUBLIC_URL}/TA/${data.name}.pdf`} className="ta-data-details-link">full report</a>.</div>
                </div>
                <div className="ta-data-details-block">
                    {data.scope.map(job => (
                        <div key={job} className="ta-data-details-block-item">
                            <BulletListing />
                            <div>{job}</div>
                        </div>
                    ))}
                </div>
                <div className="ta-data-details-block">
                    <div>Topics covered:</div>
                    <div className="ta-data-details-topics">
                        {data.topics.map(topic => (
                            <div key={topic} className="ta-data-details-topic">{topic}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

const BulletListing = (): JSX.Element => (
    <div className="ta-bullet" />
)
