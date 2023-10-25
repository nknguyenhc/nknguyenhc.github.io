import MatchMinerLogo from '../../../assets/projects/matchminer-logo.png';
import MatchMinerWeb from '../../../assets/projects/matchminer-web.png';
import MatchMinerMobile from '../../../assets/projects/matchminer-mobile.jpeg';
import DragonStamp from '../../../assets/projects/dragon-stamp.png';
import DragonGameplay1 from '../../../assets/projects/dragon-gameplay1.png';
import DragonGameplay2 from '../../../assets/projects/dragon-gameplay2.png';
import Coding1 from '../../../assets/projects/coding-convolutional-decode.png';
import Coding2 from '../../../assets/projects/coding-convolutional-encode.png';
import Coding3 from '../../../assets/projects/coding-hamming-decode.png';
import Payday1 from '../../../assets/projects/payday-1.png';
import Payday2 from '../../../assets/projects/payday-2.png';
import Payday3 from '../../../assets/projects/payday-3.png';
import UndercoverDucksLogo from '../../../assets/projects/undercoverducks-logo.png';
import UndercoverDucksGraph from '../../../assets/projects/undercoverducks-prediction.png';
import UndercoverDucksStats from '../../../assets/projects/undercoverducks-movement.png';
import WebIcon from '../../../assets/icons/web.png';
import AndroidIcon from '../../../assets/icons/android.png';
import IOSIcon from '../../../assets/icons/ios.png';
import GithubIcon from '../../../assets/icons/github.png';
import ItchIcon from '../../../assets/icons/itch.png';
import APKIcon from '../../../assets/icons/apk.png';
import { splitToParagraphs } from '../../../utils/text-processing';
import { MouseEvent, useCallback, useState } from 'react';
import Pagination from '../../pagination/index';
import useViewportWidth from '../../../utils/viewport';
import { useAppDispatch } from '../../../redux/store';
import { setImage } from '../../../redux/modalSlice';
import djangoIcon from '../../../assets/icons/django.png';
import reactIcon from '../../../assets/icons/react.png';
import typescriptIcon from '../../../assets/icons/typescript.svg';
import scssIcon from '../../../assets/icons/scss.png';
import sqlIcon from '../../../assets/icons/sql.png';
import flutterIcon from '../../../assets/icons/flutter.png';
import nodeIcon from '../../../assets/icons/nodejs.png';
import firebaseIcon from '../../../assets/icons/firebase.png';
import cppIcon from '../../../assets/icons/cpp.png';
import emotionIcon from '../../../assets/icons/emotion-css.png';
import flaskIcon from '../../../assets/icons/flask.png';
import numpyIcon from '../../../assets/icons/numpy.svg';
import godotIcon from '../../../assets/icons/godot.png';

type DeployData = {
    link: string,
    description: string,
    icon: string,
}

type TechStackType = {
    icon: string,
    link: string,
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
    techstacks: Array<TechStackType>,
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
        techstacks: [
            {
                icon: djangoIcon,
                link: "https://www.djangoproject.com/",
            },
            {
                icon: reactIcon,
                link: "https://react.dev/",
            },
            {
                icon: typescriptIcon,
                link: "https://www.typescriptlang.org/",
            },
            {
                icon: scssIcon,
                link: "https://sass-lang.com/",
            },
            {
                icon: sqlIcon,
                link: "https://en.wikipedia.org/wiki/SQL",
            },
            {
                icon: flutterIcon,
                link: "https://flutter.dev/",
            },
        ],
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
        name: "Payday Digital Wallet",
        description: "Imagine a world where everyone can securely manage their finances with confidence. We aim to create a safe, accessible and user-friendly digital wallet.\nBesides our own authentication system, we integrate our system with Stripe, which is also used for pay-in and pay-out. OTP is used for transactions for better security. Moreover, we employed Stripe AI insights to provide users with risk assessments of transactions. Lastly, we implemented guardian linking, which allows the guardian to be notified of the user's activities.",
        readme: "https://devpost.com/software/payday-digital-wallet",
        code: "https://github.com/Vanessamae23/project007backend",
        images: {
            main: Payday1,
            left: Payday2,
            right: Payday3,
        },
        techstacks: [
            {
                icon: nodeIcon,
                link: "https://nodejs.org/en",
            },
            {
                icon: reactIcon,
                link: "https://react.dev/",
            },
            {
                icon: firebaseIcon,
                link: "https://firebase.google.com/",
            },
        ],
        deployed: [
            {
                link: "https://drive.google.com/drive/folders/16v7VBmBWC6Bvl2IMpt3x84GLOGJOiC9y",
                description: "apk file",
                icon: APKIcon,
            },
        ],
    },
    {
        name: "Coding Scheme Simulation",
        description: "While transmitting data, errors might be introduced. if raw data is sent, the receiving ends has no means of reversing the errors. Hence, instead of sending raw data, both sender and receiver agrees on an encryption mechanism such that encrypted data can be decrypted, and errors can be auto-corrected in the process.\nWe explore three such encryption mechanisms varying in complexity and effectiveness, the Hamming code, the convolutional code, and the Reed-Solomon code.",
        readme: "https://github.com/tranvietkhoa/Coding-Schemes-Simulation",
        code: "https://github.com/tranvietkhoa/Coding-Schemes-Simulation",
        images: {
            main: Coding1,
            left: Coding2,
            right: Coding3,
        },
        techstacks: [
            {
                icon: cppIcon,
                link: "https://en.wikipedia.org/wiki/C%2B%2B",
            },
            {
                icon: nodeIcon,
                link: "https://nodejs.org/en",
            },
            {
                icon: reactIcon,
                link: "https://react.dev/",
            },
            {
                icon: emotionIcon,
                link: "https://emotion.sh/docs/introduction",
            },
        ],
        deployed: [],
    },
    {
        name: "Undercover Ducks",
        description: "PSA prediction of ship volume remains largely manual, which leaves room for errors. We introduce to capability to quantify impacts of real world events on Singapore ports.\nWe use the knowledge on current worldwide ship movements, and current situation to predict future ship volumes at ports worldwide, via a Markov chain model. This would allow ports to scale up or down its operation accordingly.\nOur web interface allows users to adjust knowledge on current ship movements and port details, subsequently simulate the changes to ship volumes to ports worldwide in future weeks.",
        readme: "https://github.com/nknguyenhc/UndercoverDucks#undercoverducks",
        code: "https://github.com/nknguyenhc/UndercoverDucks",
        images: {
            main: UndercoverDucksLogo,
            left: UndercoverDucksGraph,
            right: UndercoverDucksStats,
        },
        techstacks: [
            {
                icon: flaskIcon,
                link: "https://flask.palletsprojects.com/",
            },
            {
                icon: numpyIcon,
                link: "https://numpy.org/",
            },
            {
                icon: reactIcon,
                link: "https://react.dev/",
            },
            {
                icon: scssIcon,
                link: "https://sass-lang.com/",
            },
        ],
        deployed: [
            {
                link: "https://undercover-ducks.fly.dev/",
                description: "Web",
                icon: WebIcon,
            },
        ],
    },
    {
        name: "Guardian of the Dreamy World",
        description: "The evil dragon has arrived! Not only has it brought slimes, bats and disastrous fires, but also stolen everyone's good dreams, leaving only nightmares! The dreamy world needs you! In this role-playing game, you will be travelling towards the end, fighting bats and slimes, and defeat the dragon boss, to save everyone.",
        readme: "https://flamboyyy.itch.io/guardian-of-the-dreamy-world",
        code: "https://github.com/nknguyenhc/dreaming-dragons",
        images: {
            main: DragonStamp,
            left: DragonGameplay1,
            right: DragonGameplay2,
        },
        techstacks: [
            {
                icon: godotIcon,
                link: "https://godotengine.org/",
            },
        ],
        deployed: [
            {
                link: "https://flamboyyy.itch.io/guardian-of-the-dreamy-world",
                description: "itch.io",
                icon: ItchIcon,
            }
        ],
    }
];

export default function Projects(): JSX.Element {
    const [showIndex, setShowIndex] = useState<number>(0);
    const isDesktop = useViewportWidth();

    return <div className="projects" id="my-projects">
        <div className="home-section-title">My Projects</div>
        {projects.map((project, projectIndex) => (
            <Project 
                project={project} 
                key={projectIndex} 
                isShow={showIndex === projectIndex} 
                isStatic={showIndex <= projectIndex}
            />
        ))}
        {isDesktop && <Pagination
            leftPositionClass='project-arrow-left'
            rightPositionClass='project-arrow-right'
            indicatorPositionClass=''
            setIndex={setShowIndex}
            currIndex={showIndex}
            numOfItems={projects.length}
        />}
    </div>;
}

const Project = ({ project, isShow, isStatic }: {
    project: ProjectData,
    isShow: boolean,
    isStatic: boolean,
}): JSX.Element => {
    const isDesktop = useViewportWidth();
    const [indexOfImgShown, setIndexOfImgShown] = useState<number>(0);
    const dispatch = useAppDispatch();
    
    const handleImageClick = useCallback((image: string) => (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        dispatch(setImage({
            image,
            height: target.clientHeight,
            width: target.clientWidth,
            top: target.getBoundingClientRect().top,
            left: target.getBoundingClientRect().left,
        }));
    }, [dispatch]);

    return <div className={"project" + (isShow ? " project-show" : "") + (isStatic ? " project-static": "")}>
        <div className={"project-panel" + (isDesktop ? " project-left" : "")}>
            <div className="project-title">{project.name}</div>
            {!isDesktop && <div className="project-mobile-images-container">
                <div className="project-mobile-images">
                    {[project.images.main, project.images.left, project.images.right].map((image, imageIndex) => (
                        <div 
                            key={imageIndex} 
                            className={
                                "project-mobile-image" 
                                + ` project-mobile-image-shift-${imageIndex - indexOfImgShown}`
                            }
                            onClick={handleImageClick(image)}
                        >
                            <img src={image} alt="project demo" />
                        </div>
                    ))}
                </div>
                <Pagination 
                    leftPositionClass='project-mobile-image-arrow-left'
                    rightPositionClass='project-mobile-image-arrow-right'
                    indicatorPositionClass=''
                    setIndex={setIndexOfImgShown}
                    currIndex={indexOfImgShown}
                    numOfItems={3}
                />
            </div>}
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
        <div className={"project-panel" + (isDesktop ? " project-right" : "")}>
            {isDesktop && <div className="project-images">
                <div className="project-image project-image-main" onClick={handleImageClick(project.images.main)}>
                    <img src={project.images.main} alt="project logo" />
                </div>
                <div className="project-image-secondary">
                    <div className="project-image project-image-panel" onClick={handleImageClick(project.images.left)}>
                        <img src={project.images.left} alt="project demo" />
                    </div>
                    <div className="project-image project-image-panel" onClick={handleImageClick(project.images.right)}>
                        <img src={project.images.right} alt="project demo" />
                    </div>
                </div>
            </div>}
            <div className="project-techstacks">
                {project.techstacks.map(techstack => (
                    <a href={techstack.link} className="project-techstack" key={techstack.link}>
                        <img src={techstack.icon} alt="" />
                    </a>
                ))}
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