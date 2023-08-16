import { videoLink, availablePlatforms, projectMotivation, ProjectMotivationProps, ElaborationProps } from './data';
import { useCheckAndScrollToId } from '../../../utils/scroll';
import { useState } from 'react';

export default function MatchMiner() {
    return <div className="matchminer central-body">
        <div className="matchminer-title">MatchMiner</div>
        <MatchMinerVideo />
        <div className="matchminer-available-platforms" id="available-platforms">
            <div>We are available on:</div>
            <div className="matchminer-available-platforms-list">
                {availablePlatforms.map((availablePlatform, availablePlatformIndex) => (
                    <a 
                        href={availablePlatform.link} 
                        className="matchminer-available-platforms-item"
                        key={availablePlatformIndex}
                    >
                        <div className="matchminer-available-platforms-item-icon small-img-container">
                            <img src={availablePlatform.icon} alt="platform icon" />
                        </div>
                        <div className="matchminer-available-platforms-item-text">
                            {availablePlatform.text}
                        </div>
                    </a>
                ))}
            </div>
        </div>
        <div className="matchminer-motivation">
            <ProjectMotivation />
        </div>
    </div>;
}

const MatchMinerVideo = (): JSX.Element => {
    useCheckAndScrollToId("matchminer-video", 10);

    return <div className="matchminer-video" id="matchminer-video">
        <iframe src={videoLink} allowFullScreen={true} title="Youtube intro video" />
    </div>;
}

const ProjectMotivation = (): JSX.Element => {
    const [itemIndex, setItemIndex] = useState<number>(-1);

    useCheckAndScrollToId("project-motivation", 300);

    return <div className="matchminer-motivation" id="project-motivation">
        <div className="matchminer-label">Project motivation</div>
        <div className="matchminer-motivation-guide">(Click on each item to see more)</div>
        <div className="matchminer-motivation-body">
            <div className="matchminer-motivation-list">
                {projectMotivation.map((motivation, motivationIndex) => (
                    <ProjectMotivationItem 
                        motivation={motivation} 
                        key={motivationIndex} 
                        click={() => setItemIndex(motivationIndex)}
                    />
                ))}
            </div>
            <div className='matchminer-motivation-list-container'>
                {projectMotivation.map((motivation, motivationIndex) => (
                    <>
                        <ProjectElaboration 
                            elaboration={motivation.elaboration} 
                            isShow={motivationIndex === itemIndex}
                            key={motivationIndex} 
                        />
                    </>
                ))}
            </div>
        </div>
    </div>;
}

function ArrowRightIcon() {
    return (
        <svg height="40" width="40">
            <line x1="3" x2="37" y1="20" y2="20" />
            <line x1="30" x2="37" y1="13" y2="20" />
            <line x1="30" x2="37" y1="27" y2="20" />
        </svg>
    )
}

const ProjectMotivationItem = ({ motivation, click }: {
    motivation: ProjectMotivationProps,
    click: () => void,
}): JSX.Element => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return <div 
        className="matchminer-motivation-item" 
        onMouseLeave={() => setIsHover(false)}
        onClick={click}
    >
        <div className="matchminer-motivation-item-text" onMouseOver={() => setIsHover(true)}>{motivation.text}</div>
        {isHover && <ArrowRightIcon />}
    </div>;
}

const ProjectElaboration = ({ elaboration, isShow } : {
    elaboration: Array<ElaborationProps>,
    isShow: boolean
}): JSX.Element => {
    return <div className={"matchminer-motivation-list matchminer-motivation-list-detail" + (isShow ? "" : " matchminer-motivation-list-hide")}>
        {elaboration.map((detail, detailIndex) => (
            <div className="matchminer-motivation-elaboration" key={detailIndex}>{detail.displayText}</div>
        ))}
    </div>;
}