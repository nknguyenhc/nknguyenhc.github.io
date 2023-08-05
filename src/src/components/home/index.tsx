import LandingBanner from "./sections/landing-banner";
import Projects from "./sections/projects";
import Stepper, { StepperStep } from '../stepper/index';

export default function Home(): JSX.Element {
    const stepperSteps: Array<StepperStep> = [
        {
            displayText: 'Landing',
            id: 'landing-banner'
        },
        {
            displayText: 'My projects',
            id: 'my-projects'
        }
    ]
    return <div className="home">
        <LandingBanner />
        <Projects />
        <Stepper steps={stepperSteps} scrollOffset={0} />
    </div>;
}