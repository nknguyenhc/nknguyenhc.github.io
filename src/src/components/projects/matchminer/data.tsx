import webIcon from '../../../assets/icons/web.png';
import iOSIcon from '../../../assets/icons/ios.png';
import androidIcon from '../../../assets/icons/android.png';

export const videoLink: string = "https://www.youtube.com/embed/Y3bpdRcZiCI";

type AvailablePlatform = {
    icon: string,
    link: string,
    text: string,
}

export const availablePlatforms: Array<AvailablePlatform> = [
    {
        icon: webIcon,
        link: "https://matchminer-d5ebcada4488.herokuapp.com/",
        text: "Web"
    },
    {
        icon: iOSIcon,
        link: "https://testflight.apple.com/join/zV9ppF8i",
        text: "iOS"
    },
    {
        icon: androidIcon,
        link: "https://appdistribution.firebase.dev/i/f520d9765baf5a95",
        text: "Android"
    }
]

export type ElaborationProps = {
    displayText: string,
    tooltipText: string,
};

export type ProjectMotivationProps = {
    text: string,
    elaboration: Array<ElaborationProps>,
};

export const projectMotivation: Array<ProjectMotivationProps> = [
    {
        text: "No social media pressure",
        elaboration: [
            {
                displayText: "No likes and shares",
                tooltipText: "Instead of the 'like' and 'share' functionalities that produce no more than superficial interaction, we hope to allow users to feel unpressured to share their interests and connect with like-minded individuals at a deeper level."
            },
            {
                displayText: "Decide who you share with",
                tooltipText: "We hope to"
            }
        ]
    },
    {
        text: "Interest sharing",
        elaboration: [
            {
                displayText: "Unpressured sharing",
                tooltipText: "We hope users are able to share their interests without the pressure of social media, through the ability to control their posts' visibility, and direct their posts towards others with the same interests via a system of tags."
            },
            {
                displayText: "High-quality communities",
                tooltipText: "Over time, we hope users are able to form high-quality communities where socialising and sharing are exclusive to those truly passionate about a hobby. This is done through a strict system of tags and group chats."
            }
        ]
    }
]