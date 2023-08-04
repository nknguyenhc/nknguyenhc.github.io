import LandingBanner from "./sections/landing-banner";
import Projects from "./sections/projects";

export default function Home(): JSX.Element {
    return <div>
        <LandingBanner />
        <Projects />
    </div>
}