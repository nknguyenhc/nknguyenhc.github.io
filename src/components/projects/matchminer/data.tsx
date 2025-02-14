import webIcon from '../../../assets/icons/web.png';
import iOSIcon from '../../../assets/icons/ios.png';
import androidIcon from '../../../assets/icons/android.png';
import githubIcon from '../../../assets/icons/github.png';
import djangoIcon from '../../../assets/icons/django.png';
import javascriptIcon from '../../../assets/icons/javascript.webp';
import reactIcon from '../../../assets/icons/react.png';
import cssIcon from '../../../assets/icons/css.png';
import flutterIcon from '../../../assets/icons/flutter.png';
import herokuIcon from '../../../assets/icons/heroku.png';
import postgresIcon from '../../../assets/icons/postgres.png';
import amazons3Icon from '../../../assets/icons/amazons3.png';
import firebaseIcon from '../../../assets/icons/firebase.png';
import xcodeIcon from '../../../assets/icons/xcode.png';
import flyioIcon from '../../../assets/icons/flyio.png';

export const videoLink: string = 'https://www.youtube.com/embed/sUtJHqzU9dc';

type AvailablePlatform = {
  icon: string;
  link: string;
  text: string;
};

export const availablePlatforms: Array<AvailablePlatform> = [
  {
    icon: webIcon,
    link: 'https://matchminer.fly.dev/',
    text: 'Web',
  },
  {
    icon: iOSIcon,
    link: 'https://testflight.apple.com/join/zV9ppF8i',
    text: 'iOS',
  },
  {
    icon: androidIcon,
    link: 'https://appdistribution.firebase.dev/i/f520d9765baf5a95',
    text: 'Android',
  },
];

export type ElaborationProps = {
  displayText: string;
  tooltipText: string;
};

export type ProjectMotivationProps = {
  text: string;
  elaboration: Array<ElaborationProps>;
};

export const projectMotivation: Array<ProjectMotivationProps> = [
  {
    text: 'No social media pressure',
    elaboration: [
      {
        displayText: 'No likes and shares',
        tooltipText:
          "Instead of the 'like' and 'share' functionalities that produce no more than superficial interaction, we hope to allow users to feel unpressured to share their interests and connect with like-minded individuals at a deeper level.",
      },
      {
        displayText: 'Decide who you share with',
        tooltipText:
          'We hope to enable users to create their own cellars of niche hobbies and interests, and choose who they want to share their hobbies with.',
      },
    ],
  },
  {
    text: 'Interest sharing',
    elaboration: [
      {
        displayText: 'Unpressured sharing',
        tooltipText:
          "We hope users are able to share their interests without the pressure of social media, through the ability to control their posts' visibility, and direct their posts towards others with the same interests via a system of tags.",
      },
      {
        displayText: 'High-quality communities',
        tooltipText:
          'Over time, we hope users are able to form high-quality communities where socialising and sharing are exclusive to those truly passionate about a hobby. This is done through a strict system of tags and group chats.',
      },
    ],
  },
  {
    text: 'Social interaction',
    elaboration: [
      {
        displayText: 'Group chat themes',
        tooltipText:
          'As avid board gamers we hope to implement themes and social deduction games that group chats can make use of to customise themselves according to their topic of interest, in a future instalment.',
      },
    ],
  },
];

export type TechStack = {
  name: string;
  icon: string;
  elaboration: string;
};

export const techStacks: Array<TechStack> = [
  {
    name: 'Django',
    icon: djangoIcon,
    elaboration:
      'We use Django for template rendering and API, as well as serving static files.',
  },
  {
    name: 'React',
    icon: reactIcon,
    elaboration:
      'React is used to make dynamic webpages and control states within the pages.',
  },
  {
    name: 'Javascript',
    icon: javascriptIcon,
    elaboration:
      'Pure javascript creates interaction in HTML templates directly served from server.',
  },
  {
    name: 'CSS',
    icon: cssIcon,
    elaboration: 'CSS is used to format and beautify our pages.',
  },
  {
    name: 'Flutter',
    icon: flutterIcon,
    elaboration: 'Flutter is used to develop mobile app frontend.',
  },
  {
    name: 'Github',
    icon: githubIcon,
    elaboration: 'We host our code and collaborate on Github.',
  },
  {
    name: 'Heroku',
    icon: herokuIcon,
    elaboration:
      'Heroku is used to host our Django server, providing API, HTML templates and static files.',
  },
  {
    name: 'PostgreSQL',
    icon: postgresIcon,
    elaboration: 'User-generated data is stored in a PostgreSQL database.',
  },
  {
    name: 'Amazon S3',
    icon: amazons3Icon,
    elaboration: 'Amazon S3 allows us to store user-uploaded images and files.',
  },
  {
    name: 'Firebase',
    icon: firebaseIcon,
    elaboration: 'Firebase is used to deploy Android (testing) versions.',
  },
  {
    name: 'XCode',
    icon: xcodeIcon,
    elaboration:
      'XCode is used to deploy iOS (testing) versions on Test Flight.',
  },
  {
    name: 'Flyio',
    icon: flyioIcon,
    elaboration:
      'Flyio is another host we hope to use in the next release.The deployment environment has been set up, however product is not yet ready for the next release.',
  },
];
