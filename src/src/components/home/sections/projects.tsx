import MatchMinerLogo from '../../../assets/projects/matchminer-logo.png';
import MatchMinerWeb from '../../../assets/projects/matchminer-web.png';
import MatchMinerMobile from '../../../assets/projects/matchminer-mobile.jpeg';
import WebIcon from '../../../assets/icons/web.png';
import AndroidIcon from '../../../assets/icons/android.png';
import IOSIcon from '../../../assets/icons/ios.png';
import GithubIcon from '../../../assets/icons/github.png';
import { splitToParagraphs } from '../../../utils/text-processing';
import { useState } from 'react';
import Pagination from '../../pagination/index';

type DeployData = {
    link: string,
    description: string,
    icon: string,
}

type ProjectData = {
    name: string,
    description: string,
    readme: string,
    code: string,
    images: {
        main: string,
        left: string,
        right: string,
    },
    deployed: Array<DeployData>,
}

const projects: Array<ProjectData> = [
    {
        name: "MatchMiner",
        description: "While we may wish to share our interests online, we all at times get the anxiety about the number of likes and comments. This stifles our desire to share our interests with others online.\nOur app is set out to exactly tackle that! Beyond the absence of \"like\" and \"share\" functionalities, we allow users to curate their own cellars of niche hobbies and connect with like-minded others, through a system of pre-defined tags. Through the same system, users can easily find like-minded others. We hope to create an environment where you feel at ease sharing your interests and find others with the same interests.",
        readme: "https://matchminer-d5ebcada4488.herokuapp.com/about",
        code: "https://github.com/nknguyenhc/SuperCellMates",
        images: {
            main: MatchMinerLogo,
            left: MatchMinerWeb,
            right: MatchMinerMobile,
        },
        deployed: [
            {
                link: "https://matchminer-d5ebcada4488.herokuapp.com/",
                description: "Web",
                icon: WebIcon,
            },
            {
                link: "https://appdistribution.firebase.dev/i/f520d9765baf5a95",
                description: "Android",
                icon: AndroidIcon,
            },
            {
                link: "https://testflight.apple.com/join/zV9ppF8i",
                description: "iOS",
                icon: IOSIcon,
            }
        ],
    },
    {
        name: "Coding Scheme Simulation",
        description: "While transmitting data, errors might be introduced. if raw data is sent, the receiving ends has no means of reversing the errors. Hence, instead of sending raw data, both sender and receiver agrees on an encryption mechanism such that encrypted data can be decrypted, and errors can be auto-corrected in the process.\nWe explore three such encryption mechanisms varying in complexity and effectiveness, the Hamming code, the convolutional code, and the Reed-Solomon code.",
        readme: "https://github.com/tranvietkhoa/Coding-Schemes-Simulation",
        code: "https://github.com/tranvietkhoa/Coding-Schemes-Simulation",
        images: {
            main: MatchMinerLogo,
            left: MatchMinerLogo,
            right: MatchMinerLogo,
        },
        deployed: [],
    }
];

export default function Projects(): JSX.Element {
    const [showIndex, setShowIndex] = useState<number>(0);

    return <div className="projects">
        <div className="projects-title">My Projects</div>
        {projects.map((project, projectIndex) => (
            <Project 
                project={project} 
                key={projectIndex} 
                isShow={showIndex === projectIndex} 
                isStatic={showIndex <= projectIndex}
            />
        ))}
        <Pagination
            leftPositionClass='project-arrow-left'
            rightPositionClass='project-arrow-right'
            indicatorPositionClass=''
            setIndex={setShowIndex}
            currIndex={showIndex}
            numOfItems={projects.length}
        />
    </div>;
}

const Project = ({ project, isShow, isStatic }: {
    project: ProjectData,
    isShow: boolean,
    isStatic: boolean,
}): JSX.Element => {
    return <div className={"project" + (isShow ? " project-show" : "") + (isStatic ? " project-static": "")}>
        <div className="project-panel project-left">
            <div className="project-title">{project.name}</div>
            <div className="project-body">
                <div className="project-description" dangerouslySetInnerHTML={{
                    __html: splitToParagraphs(project.description)
                }} />
                <div className="project-links">
                    <div className="project-readme">Read our full description <a className='link' href={project.readme}>here</a>.</div>
                    <div className="project-code">
                        <div className="project-code-text">Fork me!</div> 
                        <a className="small-img-container" href={project.code}>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-panel project-right">
            <div className="project-images">
                <div className="project-image project-image-main">
                    <img src={project.images.main} alt="project logo" />
                </div>
                <div className="project-image-secondary">
                    <div className="project-image project-image-panel">
                        <img src={project.images.left} alt="project demo" />
                    </div>
                    <div className="project-image project-image-panel">
                        <img src={project.images.right} alt="project demo" />
                    </div>
                </div>
            </div>
            <div className="project-deploy">
                <div className="project-deploy-title">We are available on:</div>
                <div className="project-deploy-links">
                    {project.deployed.map((deploy, deployIndex) => (
                        <a className="project-deploy-link" href={deploy.link} key={deployIndex}>
                            <div className="small-img-container project-deploy-icon">
                                <img src={deploy.icon} alt="deploy icon" />
                            </div>
                            <div className="project-deploy-text">{deploy.description}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>;
}