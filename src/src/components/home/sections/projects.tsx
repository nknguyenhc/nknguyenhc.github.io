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
import Terminal1 from '../../../assets/projects/terminal-1.png';
import Terminal2 from '../../../assets/projects/terminal-2.png';
import Terminal3 from '../../../assets/projects/terminal-3.png';
import QuackNkn1 from '../../../assets/projects/quack-nkn-1.png';
import QuackNkn2 from '../../../assets/projects/quack-nkn-2.png';
import QuackNkn3 from '../../../assets/projects/quack-nkn-3.png';
import NeuralCatsIcon from '../../../assets/projects/neuralcats.png';
import NeuralCatsUi from '../../../assets/projects/neuralcats-UI.png';
import NeuralCatsUi2 from '../../../assets/projects/neuralcats-UI2.png';
import ParodyGenerator1 from '../../../assets/projects/parody-generator-sample.png';
import ParodyGenerator2 from '../../../assets/projects/parody-generator-sample-2.png';
import ParodyGenerator3 from '../../../assets/projects/parody-generator-sample-3.png';
import WATcherWATcher from '../../../assets/projects/WATcher-WATcher.png';
import WATcherLogin from '../../../assets/projects/WATcher-login.png';
import WATcherTp from '../../../assets/projects/WATcher-tp.png';
import XiangqiWelcome from '../../../assets/projects/Xiangqi-welcome.png';
import XiangqiGameplay from '../../../assets/projects/Xiangqi-gameplay.png';
import XiangqiBoard from '../../../assets/projects/Xiangqi-board.png';
import YpsBrowser from '../../../assets/projects/Yps-browser.png';
import YpsIcon from '../../../assets/projects/Yps-icon.png';
import YpsPopup from '../../../assets/projects/Yps-popup.png';
import SudokuSolverSolved from '../../../assets/projects/sudoku-solver-solved.png';
import SudokuSolverUnsolved from '../../../assets/projects/sudoku-solver-unsolved.png';
import SudokuSolverKiller from '../../../assets/projects/sudoku-solver-killer.png';
import UltimateTicTacToeWelcome from '../../../assets/projects/ultimate-tictactoe-welcome.png';
import UltimateTicTacToeLocal from '../../../assets/projects/ultimate-tictactoe-local.png';
import UltimateTicTacToeBrowser from '../../../assets/projects/ultimate-tictactoe-browser.png';
import MinesweepererCodingame from '../../../assets/projects/minesweeper-codingame.png';
import MinesweepererEasy from '../../../assets/projects/minesweeper-easy.jpg';
import MinesweepererHard from '../../../assets/projects/minesweeper-hard.jpg';
import LumninousZephyrBanner from '../../../assets/projects/luminous-zephyr-banner.jpg';
import LuminousZephyrHome from '../../../assets/projects/luminous-zephyr-home.png';
import LuminousZephyrSample from '../../../assets/projects/luminous-zephyr-sample.jpg';
import TextAnalyserHome from '../../../assets/projects/text-analyser-home.png';
import TextAnalyserTextCount from '../../../assets/projects/text-analyser-text-count.png';
import TextAnalyserDayIndivCount from '../../../assets/projects/text-analyser-day-indiv-frequency.png';
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
import telegramIcon from '../../../assets/icons/telegram.png';
import chromeWebStoreIcon from '../../../assets/icons/chrome-web-store.png';
import {
    TechStackType,
    alpine,
    angular,
    aws,
    awsS3,
    azure,
    azureCosmosDb,
    cpp,
    django,
    docker,
    emotion,
    express,
    fastApi,
    firebase,
    flask,
    flutter,
    gemini,
    godot,
    googleCloud,
    graphql,
    java,
    jsDomManipulation,
    maven,
    mui,
    numpy,
    openai,
    pug,
    puppeteer,
    python,
    react,
    scss,
    sql,
    stabilityai,
    telegram,
    typescript
} from '../../../constants/techstack';

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
    techstacks: Array<TechStackType>,
    deployed: Array<DeployData>,
    period: string,
}

const projects: Array<ProjectData> = [
    {
        name: "WATcher",
        description: "WATcher is an application to monitor software development projects. We support displaying issues and pull requests in a consolidated, interactive dashboard, with various filters for the user to highlight one part of the project.\nWe also support preset views, with \"currently active\" view to highlight the work of contributors towards the current milestone, and \"contributions\" view to highlight the total work of contributors.",
        readme: "https://github.com/CATcher-org/WATcher?tab=readme-ov-file#watcher",
        code: "https://github.com/CATcher-org/WATcher",
        images: {
            main: WATcherWATcher,
            left: WATcherLogin,
            right: WATcherTp,
        },
        techstacks: [
            angular,
            typescript,
            graphql,
        ],
        deployed: [
            {
                link: "https://catcher-org.github.io/WATcher/",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Jan 2024 - present",
    },
    {
        name: "Quack NKN",
        description: "Have you ever wanted to track when a particular job opening will be open for application? Or when a particular information is out? Fret not! My Telegram bot sends you screenshots of those websites to you at the frequency you want, either everyday, every week, or once. My bot also has an accompanying reminder feature if you wish to reminder yourselves with tasks related to your website trackers.",
        readme: "https://github.com/nknguyenhc/quack-nkn?tab=readme-ov-file#quack-nkn",
        code: "https://github.com/nknguyenhc/quack-nkn",
        images: {
            main: QuackNkn1,
            left: QuackNkn2,
            right: QuackNkn3,
        },
        techstacks: [
            telegram,
            puppeteer,
            typescript,
            express,
            sql,
            pug,
            scss,
            alpine,
            aws,
        ],
        deployed: [
            {
                link: "https://t.me/website_tracker_bot",
                description: "Telegram",
                icon: telegramIcon,
            },
            {
                link: "https://quacknkn.click",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Oct 2023 - Jun 2024",
    },
    {
        name: "Youtube Playlist Shuffle",
        description: "Listen to Youtube music frequently? Youtube shuffling only randomises the first video, but play in order for the second video onwards.\nAdd this extension to your browser! We will automatically shuffle playlists.\n1. Generate a fixed order for one full cycle, ensuring that all songs are played within one cycle.\n2. Allow disabling shuffling or stop at the last song for playlists you indicate.\n3. Press next to go to the next random song.",
        readme: "https://github.com/nknguyenhc/Youtube-playlist-shuffle?tab=readme-ov-file#youtube-playlist-shuffle",
        code: "https://github.com/nknguyenhc/Youtube-playlist-shuffle",
        images: {
            main: YpsIcon,
            left: YpsBrowser,
            right: YpsPopup,
        },
        techstacks: [
            jsDomManipulation,
        ],
        deployed: [
            {
                link: "https://chromewebstore.google.com/detail/youtube-playlist-shuffle/chapgjhgjhkfifgfiodmcjadieejfalc",
                description: "Chrome Web Store",
                icon: chromeWebStoreIcon,
            }
        ],
        period: "Jan 2024 - Jun 2024",
    },
    {
        name: "Text Analyser",
        description: "Want to get more insights into your Telegram chats? Fret not! Upload your chats in exported HTML files to my website and get more insights.",
        readme: "https://github.com/nknguyenhc/text-analyser?tab=readme-ov-file#text-analyser",
        code: "https://github.com/nknguyenhc/text-analyser",
        images: {
            main: TextAnalyserHome,
            left: TextAnalyserTextCount,
            right: TextAnalyserDayIndivCount,
        },
        techstacks: [
            react,
            typescript,
            scss,
            mui,
        ],
        deployed: [
            {
                link: "https://nknguyenhc.github.io/text-analyser/",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Jun 2024 - Jul 2024",
    },
    {
        name: "MatchMiner",
        description: "While we may wish to share our interests online, we all at times get the anxiety about the number of likes and comments. This stifles our desire to share our interests with others online.\nOur app is set out to exactly tackle that! Beyond the absence of \"like\" and \"share\" functionalities, we allow users to curate their own cellars of niche hobbies and connect with like-minded others, through a system of pre-defined tags. Through the same system, users can easily find like-minded others. We hope to create an environment where you feel at ease sharing your interests and find others with the same interests.",
        readme: "https://matchminer.fly.dev/about",
        code: "https://github.com/nknguyenhc/SuperCellMates",
        images: {
            main: MatchMinerLogo,
            left: MatchMinerWeb,
            right: MatchMinerMobile,
        },
        techstacks: [
            django,
            react,
            typescript,
            scss,
            sql,
            flutter,
            awsS3,
        ],
        deployed: [
            {
                link: "https://matchminer.fly.dev/",
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
        period: "May 2023 - Feb 2024",
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
            godot,
        ],
        deployed: [
            {
                link: "https://flamboyyy.itch.io/guardian-of-the-dreamy-world",
                description: "itch.io",
                icon: ItchIcon,
            }
        ],
        period: "Sep 2022 - Dec 2022",
    }
];

const algorithms: Array<ProjectData> = [
    {
        name: "Xiangqi engine",
        description: "We attempted at making a Xiangqi using principal variation search as the core algorithm.\nBoard representation is done using a 2D array of objects, exploiting OOP features. Board evaluation makes use of material value, piece activity and special activity.\nMove is generated with 3 labels: capture, quiet and check. Move is ordered using various heuristics to first score a move, then order by score.\nSearch routine is enhanced with transposition table and quiescence search.",
        readme: "https://github.com/nknguyenhc/CS3263-project?tab=readme-ov-file#cs3263-project",
        code: "https://github.com/nknguyenhc/CS3263-project",
        images: {
            main: XiangqiBoard,
            left: XiangqiWelcome,
            right: XiangqiGameplay,
        },
        techstacks: [
            python,
        ],
        deployed: [],
        period: "Mar 2024 - Apr 2024",
    },
    {
        name: "Ultimate tictactoe",
        description: "The game of ultimate tictactoe is played on a 9x9 board. The board is divided into 3x3 small boards, where players have to win the small boards to construct their lines in the overall board. Each player's move determines the small board that the opponent has to move in on the next move.\nI explored various algorithms to play the game. The most prominent, requiring the least effort to code, is Monte Carlo Tree Search. Reinforcement learning algorithms, including Q-learning and SARSA, requires more tuning and does not perform as well.\nI managed to use java-to-javascript transpiler plugin to display the algorithm on this website.",
        readme: "https://github.com/nknguyenhc/ultimate-tictactoe?tab=readme-ov-file#ultimate-tictactoe",
        code: "https://github.com/nknguyenhc/ultimate-tictactoe",
        images: {
            main: UltimateTicTacToeWelcome,
            left: UltimateTicTacToeBrowser,
            right: UltimateTicTacToeLocal,
        },
        techstacks: [
            java,
            maven,
        ],
        deployed: [
            {
                link: "/project/ultimate-tictactoe",
                icon: WebIcon,
                description: "This site",
            },
        ],
        period: "Apr 2024 - present",
    },
    {
        name: "Minesweeperer",
        description: "Have you ever thought about completing a minesweeper game within seconds? That is exactly what my algorithm is set out to do!\nThe game of minesweeper is a classic problem of knowledge representation. The agent continually synthesise new knowledge to derive positions of mines and safe cells. Upon opening cells, the agent is updated and continues synthesising new knowledge.\nPuppeteer was used to control the browser and derive numbers. HTML classes and canvas colours were read to derive the cell numbers.",
        readme: "https://github.com/nknguyenhc/minesweeperer?tab=readme-ov-file#minesweeperer",
        code: "https://github.com/nknguyenhc/minesweeperer",
        images: {
            main: MinesweepererHard,
            left: MinesweepererEasy,
            right: MinesweepererCodingame,
        },
        techstacks: [
            puppeteer,
            typescript,
        ],
        deployed: [],
        period: "May 2024 - Aug 2024",
    },
    {
        name: "Sudoku Solver",
        description: "Sudoku belongs to the class of constraint-satisfaction problem. Domain is first reduced according to the numbers in the same row, column and sub-board. Minimum remaining value heuristic to determine the next cell to try values. Boards and domains are deep-copied as backtracking strategy.\nI created a website for you to try out my algorithm.",
        readme: "https://github.com/nknguyenhc/sudoku-solver?tab=readme-ov-file#sudoku-solver",
        code: "https://github.com/nknguyenhc/sudoku-solver",
        images: {
            main: SudokuSolverSolved,
            left: SudokuSolverUnsolved,
            right: SudokuSolverKiller,
        },
        techstacks: [
            python,
            react,
            typescript,
            fastApi,
            scss,
            azure,
        ],
        deployed: [
            {
                link: "https://sudoku-solution.azurewebsites.net/",
                icon: WebIcon,
                description: "Web",
            },
        ],
        period: "Feb 2024 - Apr 2024",
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
            cpp,
            express,
            react,
            emotion,
            docker,
            azure,
        ],
        deployed: [
            {
                link: "https://coding-scheme-simulation.azurewebsites.net/",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Jul 2023 - Jan 2024",
    },
];

const hackathons: Array<ProjectData> = [
    {
        name: "Terminal AI Live",
        description: "Terminal AI Live competition is an AI competition where teams coded algorithms to compete in head-to-head battles, in multiple-round group round-robin format.\nOur team designed an algorithm where we put less walls on the side but more defensive interceptors and turrets, so that our troops can easily attack.\nCombined with our algorithm's predictive power, we were able to clinch third place in the competition (Fall APAC 2023).",
        readme: "https://github.com/nknguyenhc/Terminal-Lostkids?tab=readme-ov-file#terminal-lostkids-python-2l-aet",
        code: "https://github.com/nknguyenhc/Terminal-Lostkids",
        images: {
            main: Terminal1,
            left: Terminal2,
            right: Terminal3,
        },
        techstacks: [
            python,
        ],
        deployed: [],
        period: "Oct 2023",
    },
    {
        name: "Payday Digital Wallet",
        description: "Imagine a world where everyone can securely manage their finances with confidence. We aim to create a safe, accessible and user-friendly digital wallet.\nBesides our own authentication system, we integrate our system with Stripe, which is also used for pay-in and pay-out. OTP is used for transactions for better security. Moreover, we employed Stripe AI insights to provide users with risk assessments of transactions. Lastly, we implemented guardian linking, which allows the guardian to be notified of the user's activities.\nOur team was shortlisted for the finals.",
        readme: "https://devpost.com/software/payday-digital-wallet",
        code: "https://github.com/Vanessamae23/project007backend",
        images: {
            main: Payday1,
            left: Payday2,
            right: Payday3,
        },
        techstacks: [
            express,
            react,
            firebase,
        ],
        deployed: [
            {
                link: "https://drive.google.com/drive/folders/16v7VBmBWC6Bvl2IMpt3x84GLOGJOiC9y",
                description: "apk file",
                icon: APKIcon,
            },
        ],
        period: "Sep 2023",
    },
    {
        name: "Luminous Zephyr",
        description: "We often find ourselves scrolling endlessly searching for the perfect product to get. Whether it is a gift for others or something we genuinely need, we are lost in the plethora of choices and often find ourselves difficult to decide what to purchase.\nShopping for products should not be a hassle! With AI technology and the vast variety of options on the TikTok Shop, there must be a better way to find exactly what we want with just natural spoken language.\nWe, Lost Kids, have set on the journey to discover solutions to enhance shopping experiences!",
        readme: "https://devpost.com/software/luminous-zephyr",
        code: "https://github.com/nknguyenhc/luminous-zephyr",
        images: {
            main: LumninousZephyrBanner,
            left: LuminousZephyrHome,
            right: LuminousZephyrSample,
        },
        techstacks: [
            react,
            fastApi,
            gemini,
            googleCloud,
        ],
        deployed: [
            {
                link: "https://luminous-zephyr.web.app/",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Jun 2023 - Jul 2023",
    },
    {
        name: "Parody Generator",
        description: "The inspiration behind Parody Generator lies in our desire to revolutionise the music video industry. Imagine if you could generate an entire music video just at the touch of your fingers. We observed that there was a demand for such services, but there was no convenient way of doing so and the user has to have a certain level of coding knowledge. Hence, we decided to create and deploy a website that will allow the user to automate this entire process.\nThe user can simply upload a youtube link, confirm the video title, and wait! Our website will then generate a full music video with accompanying subtitles for the user to view and download.",
        readme: "https://github.com/nknguyenhc/HacknRoll2024?tab=readme-ov-file#hacknroll2024",
        code: "https://github.com/nknguyenhc/HacknRoll2024",
        images: {
            main: ParodyGenerator1,
            left: ParodyGenerator2,
            right: ParodyGenerator3,
        },
        techstacks: [
            openai,
            stabilityai,
            fastApi,
            react,
        ],
        deployed: [],
        period: "Jan 2024",
    },
    {
        name: "NeuralCats",
        description: "As NUS students, we all feel that NUS sometimes does not provide enough practices for us for exams. Often times, we only have 1-2 past year papers that barely help us assess whether we are ready for the exams.\nSome of us do try to use ChatGPT to consolidate our understanding. However, it does only provide explanation to our question, but does not provide further questions to check our understanding if we do not know how to craft our prompts.\nUsing the power of OpenAI, we hope to systematically generate quizzes that check our understanding of the content taught in our modules.",
        readme: "https://github.com/nknguyenhc/NeuralCats?tab=readme-ov-file#neuralcats",
        code: "https://github.com/nknguyenhc/Neuralcats",
        images: {
            main: NeuralCatsIcon,
            left: NeuralCatsUi,
            right: NeuralCatsUi2,
        },
        techstacks: [
            fastApi,
            azureCosmosDb,
            react,
            emotion,
            docker,
            azure,
            openai,
            typescript,
        ],
        deployed: [],
        period: "Nov 2023 - Dec 2023",
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
            flask,
            numpy,
            react,
            scss,
            sql,
        ],
        deployed: [
            {
                link: "https://undercover-ducks.fly.dev/",
                description: "Web",
                icon: WebIcon,
            },
        ],
        period: "Oct 2023",
    },
];

export default function Projects(): JSX.Element {
    const [showIndex, setShowIndex] = useState<number>(0);
    const [algoShowIndex, setAlgoShowIndex] = useState<number>(0);
    const [hackathonShowIndex, setHackathonShowIndex] = useState<number>(0);
    const isDesktop = useViewportWidth();

    return <div className="projects-container">
        <div className="projects" id="my-projects">
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
        </div>
        <div className="projects" id="my-algorithms">
            <div className="home-section-title">My Algorithms</div>
            {algorithms.map((algorithm, algorithmIndex) => (
                <Project
                    project={algorithm}
                    key={algorithmIndex}
                    isShow={algoShowIndex === algorithmIndex}
                    isStatic={algoShowIndex <= algorithmIndex}
                />
            ))}
            {isDesktop && <Pagination
                leftPositionClass='project-arrow-left'
                rightPositionClass='project-arrow-right'
                indicatorPositionClass=''
                setIndex={setAlgoShowIndex}
                currIndex={algoShowIndex}
                numOfItems={algorithms.length}
            />}
        </div>
        <div className="projects" id="hackathons">
            <div className="home-section-title">Hackathons & Competitions</div>
            {hackathons.map((hackathon, hackathonIndex) => (
                <Project
                    project={hackathon}
                    key={hackathonIndex}
                    isShow={hackathonShowIndex === hackathonIndex}
                    isStatic={hackathonShowIndex <= hackathonIndex}
                />
            ))}
            {isDesktop && <Pagination
                leftPositionClass='project-arrow-left'
                rightPositionClass='project-arrow-right'
                indicatorPositionClass=''
                setIndex={setHackathonShowIndex}
                currIndex={hackathonShowIndex}
                numOfItems={hackathons.length}
            />}
        </div>
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
            <div className="project-period">{project.period}</div>
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
                        <img src={techstack.image} alt="" />
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