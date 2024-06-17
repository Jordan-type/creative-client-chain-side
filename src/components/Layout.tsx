import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            {/* <div className=" overflow-hidden flex flex-col justify-center h-screen   "> */}
                <Header/>
                    {children}
                <Footer />
            {/* </div> */}
        </>
    );
};

export default Layout;
