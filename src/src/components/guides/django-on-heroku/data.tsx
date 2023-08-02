import banner from '../../../assets/django-heroku-guide/banner.png';
import djangoReady from '../../../assets/django-heroku-guide/django-ready.png';
import heroku2FA from '../../../assets/django-heroku-guide/heroku-2FA.png';
import authenticatorApp from '../../../assets/django-heroku-guide/authenticator-app.jpeg';
import accSettings from '../../../assets/django-heroku-guide/heroku-acc-settings.png';

type DjangoHerokuGuide = {
    header: string,
    banner: string,
    sections: Array<Section>
}

export class Paragraph {
    text: string;
    constructor({ text }: {
        text: string
    }) {
        this.text = text;
    }
}

export class Image {
    src: string;
    caption: string;
    constructor({ src, caption }: {
        src: string, 
        caption: string
    }) {
        this.src = src;
        this.caption = caption;
    }
}

export class UnorderedList {
    list: Array<string>;
    constructor({ list }: {
        list: Array<string>
    }) {
        this.list = list;
    }
}

export type Section = {
    header: string,
    body: Array<Paragraph | Image | UnorderedList>,
}

const data: DjangoHerokuGuide = {
    header: "Deploy Django project on Heroku",
    banner: banner,
    sections: [
        {
            header: "Introduction",
            body: [
                new Paragraph({
                    text: "You have finished your Django project. Great! But you are unsure how to show off your work? Having had a look on the Internet around potential sites that can host your project, but don't know how to set up? I am here to help you! Before getting started, please take note that Heroku is not cheap. For my Orbital project, it costs USD 15 per month to keep the project running! I redeemed the Heroku student offer, which offsets USD 13 per month, so if you don't have one, it is going to hurt your pocket. The cost break down is as follows:"
                }),
                new UnorderedList({
                    list: [
                        "Basic Dyno: USD 7/mo",
                        "Redis Host: USD 3/mo",
                        "PostgreSQL: USD 5/mo"
                    ]
                }),
                new Paragraph({
                    text: "As listed above, there are a few components that you need to setup in order to deploy your project. First, you need a dyno, for which the cheapest plan on Heroku is USD 7/mo. If your project requires data storage, such as user credentials and activities, you will need a PostgreSQL plan, for which the cheapest plan is USD 5/mo. If your project involves websocket, being for data streaming, or instant messaging, etc, you will need a Redis host, for which the cheapest plan is USD 3/mo. If you need to store data in the form of image, you will need an external file storage system as well. I will be introducing to you AWS S3 data storage plan, which incurs cost per use. For my project with around 20 users within a month, and not-so-optimal image fetching frequency, it costs around USD 0.5/mo. With that, if you are ready, let's dive in!"
                }),
                new Image({
                    src: djangoReady,
                    caption: "Your Django project is ready."
                }),
            ]
        },
        {
            header: "Create a Heroku account",
            body: [
                new Paragraph({
                    text: "Of course, the first step is to create a Heroku account! You can simply sign up for one on Heroku's website `https://www.heroku.com/`. Fill in your email address and other compulsory fields. After which, you should receive a confirmation email to your indicated email address. Simply click on the link to confirm your email and complete account creation by setting your password upon opening the link."
                }),
                new Paragraph({
                    text: "Upon logging into your account for the first time. You may be prompted to setup 2FA for your account. Simply follow the instructions. Personally, I would choose to setup using One-Time Password Generator, since I can choose my own authenticator app to set up."
                }),
                new Image({
                    src: heroku2FA,
                    caption: "Choose One-Time Password Generator for Heroku 2FA"
                }),
                new Paragraph({
                    text: "To find an authenticator app, simply type 'authenticator' in your phone's app store, being Apple Store or Google Play Store. Personally, I use this app found on Apple Store since I do not need to pay a subscription fee for its authentication functionality."
                }),
                new Image({
                    src: authenticatorApp,
                    caption: "I personally use this app which does not require a subscription fee."
                }),
                new Paragraph({
                    text: "Simply open the app, scan the QR code on Heroku. Key in the verification code that appears on your authenticator app, and you are set!"
                }),
                new Paragraph({
                    text: "Once you have set up your Heroku account, you can already start managing existing projects that are shared with you. However, if you wish to deploy your own project, you will need to attach a credit/debit card to your account. Get your credit/debit card ready, and upon landing at your dashboard, click on the human icon at the top right corner, and click on account settings."
                }),
                new Image({
                    src: accSettings,
                    caption: "Heroku account settings."
                }),
                new Paragraph({
                    text: "You can easily find where you should enter your credit/debit card under 'Billing' tab. Take note that at this point, Heroku will not charge you yet. You will only get charged once you start using its deployment services."
                }),
                new Paragraph({
                    text: "At this point, you may also want to redeem Heroku's student offer. Please take note that once you redeem this offer, it will be credited to your account for the next 12 months. You will not be able to transfer the discount to a later time, or redeem it again while you are still in the same school! Get your school email account ready, and follow this link `https://www.heroku.com/github-students/signup`. Follow the steps outlined, and wait for confirmation. Unlike Github student offer, Heroku takes a few days to process your request before granting the offer to you. After your request is approved, under 'Billing' tab of account settings page, you will see your costs offset by the offer accordingly."
                }),
            ]
        },
        {
            header: "References",
            body: [
                new UnorderedList({
                    list: [
                        "https://www.heroku.com/github-students"
                    ]
                })
            ]
        }
    ]
}

export default data;