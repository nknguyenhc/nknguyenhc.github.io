import quackNknIcon from '../../../assets/projects/quack-nkn-logo.png';
import telegramIcon from '../../../assets/icons/telegram.png';
import webIcon from '../../../assets/icons/web.png';
import puppeteerIcon from '../../../assets/icons/puppeteer.png';
import typescriptIcon from '../../../assets/icons/typescript.svg';

export default function QuackNkn(): JSX.Element {
    return <div className="quack-nkn">
        <div className="quack-nkn-title">Quack NKN</div>
        <LandingBanner />
        <div className="quack-nkn-details">
            <Readme />
            <FeedbackForm />
        </div>
    </div>;
}

const LandingBanner = (): JSX.Element => (
    <div className="quack-nkn-landing">
        <div className="quack-nkn-landing-icon">
            <img src={quackNknIcon} alt="" />
        </div>
        <div className="quack-nkn-landing-links">
            <a
                href="https://t.me/website_tracker_bot"
                target="_blank"
                rel="noreferrer"
                className="quack-nkn-landing-link"
            >
                <img src={telegramIcon} alt="" />
            </a>
            <a
                href="https://nknguyenhc.alwaysdata.net/"
                target="_blank" 
                rel="noreferrer"
                className="quack-nkn-landing-link"
            >
                <img src={webIcon} alt="" />
            </a>
        </div>
    </div>
);

type TechStackType = {
    name: string,
    description: string,
    link: string,
    icon: string,
};

const techstacks: Array<TechStackType> = [
    {
        name: "Puppeteer",
        description: "Puppeteer is capable of launching a Chrome browser in headless mode (i.e. without a browser actually being launched). With its knowledge of the internals of chrome, it can be easily used to navigate through a page and take a screenshot.",
        link: "https://pptr.dev/",
        icon: puppeteerIcon,
    },
    {
        name: "Telegram",
        description: "Telegram provides its bot API and the accompanying elaborate documentation over its npm package node-telegram-bot-api.",
        link: "https://www.npmjs.com/package/node-telegram-bot-api",
        icon: telegramIcon,
    },
    {
        name: "Typescript",
        description: "Typed version of Javascript (Nodejs). Arguably, Python is a more popular choice of language for Telegram bot. I chose Typescript due to its type hint and quick access to node modules' documentation. Furthermore, Puppeteer is only available on Nodejs.",
        link: "https://www.typescriptlang.org/",
        icon: typescriptIcon,
    },
];

const Readme = (): JSX.Element => (
    <div className="quack-nkn-readme">
        <div>
            Have you ever wanted to track a particular website? Especially those with internships?
            Personally, I always wanted to apply to those internship positions as soon as they are open.
            But too lazy to open them everyday/week? That's why I developed this bot!
        </div>
        <div className="quack-nkn-readme-techstacks">
            <div>Here are the notable techstacks I have used:</div>
            <div className="quack-nkn-readme-techstacks-list">
                {techstacks.map(techstack => (
                    <div className="quack-nkn-readme-techstacks-list-item" key={techstack.name}>
                        <a 
                            className="quack-nkn-readme-techstacks-list-item-label"
                            href={techstack.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="small-img-container">
                                <img src={techstack.icon} alt="" />
                            </div>
                            <div>{techstack.name}</div>
                        </a>
                        <div>{techstack.description}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const FeedbackForm = (): JSX.Element => (
    <iframe src="https://nknguyenhc.alwaysdata.net/feedback" className="quack-nkn-feedback" title="Quack Nkn Feedback" />
);
