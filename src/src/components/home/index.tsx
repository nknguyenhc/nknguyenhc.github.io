import LandingBanner from "./sections/landing-banner";
import Projects from "./sections/projects";
import Stepper, { StepperStep } from '../stepper/index';
import Awards from "./sections/awards";
import Experience from "./sections/experience";
import Activities from "./sections/activities";

export default function Home(): JSX.Element {
    const stepperSteps: Array<StepperStep> = [
        {
            displayText: 'Landing',
            id: 'landing-banner'
        },
        {
            displayText: 'My projects',
            id: 'my-projects'
        },
        {
            displayText: 'Hackathons/Competitions',
            id: 'hackathons',
        },
        {
            displayText: 'Experience',
            id: 'experience',
        },
        {
            displayText: 'Awards',
            id: "awards"
        },
        {
            displayText: 'Activities',
            id: 'activities',
        },
    ]
    return <div className="home">
        <LandingBanner />
        <Projects />
        <Experience />
        <Awards />
        <Activities />
        <Stepper steps={stepperSteps} scrollOffset={0} />
    </div>;
}