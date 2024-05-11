import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.webp';
import instagramIcon from '../../assets/icons/instagram.png';
import telegramIcon from '../../assets/icons/telegram.png';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import phoneIcon from '../../assets/icons/phone.webp';
import emailIcon from '../../assets/icons/email.png';

type FooterItem = {
    text: string,
    href: string,
    newTab?: boolean,
};

type FooterColumn = {
    top: string,
    href?: string,
    items: Array<FooterItem>,
};

export const footerColumns: Array<FooterColumn> = [
    {
        top: 'Home',
        href: '/',
        items: [
            {
                text: "Resume",
                href: process.env.PUBLIC_URL + "/Resume.pdf",
                newTab: true,
            },
        ],
    },
    {
        top: 'Academics',
        items: [
            {
                text: "Modules",
                href: "/academics/modules",
            },
            {
                text: "TA Positions",
                href: "/academics/ta",
            },
        ],
    },
    {
        top: 'Projects',
        items: [
            {
                text: "MatchMiner",
                href: "/project/matchminer",
            },
            {
                text: "Coding Scheme Simulation",
                href: "/project/coding-scheme-simulation",
            },
            {
                text: "Quack NKN",
                href: "/project/quack-nkn",
            },
            {
                text: "Ultimate Tictactoe",
                href: "/project/ultimate-tictactoe",
            },
        ],
    },
    {
        top: "Guides",
        items: [
            {
                text: "Deploy Django on Heroku",
                href: "/guide/deploy-django-on-heroku"
            },
        ],
    },
];

type SocialLink = {
    image: string,
    href: string,
    text: string,
}

export const socialLinks: Array<SocialLink> = [
    {
        image: githubIcon,
        href: "https://github.com/nknguyenhc",
        text: "Github",
    },
    {
        image: linkedinIcon,
        href: "https://www.linkedin.com/in/nguyen-khoi-nguyen-6279341a8/",
        text: "Linkedin",
    },
    {
        image: instagramIcon,
        href: "https://www.instagram.com/n_khoi_nguyen/",
        text: "Instagram",
    },
    {
        image: telegramIcon,
        href: "https://t.me/n_knguyen",
        text: "Telegram",
    },
    {
        image: whatsappIcon,
        href: "https://wa.me/+6587390544",
        text: "Whatsapp",
    },
];

export const contactLinks: Array<SocialLink> = [
    {
        image: phoneIcon,
        href: "tel:+6587390544",
        text: "+65 87390544",
    },
    {
        image: emailIcon,
        href: "mailto:nknguyentdn@gmail.com",
        text: "nknguyentdn@gmail.com",
    },
];