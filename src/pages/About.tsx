import AboutHero from "../components/sections/about/AboutHero";
import AboutInfo from "../components/sections/about/AboutInfo";
import Community from "../components/sections/about/Community";
import Founder from "../components/sections/about/Founder";
import Values from "../components/sections/about/Values";
import Vision from "../components/sections/about/Vision";

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutInfo />
            <Vision />
            <Values />
            <Founder />
            <Community />
        </div>
    );
};
export default About;
