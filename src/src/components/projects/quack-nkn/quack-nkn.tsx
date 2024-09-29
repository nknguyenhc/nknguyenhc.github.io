import quackNknIcon from '../../../assets/projects/quack-nkn-logo.png';
import telegramIcon from '../../../assets/icons/telegram.png';
import webIcon from '../../../assets/icons/web.png';
import puppeteerIcon from '../../../assets/icons/puppeteer.png';
import typescriptIcon from '../../../assets/icons/typescript.svg';
import { useScrollPosition } from '../../../utils/scroll';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useViewportWidth, { useWindowDimensions } from '../../../utils/viewport';

export default function QuackNkn(): JSX.Element {
    return <div className="quack-nkn">
        <div className="quack-nkn-title">Quack NKN</div>
        <LandingBanner />
        <div className="quack-nkn-details">
            <Readme />
            <FeedbackForm />
        </div>
        <Features />
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
                href="https://quack-nkn.nknguyenhc.net"
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
    <iframe src="https://quack-nkn.nknguyenhc.net/feedback" className="quack-nkn-feedback" title="Quack Nkn Feedback" />
);

const Features = (): JSX.Element => {
    const scrollPosition = useScrollPosition();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const isDesktop = useViewportWidth();

    const padding = useMemo(() => 40, []);
    const [staticHeight, setStaticHeight] = useState<number>(0);
    const [dynamicHeight, setDynamicHeight] = useState<number>(0);

    const staticRef = useRef<HTMLDivElement>(null);
    const staticPosition = useMemo(() => 
        scrollPosition - (staticRef.current ? staticRef.current.getBoundingClientRect().top : 1) 
            - window.scrollY, [scrollPosition]);
    
    const dynamicRef = useRef<HTMLDivElement>(null);
    const dynamicPosition = useMemo(() => isDesktop
        ? scrollPosition - (dynamicRef.current ? dynamicRef.current.getBoundingClientRect().top : 1) - window.scrollY
        : - (dynamicRef.current ? dynamicRef.current.getBoundingClientRect().top : -1) - dynamicHeight
            + windowHeight, [isDesktop, scrollPosition, dynamicHeight, windowHeight]);

    const techstackScrollBreakpoints = useMemo(() => ({
        mid: 200,
        end: 400,
    }), []);
    const techstackTranslateDistance = useMemo(() => 10, []);

    const frameCount = useMemo(() => 150, []);
    const frames = useMemo<Array<string>>(() => {
        const toFrameNumber = (i: number): string => '0'.repeat(2 - Math.floor(Math.log(i) / Math.log(10))) + i;
        return Array.from(Array(frameCount).keys())
            .map(i => `${process.env.PUBLIC_URL}/videos/quack-nkn-tracker/frame-${toFrameNumber(i + 1)}.jpg`);
    }, [frameCount]);
    const scrollBreakpoints = useMemo(() => ({
        start: 200,
        translate: 800,
        morph: 1400,
        fade: 4400,
        end: 5000,
    }), []);
    const picsRef = useRef<HTMLDivElement>(null);
    const [translateDistance, setTranslateDistance] = useState<number>(0);

    const [picDim, setPicDim] = useState<{
        height: number,
        width: number,
    }>({
        height: 0,
        width: 0,
    });

    const setBlockHeights = useCallback(() => {
        setStaticHeight(staticRef.current!.children[0].clientHeight);
        setDynamicHeight(dynamicRef.current!.children[0].clientHeight);
    }, []);

    const processPicDim = useCallback(() => {
        if (picDim.height !== 0) {
            return;
        }
        const picWidth = (picsRef.current!.children[0] as HTMLImageElement).width;
        const picHeight = (picsRef.current!.children[0] as HTMLImageElement).height;
        setPicDim({
            height: picHeight,
            width: picWidth,
        });
    }, [picDim]);

    useEffect(() => {
        setTranslateDistance(windowWidth / 2 - picDim.width / 2 - padding);
    }, [windowWidth, picDim, padding]);

    useEffect(() => {
        setBlockHeights();
        window.addEventListener('resize', setBlockHeights);
        return () => window.removeEventListener('resize', setBlockHeights);
    }, [setBlockHeights]);

    return <div className="quack-nkn-features">
        <div
            ref={staticRef}
            className="quack-nkn-features-static-container"
            style={{
                height: staticHeight,
            }}
        >
            <div
                className="quack-nkn-features-block quack-nkn-features-static"
                style={{
                    position: ((isDesktop ? staticPosition > 0 : staticPosition > staticHeight - windowHeight && staticPosition !== -1)
                            && staticPosition < scrollBreakpoints.fade)
                        ? 'fixed'
                        : undefined,
                    top: isDesktop ? 0 : '',
                    bottom: isDesktop ? '' : 0,
                }}
            >
                <div className="quack-nkn-features-text">
                    <div
                        className="quack-nkn-features-techstacks"
                        style={{
                            transform: `translateX(${
                                staticPosition <= 0 || staticPosition > techstackScrollBreakpoints.end
                                ? '0px'
                                : staticPosition > 0 && staticPosition <= techstackScrollBreakpoints.mid
                                ? `${staticPosition / techstackScrollBreakpoints.mid * techstackTranslateDistance}px`
                                : `${(techstackScrollBreakpoints.end - staticPosition) / (techstackScrollBreakpoints.end - techstackScrollBreakpoints.mid) * techstackTranslateDistance}px`
                            })`,
                        }}
                    >
                        {techstacks.map(techstack => (
                            <div key={techstack.name} className="small-img-container">
                                <img src={techstack.icon} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="quack-nkn-features-description">
                        <div className="quack-nkn-features-description-title">Reminders</div>
                        <div className="quack-nkn-features-description-details">
                            <div>Add your reminders, and the bot will deliver the reminders to you on your requested times.</div>
                            <ul>
                                <li><code>/add</code></li>
                                <li><code>/reminder</code></li>
                                <li><code>&lt;your reminder&gt;</code></li>
                                <li><code>&lt;your frequency&gt;</code></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <video
                    src={process.env.PUBLIC_URL + "/videos/quack-nkn-reminder.mp4"}
                    className="quack-nkn-features-video"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    onCanPlay={setBlockHeights}
                />
            </div>
        </div>
        <div
            ref={dynamicRef}
            className="quack-nkn-features-dynamic-container"
            style={{
                height: dynamicHeight + scrollBreakpoints.end,
            }}
        >
            <div
                className="quack-nkn-features-block quack-nkn-features-dynamic"
                style={{
                    position: dynamicPosition > 0 && dynamicPosition < scrollBreakpoints.end
                        ? 'fixed'
                        : dynamicPosition >= scrollBreakpoints.end
                        ? 'absolute'
                        : 'relative',
                    top: isDesktop && dynamicPosition <= scrollBreakpoints.end ? 0 : '',
                    bottom: (!isDesktop || dynamicPosition >= scrollBreakpoints.end) ? 0 : '',
                }}
            >
                <div className="quack-nkn-features-text">
                    <div
                        className="quack-nkn-features-techstacks"
                        style={{
                            transform: `translateX(${
                                dynamicPosition <= 0 || dynamicPosition > techstackScrollBreakpoints.end
                                ? '0px'
                                : dynamicPosition > 0 && dynamicPosition <= techstackScrollBreakpoints.mid
                                ? `${dynamicPosition / techstackScrollBreakpoints.mid * techstackTranslateDistance}px`
                                : `${(techstackScrollBreakpoints.end - dynamicPosition) / (techstackScrollBreakpoints.end - techstackScrollBreakpoints.mid) * techstackTranslateDistance}px`
                            })`,
                        }}
                    >
                        {techstacks.map(techstack => (
                            <div className="small-img-container" key={techstack.name}>
                                <img src={techstack.icon} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="quack-nkn-features-description">
                        <div className="quack-nkn-features-description-title">Website trackers</div>
                        <div className="quack-nkn-features-description-details">
                            <div>Add the website you want to track, and the bot will send you screenshots on your requested times.</div>
                            <ul>
                                <li><code>/add</code></li>
                                <li><code>/track</code></li>
                                <li><code>&lt;your website URL&gt;</code></li>
                                <li><code>&lt;your tracking details&gt;</code></li>
                                <li><code>&lt;your time & frequency&gt;</code></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="quack-nkn-features-pics-background"
                    style={{
                        zIndex: dynamicPosition > scrollBreakpoints.start ? 1 : -1,
                        backgroundColor: dynamicPosition > scrollBreakpoints.start && dynamicPosition <= scrollBreakpoints.morph
                            ? `rgba(0, 0, 0, ${(dynamicPosition - scrollBreakpoints.start) / (scrollBreakpoints.translate - scrollBreakpoints.start)})`
                            : dynamicPosition > scrollBreakpoints.morph && dynamicPosition <= scrollBreakpoints.fade
                            ? 'rgb(0, 0, 0)'
                            : dynamicPosition > scrollBreakpoints.fade && dynamicPosition <= scrollBreakpoints.end
                            ? `rgba(0, 0, 0, ${(scrollBreakpoints.end - dynamicPosition) / (scrollBreakpoints.end - scrollBreakpoints.fade)})`
                            : '',
                    }}
                />
                <div
                    className="quack-nkn-features-pics"
                    ref={picsRef}
                    style={{
                        position: isDesktop ? undefined : 'relative',
                        height: picDim.height,
                        width: picDim.width,
                    }}
                >
                    {frames.map((frame, i) => (
                        <img
                            src={frame}
                            alt=""
                            className="quack-nkn-features-pics-frame"
                            style={{
                                top: isDesktop ? `70px` : 0,
                                right: isDesktop ? dynamicPosition > scrollBreakpoints.translate && dynamicPosition <= scrollBreakpoints.morph
                                    ? (dynamicPosition - scrollBreakpoints.translate) / (scrollBreakpoints.morph - scrollBreakpoints.translate) * translateDistance + padding
                                    : dynamicPosition <= scrollBreakpoints.translate || dynamicPosition > scrollBreakpoints.end
                                    ? padding
                                    : dynamicPosition > scrollBreakpoints.fade && dynamicPosition <= scrollBreakpoints.end
                                    ? (scrollBreakpoints.end - dynamicPosition) / (scrollBreakpoints.end - scrollBreakpoints.fade) * translateDistance + padding
                                    : translateDistance + padding : 0,
                                zIndex: (dynamicPosition <= scrollBreakpoints.morph && i === 1)
                                        || (dynamicPosition > scrollBreakpoints.fade && i === frameCount - 1)
                                    ? 2
                                    : (dynamicPosition - scrollBreakpoints.morph) / (scrollBreakpoints.fade - scrollBreakpoints.morph) > i / frameCount
                                        && (dynamicPosition - scrollBreakpoints.morph) / (scrollBreakpoints.fade - scrollBreakpoints.morph) < (i + 1) / frameCount
                                    ? 2
                                    : -1
                            }}
                            onLoad={processPicDim}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>;
};
