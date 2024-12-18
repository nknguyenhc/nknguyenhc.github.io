import djangoIcon from '../assets/icons/django.png';
import reactIcon from '../assets/icons/react.png';
import typescriptIcon from '../assets/icons/typescript.svg';
import nodejsIcon from '../assets/icons/nodejs.png';
import flaskIcon from '../assets/icons/flask.png';
import sqlIcon from '../assets/icons/sql.png';
import cppIcon from '../assets/icons/cpp.png';
import javaIcon from '../assets/icons/java.png';
import firebaseIcon from '../assets/icons/firebase.png';
import alpineIcon from '../assets/icons/alpine.svg';
import scssIcon from '../assets/icons/scss.png';
import emotionIcon from '../assets/icons/emotion-css.png';
import pugIcon from '../assets/icons/pug.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import bootstrapIcon from '../assets/icons/bootstrap.png';
import godotIcon from '../assets/icons/godot.png';
import fastApiIcon from '../assets/icons/fastapi.svg';
import dockerIcon from '../assets/icons/docker.webp';
import azureIcon from '../assets/icons/azure.png';
import awsIcon from '../assets/icons/aws.png';
import openAiIcon from '../assets/icons/openai.png';
import puppeteerIcon from '../assets/icons/puppeteer.png';
import stabilityIcon from '../assets/icons/stability.png';
import angularIcon from '../assets/icons/angular.png';
import javascriptIcon from '../assets/icons/javascript.webp';
import graphqlIcon from '../assets/icons/graphql.png';
import pythonIcon from '../assets/icons/python.png';
import telegramIcon from '../assets/icons/telegram.png';
import flutterIcon from '../assets/icons/flutter.png';
import numpyIcon from '../assets/icons/numpy.svg';
import cIcon from '../assets/icons/c.png';
import expressIcon from '../assets/icons/express.png';
import pytorchIcon from '../assets/icons/pytorch.png';
import herokuIcon from '../assets/icons/heroku.png';
import pipIcon from '../assets/icons/pip.png';
import anacondaIcon from '../assets/icons/anaconda.png';
import npmIcon from '../assets/icons/npm.svg';
import gradleIcon from '../assets/icons/gradle.png';
import mavenIcon from '../assets/icons/maven.png';
import awsRoute53Icon from '../assets/icons/aws-route-53.png';
import awsCertificateManagerIcon from '../assets/icons/aws-certificate-manager.png';
import awsLoadBalancerIcon from '../assets/icons/aws-load-balancer.png';
import awsEc2Icon from '../assets/icons/aws-ec2.png';
import awsS3Icon from '../assets/icons/amazons3.png';
import azureCosmosDbIcon from '../assets/icons/azure-cosmos-db.png';
import azureContainerRegistryIcon from '../assets/icons/azure-container-registry.png';
import azureBlobStorageIcon from '../assets/icons/azure-blob-storage.png';
import azureAppServiceIcon from '../assets/icons/azure-app-service.png';
import geminiIcon from '../assets/icons/gemini.webp';
import googleCloudIcon from '../assets/icons/google-cloud.png';
import googleCloudVmIcon from '../assets/icons/google-cloud-vm.png';
import googleCloudLoadBalancerIcon from '../assets/icons/google-cloud-load-balancer.svg';
import googleCloudDnsIcon from '../assets/icons/google-cloud-dns.png';
import googleCloudStorageIcon from '../assets/icons/google-cloud-storage.webp';
import googleCloudRunIcon from '../assets/icons/google-cloud-run.png';
import muiIcon from '../assets/icons/mui.png';
import mongodbIcon from '../assets/icons/mongodb.svg';
import cloudflareIcon from '../assets/icons/cloudflare.png';
import nginxIcon from '../assets/icons/nginx.png';
import redisIcon from '../assets/icons/redis.webp';
import rabbitmqIcon from '../assets/icons/rabbitmq.png';
import kamateraIcon from '../assets/icons/kamatera.png';
import springbootIcon from '../assets/icons/springboot.png';
import vueIcon from '../assets/icons/vue.png';

export type TechStackType = {
    image: string,
    link: string,
    note: string,
}

export const alpine: TechStackType = {
    image: alpineIcon,
    link: "https://alpinejs.dev/",
    note: "Alpine.js",
};
export const anaconda: TechStackType = {
    image: anacondaIcon,
    link: "https://www.anaconda.com/",
    note: "Anaconda",
};
export const angular: TechStackType = {
    image: angularIcon,
    link: "https://angular.io/",
    note: "Angular",
};
export const aws: TechStackType = {
    image: awsIcon,
    link: "https://aws.amazon.com/",
    note: "AWS",
};
export const awsCertificateManager: TechStackType = {
    image: awsCertificateManagerIcon,
    link: "https://aws.amazon.com/certificate-manager/",
    note: "AWS Certificate Manager",
};
export const awsEc2: TechStackType = {
    image: awsEc2Icon,
    link: "https://aws.amazon.com/pm/ec2/",
    note: "AWS EC2",
};
export const awsLoadBalancer: TechStackType = {
    image: awsLoadBalancerIcon,
    link: "https://aws.amazon.com/elasticloadbalancing/",
    note: "AWS Load Balancer",
};
export const awsRoute53: TechStackType = {
    image: awsRoute53Icon,
    link: "https://aws.amazon.com/route53/",
    note: "AWS Route 53",
};
export const awsS3: TechStackType = {
    image: awsS3Icon,
    link: "https://aws.amazon.com/pm/serv-s3/",
    note: "AWS S3",
};
export const azure: TechStackType = {
    image: azureIcon,
    link: "https://azure.microsoft.com/en-us",
    note: "Azure",
};
export const azureAppService: TechStackType = {
    image: azureAppServiceIcon,
    link: "https://azure.microsoft.com/en-us/products/app-service",
    note: "Azure App Service",
};
export const azureBlobStorage: TechStackType = {
    image: azureBlobStorageIcon,
    link: "https://azure.microsoft.com/en-us/products/storage/blobs",
    note: "Azure Blob Storage",
};
export const azureContainerRegistry: TechStackType = {
    image: azureContainerRegistryIcon,
    link: "https://azure.microsoft.com/en-us/products/container-registry",
    note: "Azure Container Registry",
};
export const azureCosmosDb: TechStackType = {
    image: azureCosmosDbIcon,
    link: "https://azure.microsoft.com/en-gb/free/cosmos-db/search/",
    note: "Azure Cosmos DB",
};
export const bootstrap: TechStackType = {
    image: bootstrapIcon,
    link: "https://getbootstrap.com/",
    note: "Bootstrap",
};
export const c: TechStackType = {
    image: cIcon,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    note: "C",
};
export const cloudflare: TechStackType = {
    image: cloudflareIcon,
    link: "https://cloudflare.com/",
    note: "Cloudflare",
};
export const cpp: TechStackType = {
    image: cppIcon,
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    note: "C++",
};
export const django: TechStackType = {
    image: djangoIcon,
    link: "https://www.djangoproject.com/",
    note: "Django",
};
export const docker: TechStackType = {
    image: dockerIcon,
    link: "https://www.docker.com/",
    note: "Docker",
};
export const emotion: TechStackType = {
    image: emotionIcon,
    link: "https://emotion.sh/docs/introduction",
    note: "EmotionCSS",
};
export const express: TechStackType = {
    image: expressIcon,
    link: "https://expressjs.com/",
    note: "Express.js",
};
export const fastApi: TechStackType = {
    image: fastApiIcon,
    link: "https://fastapi.tiangolo.com/",
    note: "FastAPI",
};
export const firebase: TechStackType = {
    image: firebaseIcon,
    link: "https://firebase.google.com/",
    note: "Firebase",
};
export const flask: TechStackType = {
    image: flaskIcon,
    link: "https://flask.palletsprojects.com/",
    note: "Flask",
};
export const flutter: TechStackType = {
    image: flutterIcon,
    link: "https://flutter.dev/",
    note: "Flutter",
};
export const gemini: TechStackType = {
    image: geminiIcon,
    link: "https://ai.google.dev/",
    note: "Gemini",
}
export const gradle: TechStackType = {
    image: gradleIcon,
    link: "https://gradle.org/",
    note: "Gradle",
};
export const godot: TechStackType = {
    image: godotIcon,
    link: "https://godotengine.org/",
    note: "Godot",
};
export const googleCloud: TechStackType = {
    image: googleCloudIcon,
    link: "https://cloud.google.com/",
    note: "Google Cloud",
};
export const googleCloudDns: TechStackType = {
    image: googleCloudDnsIcon,
    link: "https://cloud.google.com/dns",
    note: "Google Cloud DNS",
};
export const googleCloudLoadBalancer: TechStackType = {
    image: googleCloudLoadBalancerIcon,
    link: "https://cloud.google.com/load-balancing",
    note: "Google Cloud Load Balancer",
};
export const googleCloudRun: TechStackType = {
    image: googleCloudRunIcon,
    link: "https://cloud.google.com/run",
    note: "Google Cloud Run",
};
export const googleCloudStorage: TechStackType = {
    image: googleCloudStorageIcon,
    link: "https://cloud.google.com/storage",
    note: "Google Cloud Storage",
};
export const googleCloudVm: TechStackType = {
    image: googleCloudVmIcon,
    link: "https://cloud.google.com/compute",
    note: "Google Cloud VM",
};
export const graphql: TechStackType = {
    image: graphqlIcon,
    link: "https://graphql.org/",
    note: "GraphQL",
};
export const heroku: TechStackType = {
    image: herokuIcon,
    link: "https://www.heroku.com/",
    note: "Heroku",
};
export const java: TechStackType = {
    image: javaIcon,
    link: "https://www.java.com/en/",
    note: "Java",
};
export const javascript: TechStackType = {
    image: javascriptIcon,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    note: "Javascript",
};
export const jsDomManipulation: TechStackType = {
    image: javascriptIcon,
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
    note: "JS DOM manipulation",
};
export const kamatera: TechStackType = {
    image: kamateraIcon,
    link: "https://kamatera.com/",
    note: "Kamatera",
};
export const maven: TechStackType = {
    image: mavenIcon,
    link: "https://maven.apache.org/",
    note: "Maven",
};
export const mongodb: TechStackType = {
    image: mongodbIcon,
    link: "https://mongodb.com/",
    note: "MongoDB",
};
export const mui: TechStackType = {
    image: muiIcon,
    link: "https://mui.com/",
    note: "Material UI",
};
export const nginx: TechStackType = {
    image: nginxIcon,
    link: "https://nginx.org/",
    note: "Nginx",
};
export const nodejs: TechStackType = {
    image: nodejsIcon,
    link: "https://nodejs.org/en",
    note: "Node.js",
};
export const npm: TechStackType = {
    image: npmIcon,
    link: "https://www.npmjs.com/",
    note: "NPM",
};
export const numpy: TechStackType = {
    image: numpyIcon,
    link: "https://numpy.org/",
    note: "Numpy",
};
export const openai: TechStackType = {
    image: openAiIcon,
    link: "https://platform.openai.com/",
    note: "OpenAI",
};
export const pip: TechStackType = {
    image: pipIcon,
    link: "https://pip.pypa.io/en/stable/",
    note: "PIP",
};
export const pug: TechStackType = {
    image: pugIcon,
    link: "https://pugjs.org/",
    note: "PUG HTML",
};
export const puppeteer: TechStackType = {
    image: puppeteerIcon,
    link: "https://pptr.dev/",
    note: "Puppeteer",
};
export const python: TechStackType = {
    image: pythonIcon,
    link: "https://www.python.org/",
    note: "Python",
};
export const pytorch: TechStackType = {
    image: pytorchIcon,
    link: "https://pytorch.org/",
    note: "Pytorch",
};
export const react: TechStackType = {
    image: reactIcon,
    link: "https://react.dev/",
    note: "React",
};
export const rabbitmq: TechStackType = {
    image: rabbitmqIcon,
    link: "https://rabbitmq.com/",
    note: "RabbitMQ",
};
export const redis: TechStackType = {
    image: redisIcon,
    link: "https://redis.io/",
    note: "Redis",
};
export const scss: TechStackType = {
    image: scssIcon,
    link: "https://sass-lang.com/",
    note: "SCSS",
};
export const springboot: TechStackType = {
    image: springbootIcon,
    link: "https://spring.io/projects/spring-boot",
    note: "Spring Boot",
};
export const sql: TechStackType = {
    image: sqlIcon,
    link: "https://en.wikipedia.org/wiki/SQL",
    note: "SQL",
};
export const stabilityai: TechStackType = {
    image: stabilityIcon,
    link: "https://platform.stability.ai/",
    note: "StabilityAI",
};
export const tailwind: TechStackType = {
    image: tailwindIcon,
    link: "https://tailwindcss.com/",
    note: "Tailwind",
};
export const telegram: TechStackType = {
    image: telegramIcon,
    link: "https://www.npmjs.com/package/node-telegram-bot-api",
    note: "Telegram",
};
export const typescript: TechStackType = {
    image: typescriptIcon,
    link: "https://www.typescriptlang.org/",
    note: "Typescript",
};
export const vue: TechStackType = {
    image: vueIcon,
    link: "https://vuejs.org/",
    note: "Vue",
};
