import Blogs from "../components/sections/home/Blogs";
import Expertise from "../components/sections/home/Expertise";
import Hero from "../components/sections/home/Hero";
import Quality from "../components/sections/home/Quality";
import Services from "../components/sections/home/Services";

const Home = () => {
    return (
        <div className="font-garamond">
            <Hero />
            <Services />
            <Expertise />
            <Quality />
            <Blogs />
        </div>
    );
};
export default Home;
