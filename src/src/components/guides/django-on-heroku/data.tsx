import banner from '../../../assets/django-heroku-guide/banner.png';
import djangoReady from '../../../assets/django-heroku-guide/django-ready.png';
import heroku2FA from '../../../assets/django-heroku-guide/heroku-2FA.png';
import authenticatorApp from '../../../assets/django-heroku-guide/authenticator-app.jpeg';
import accSettings from '../../../assets/django-heroku-guide/heroku-acc-settings.png';
import requirementTxt from '../../../assets/django-heroku-guide/requirement-txt.png';
import procfile from '../../../assets/django-heroku-guide/Profile.png';
import runPy from '../../../assets/django-heroku-guide/run-py.png';
import createNewApp from '../../../assets/django-heroku-guide/create-new-app.png';
import deployButton from '../../../assets/django-heroku-guide/deploy-button.png';
import deploymentTab from '../../../assets/django-heroku-guide/deployment-tab.png';
import buildPack from '../../../assets/django-heroku-guide/project-path-buildpack.png';
import projectPathConfig from '../../../assets/django-heroku-guide/project-path-config.png';
import staticSettings from '../../../assets/django-heroku-guide/static-settings.png';
import whitenoiseMiddleware from '../../../assets/django-heroku-guide/whitenoise-middleware.png';
import debugFalse from '../../../assets/django-heroku-guide/debug-false.png';
import allowedHosts from '../../../assets/django-heroku-guide/allowed-hosts.png';
import secretKeySettings from '../../../assets/django-heroku-guide/secret-key-settings.png';
import secretKeyConfig from '../../../assets/django-heroku-guide/secret-key-config.png';
import sessionAndCSRFToken from '../../../assets/django-heroku-guide/session-and-csrf-token.png';
import herokuPostgreSQL from '../../../assets/django-heroku-guide/heroku-postgresql.png';
import herokuAddons from '../../../assets/django-heroku-guide/heroku-addons.png';
import dbConfig from '../../../assets/django-heroku-guide/db-config.png';
import dbSettings from '../../../assets/django-heroku-guide/database-settings.png';
import dbRequirements from '../../../assets/django-heroku-guide/db-requirements.png';
import awsConsole from '../../../assets/django-heroku-guide/aws-console.png';
import iamSearch from '../../../assets/django-heroku-guide/IAM-search.png';
import iamConsole from '../../../assets/django-heroku-guide/iam-console.png';
import s3FullAcess from '../../../assets/django-heroku-guide/s3-fullaccess.png';
import iamSelectUser from '../../../assets/django-heroku-guide/iam-select-user.png';
import iamCreateAccessKey from '../../../assets/django-heroku-guide/iam-create-access-key.png';
import iamKeyAccess from '../../../assets/django-heroku-guide/iam-key-access.png';
import iamKeyShow from '../../../assets/django-heroku-guide/iam-access-key-created.png';
import herokuIamAccess from '../../../assets/django-heroku-guide/heroku-iam-keys.png';
import S3Search from '../../../assets/django-heroku-guide/aws-s3-search.png';
import S3CreateBucket from '../../../assets/django-heroku-guide/s3-create-bucket.png';
import S3EnableAccess from '../../../assets/django-heroku-guide/s3-enable-access.png';
import herokuS3BucketName from '../../../assets/django-heroku-guide/heroku-s3-bucket-name.png';
import awsSettings from '../../../assets/django-heroku-guide/aws-settings.png';
import herokuRedis from '../../../assets/django-heroku-guide/heroku-redis.png';
import djangoRedis from '../../../assets/django-heroku-guide/django-redis.png';

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
                new Paragraph({
                    text: "For the rest of this guide, I will be referencing my own project, MatchMiner, where I previously deployed on Heroku. You can find the code for my project `https://github.com/nknguyenhc/SuperCellMates`. The setup for deployment is done in ~deploy~ branch (NOT main branch)."
                })
            ]
        },
        {
            header: "Project setup",
            body: [
                new Paragraph({
                    text: "First, you need to have the appropriate files for Heroku to recognise your framework as Django, and for your project to work properly once deployed. You will need a ~requirement.txt~ in your root folder to indicate that your project is run on Python, and for Heroku to install the appropriate packages to run your project."
                }),
                new Image({
                    src: requirementTxt,
                    caption: "My requirement.txt file"
                }),
                new Paragraph({
                    text: "Typically, you would need ~asgiref~, ~Django~, ~gunicorn~, ~sqlparse~, ~whitenoise~ to be indicated. ~whitenoise~ library is necessary for serving your static files from your server. ~pillow~ library is necessary for my server to analyse user-uploaded image. If your Django project is not so complicated, you can stick to these libraries. However, if your project includes data storage and websocket, the rest of the libraries are what you need. I will go through the rest of the libraries indicated and their usage."
                }),
                new Paragraph({
                    text: "Next, you need a ~Profile~ to indicate the command to start your project. Think about it this way: you are on a new computer, you just cloned your own project from Github, and now you want to start running the project on the new computer. What are the commands you need to run?"
                }),
                new Image({
                    src: procfile,
                    caption: "My Procfile file"
                }),
                new Paragraph({
                    text: "First you will need to migrate your Django model into the database on Heroku! The command ~python manage.py migrate~ will ignore migrations already applied (if you ever need to redeploy your project) and apply those that are not yet applied. When you have already successfully deployed your project for the first time, you should not be deleting the migrations and redo, you should only build on previous migrations. Take note that this is especially important! If you delete existing migrations, the new re-done migrations will be recognised as not having been applied to the database, and will be applied, which can cause your app to crash. Make sure that migrations you do during development and migrations in production are in sync."
                }),
                new Paragraph({
                    text: "Next, you need to set up your server by creating ~setup.py~ in your root folder and run ~python setup.py~. This is project-specific, you may not need this command if you do not need to run anything before deployment. For my project, we needed to set up our superuser accounts, as well as creating some tags for our website."
                }),
                new Paragraph({
                    text: "Finally, you need a command to start running your project. Take note that the conventional ~python manage.py runserver~ would not work. This is because Heroku does not run on so-called local host located at ~127.0.0.1~, and does not run on default port 8000. Each time you deploy your project, you are given a different port, which is indicated in the environment variables. You need to be able to read the ~PORT~ environment variable and run on that port. For that, I have set up ~run.py~ as follows:"
                }),
                new Image({
                    src: runPy,
                    caption: "My run.py file"
                }),
                new Paragraph({
                    text: "The file basically reads the ~PORT~ value from environment variables, and run Django server on host ~0.0.0.0~."
                }),
                new Paragraph({
                    text: "One thing to take note about the Django models is that ~DateTimeField~ may cause some issues. When migrated to default SQLite3 database, it is recognised as time-aware field, but when migrated to PostgreSQL (the setup for which is laid down in a section below), it gives a warning that the ~DateTimeField~ is time-naive, and refused to apply the migration. I have not found a way to indicate time-awareness on the field, so I just changed all the ~DateTimeField~ to ~FloatField~, which stores the number of seconds in epoch time. Yes, not a very good solution, but my project does not need characteristics of the DateTimeField anyway?"
                }),
            ]
        },
        {
            header: "Deploy on Heroku",
            body: [
                new Paragraph({
                    text: "Once your code is ready, you can start deploying on Heroku, by simply logging into your Heroku account, and in dashboard, click create new app."
                }),
                new Image({
                    src: createNewApp,
                    caption: "Heroku dashboard where you can start connecting to your Github repo and deploy."
                }),
                new Paragraph({
                    text: "Follow the instructions to get started, connect to your Github repository containing your code. If you set up correctly, the first two sections of your deploy tab should look something like this."
                }),
                new Image({
                    src: deploymentTab,
                    caption: "My first two sections of the deployment tab of my app."
                }),
                new Paragraph({
                    text: "Once ready, start deploying by clicking deploy under manual deploy as shown."
                }),
                new Image({
                    src: deployButton,
                    caption: "Press deploy to start deploying your project on Heroku."
                }),
                new Paragraph({
                    text: "Take note that it is not recommended to use automatic deployment. This is in case erronous code is merged into the branch for deployment. You would want to make sure that your code works perfectly fine before deploying the next version of your app. In addition, take note that you can specify the branch that you can deploy from. For my team, we chose branch ~deploy~ for deployment, since we have used ~main~ branch for development."
                }),
                new Paragraph({
                    text: "At this point, you may notice that the instructions I gave was to put your setup files in the root folder. However, your project may be similar to mine: there is a different folder for frontend and a different folder for backend. It is of course not ideal to create a new repo just for deployment. If you attempted to put your setup files in the root folder while your backend code is in a child folder, you would have received an error message from Heroku. To deploy from a specific folder, you would need to employ a build pack. To do so, go to your settings tab of your app on Heroku, under the section build packs, include the following:"
                }),
                new Image({
                    src: buildPack,
                    caption: "Build packs to be included in your Heroku deployed app."
                }),
                new Paragraph({
                    text: "The second one should already be in your app by default. The first one is the one allowing me to deploy from a specific folder. You can simply copy and paste the git link shown, and put it at the top of your build pack list, before the default Heroku build pack. Next, you would need to insert the ~PROJECT_PATH~ variable into the environment. To do so, under config vars sections, press 'reveal config var', and add the path to your root folder of your Django app to the value. For my project, we deploy from 'supercell_mates' folder, so the value we put in is ~supercell_mates/~"
                }),
                new Image({
                    src: projectPathConfig,
                    caption: "Project path config var",
                }),
                new Paragraph({
                    text: "Once you have done all of the above, your project would already be running on a Heroku-provided domain (somewhat), but some things might be off. You may notice that there are issues with styling and javascript, as well as data being deleted, and websocket not working (if your project includes websocket). I will be demonstrating below how to fix these issues."
                }),
            ]
        },
        {
            header: "Static files and settings",
            body: [
                new Paragraph({
                    text: "Unlike in development, in deployment, you need to specify a static file middleware to serve static files, such as CSS and Javascript files. In your ~settings.py~, you first need to make sure that your static file configuration during development is correct. Specifically, you need to indicate the correct ~STATIC_URL~ and ~STATIC_ROOT~."
                }),
                new Image({
                    src: staticSettings,
                    caption: "My static file settings."
                }),
                new Paragraph({
                    text: "~STATIC_URL~ is the url through which users on the web can access your static files. For example, if you have an ~index.js~ in your root static folder, users on the web can access it at ~/static/index.js~. The ~STATIC_ROOT~ configuration is especially important, it indicates the path to your folder containing all static files. You must have a ~BASE_DIR~ in front of it in order to indicate the correct path to your static files. You may refer to my repository if you do not know how to setup ~BASE_DIR~. If you have taken a closer look at the Heroku logs during build time of your app, it runs collect static on your static folder, the path to which is indicated by your ~STATIC_ROOT~ settings."
                }),
                new Paragraph({
                    text: "Next, you would need to indicate ~whitenoise~ as one of your middlewares. Whitenoise will serve static files from the static files collected during build time."
                }),
                new Image({
                    src: whitenoiseMiddleware,
                    caption: "My middleware list with whitenoise on top."
                }),
                new Paragraph({
                    text: "For Heroku to recognise and use whitenoise during production, you need to indicate ~whitenoise~ as one of the requirements in ~requirements.txt~."
                }),
                new Image({
                    src: requirementTxt,
                    caption: "requirements.txt with whitenoise indicated."
                }),
                new Paragraph({
                    text: "Once ready, you can redeploy your app, and your static files, including CSS and Javascript files, should be loaded properly."
                }),
                new Paragraph({
                    text: "You may be a hobbyist like me, and put your backend code publicly viewable on Github. That is totally fine, however, you need to make sure that your code is secure, so that even when a malicious party views your code, he will not be able to take control of your website. Take note that the following changes to ~settings.py~ will make your project not runnable on local compuater, but only on deployed host. First, you need to turn off debug mode by changing the value of ~DEBUG~ in ~settings.py~ to ~False~"
                }),
                new Image({
                    src: debugFalse,
                    caption: "Turn debug mode off by indicating DEBUG with False."
                }),
                new Paragraph({
                    text: "This way, when there are errors, especially 404 error, your server will respond with the 404 error HTML template (if none is provided, a default one is served). Configuring custom 404 template is out of the scope of this guide. For Django to work when debug mode is off, you must configure the list of allowed hosts."
                }),
                new Image({
                    src: allowedHosts,
                    caption: "List of allowed hosts."
                }),
                new Paragraph({
                    text: "The list generally only contains the domain that you deployed your project on. For my project, I used the domain given by Heroku, hence the string indicated in the list of allowed hosts."
                }),
                new Paragraph({
                    text: "Next, the secret key is an important piece of information that you do not want to expose to anyone. With the secret key, anyone can take control of your Django server. First, you need to indicate your ~SECRET_KEY~ as taken from the environment variables."
                }),
                new Image({
                    src: secretKeySettings,
                    caption: "Set secret key to be taken from the environment variables."
                }),
                new Paragraph({
                    text: "The custom environment variables on Heroku are taken from the config vars. Open your Heroku dashboard, under your project settings, under config vars, key in your secret key. Note that this secret key can be anything (of course it must be secure enough)."
                }),
                new Image({
                    src: secretKeyConfig,
                    caption: "Configure secret key on Heroku."
                }),
                new Paragraph({
                    text: "If your Django site is using user authentication and POST requests, you would need to configure session cookie and CSRF token cookie, respectively, for production. Add the following settings to your ~settings.py~:"
                }),
                new Image({
                    src: sessionAndCSRFToken,
                    caption: "Session and CSRF token settings for production."
                }),
                new Paragraph({
                    text: "Here the ~CSRF_TRUSTED_ORIGIN~ is the same domain that you deployed your Django project."
                }),
                new Paragraph({
                    text: "Now your project in production appears and behaves exactly the same as your local host (or at least, within the first day of your deployment ...)."
                })
            ]
        },
        {
            header: "Data storage",
            body: [
                new Paragraph({
                    text: "If you stick to Django's default data storage, which is SQLite3, you will only be able to store it for 1 day. That is because Heroku erase files created by your Django server everyday! Since SQLite3 is created only upon launch, you will not be able to keep the same SQLite3 for more than 1 day, and a new SQLite3 database is created everyday. Hence, you need to find a permanent data storage system. Here, I introduce to you Heroku's PostgreSQL plan."
                }),
                new Image({
                    src: herokuPostgreSQL,
                    caption: "Heroku PostgreSQL plan."
                }),
                new Paragraph({
                    text: "To configure PostgreSQL plan, head over to 'resources' tab of your app in Heroku dashboard, under addons, key in 'postgres', and choose to add Heroku Postgres to your app."
                }),
                new Image({
                    src: herokuAddons,
                    caption: "Heroku add-on list, where you can add postgreSQL."
                }),
                new Paragraph({
                    text: "It may take a few minutes to configure and provision a new database for you. Once it is done, the middle column indicates the environment variable that the information of the database is attached to. In my case, it is ~DATABASE~, so in my config vars, ~DATABASE~ is the config var that contains credentials to the database."
                }),
                new Image({
                    src: dbConfig,
                    caption: "Database config var in Heroku dashboard."
                }),
                new Paragraph({
                    text: "Caution! Do not share this config var with anyone not managing your project. This config var contains all credentials to your database, including database name, username and password. It should start with ~postgres://~. You may do the parsing of the value yourself if you know which part represents which, but you can also use the python library ~dj_database_url~ to parse the given value, and configure the database in your ~settings.py~. "
                }),
                new Image({
                    src: dbSettings,
                    caption: "My database settings in production using dj_database_url library."
                }),
                new Paragraph({
                    text: "For setup on Heroku to recognise ~dj_database_url~, you need to indicate it in ~requirements.txt~. You also need to indicate Django's postgreSQL library in order to read from and write to PostgreSQL database during production."
                }),
                new Image({
                    src: dbRequirements,
                    caption: "Requirements necessary to run PostgreSQL on Heroku, which are psycopg2 and dj_database_url"
                }),
                new Paragraph({
                    text: "Now, your project should function normally (or at least, parts that do not require image or file storage ...)."
                })
            ]
        },
        {
            header: "File storage",
            body: [
                new Paragraph({
                    text: "Heroku deletes any new file created after deployment everyday. This means that any user-uploaded files and images will be deleted after one day. Take note that Django does not store the entire file in SQL database, it only stores a reference of the file, and the file must still exist in the indicated path. Hence, you would need an external file storage system, so that user-uploaded file will not be deleted."
                }),
                new Paragraph({
                    text: "Heroku does not provide a file storage system service, hence I recommend to you Amazon S3 data storage service. Django directly supports Amazon S3 file storage, so you do not need to do too much to configure the file storage system."
                }),
                new Paragraph({
                    text: "First step is to create a AWS account with your email. Once done, from AWS main page, hover over your account and go to console."
                }),
                new Image({
                    src: awsConsole,
                    caption: "Sign into AWS console from the main page"
                }),
                new Paragraph({
                    text: "Once in the console, in the search bar on top, type 'IAM' and search. Click on IAM."
                }),
                new Image({
                    src: iamSearch,
                    caption: "Find and navigate to IAM console"
                }),
                new Paragraph({
                    text: "Click on 'users' on the right, and add a new IAM user."
                }),
                new Image({
                    src: iamConsole,
                    caption: "IAM console"
                }),
                new Paragraph({
                    text: "At step 1, you may indicate any username you would like. At step 2, choose attach policies direct, search for S3, and add 'AmazonS3FullAccess'."
                }),
                new Image({
                    src: s3FullAcess,
                    caption: "Provide S3 full access to the new IAM user",
                }),
                new Paragraph({
                    text: "Once you have confirmed creating the new iam user, click select the user in the main IAM console."
                }),
                new Image({
                    src: iamSelectUser,
                    caption: "Select the new IAM user from the main console"
                }),
                new Paragraph({
                    text: "Upon landing on the page to manage the new IAM user, click on creating a new access key."
                }),
                new Image({
                    src: iamCreateAccessKey,
                    caption: "Create a new access"
                }),
                new Paragraph({
                    text: "Since we are creating this key so that our Django application can access file storage, select the purpose of the key as for third-party usage."
                }),
                new Image({
                    src: iamKeyAccess,
                    caption: "Select purpose as third-party access"
                }),
                new Paragraph({
                    text: "Once done, copy and save the access key and secret key."
                }),
                new Image({
                    src: iamKeyShow,
                    caption: "Save keep the IAM access key and secret key"
                }),
                new Paragraph({
                    text: "Back to your app's dashboard on Heroku, add those 2 keys to the set of environment variables."
                }),
                new Image({
                    src: herokuIamAccess,
                    caption: "Put AWS IAM user access keys into the environment variables on Heroku"
                }),
                new Paragraph({
                    text: "Next, we need to go and create an S3 bucket for file storage. In AWS console, in the search bar on top, type 'S3' and search."
                }),
                new Image({
                    src: S3Search,
                    caption: "Search for S3 in AWS console"
                }),
                new Paragraph({
                    text: "Upon landing on the dashboard, click on create bucket."
                }),
                new Image({
                    src: S3CreateBucket,
                    caption: "Create a new S3 bucket"
                }),
                new Paragraph({
                    text: "You can keep all the default settings, however, ensure that you disable blocking access. This is so that your IAM user you created previously can access the bucket from your Django application"
                }),
                new Image({
                    src: S3EnableAccess,
                    caption: "Enable S3 bucket access"
                }),
                new Paragraph({
                    text: "Once all that is done, take note of your bucket name, and add that name to the list of environment variables to your Django application on Heroku."
                }),
                new Image({
                    src: herokuS3BucketName,
                    caption: "Add the S3 bucket name to the list of Heroku environment variables"
                }),
                new Paragraph({
                    text: "You have created an external file storage system! The last step is to point your Django application file storage system to the AWS S3 bucket you just created. In ~settings.py~, add the following lines."
                }),
                new Image({
                    src: awsSettings,
                    caption: "Add the these lines to your Django settings"
                }),
                new Paragraph({
                    text: "Where the environment variable names should match the names you created in Heroku dashboard. You may change the region name to the region you registered the bucket with. As simple as that, you may redeploy your app and observe that your user-uploaded files are no longer deleted everyday!"
                }),
            ],
        },
        {
            header: "Websocket configuration",
            body: [
                new Paragraph({
                    text: "Last but not least, websocket! If your project involves real-time updates such as instant messaging, you would need a redis host for your application. This is the main reason why I switched from Python Anywhere to Heroku. You would need to register a redis host with Heroku in order to set up websocket for your deployment. Here, I assume that you have set up redis host locally with Docker and have followed Django's tutorial to setup ASGI for websocket."
                }),
                new Paragraph({
                    text: "In your app's dashboard on Heroku, simply configure add-ons, and search for redis."
                }),
                new Image({
                    src: herokuRedis,
                    caption: "Add redis to your Django app on Heroku"
                }),
                new Paragraph({
                    text: "Once you have added redis to your app, you should see ~REDIS_URL~ as one of the environment variables on Heroku for your app. The last step is to indicate the redis host url as that provided by Heroku in ~settings.py~:"
                }),
                new Image({
                    src: djangoRedis,
                    caption: "Indicate redis url in settings as that provided by Heroku"
                }),
                new Paragraph({
                    text: "Remember to change any websocket connection instantiated in your js scripts from ~ws://~ to ~wss://~. This is so that your document connected via https can connect websocket through secure channel. With that, once redeployed, your websocket should work similar to your local development server. Congratulations! You have come to the end of this deployment guide."
                }),
            ],
        },
        {
            header: "References",
            body: [
                new UnorderedList({
                    list: [
                        "https://www.heroku.com/github-students",
                        "https://medium.com/quick-code/deploying-django-app-to-heroku-full-guide-6ff7252578d7",
                        "https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/",
                        "https://devcenter.heroku.com/articles/heroku-postgresql",
                    ]
                })
            ]
        }
    ]
}

export default data;