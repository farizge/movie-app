import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
    return (
        <main className="flex flex-col items-center gap-8 mx-4 my-10">
            <Header />
            <Outlet />
            <div className="magicpattern fixed left-0 top-48 -z-50 opacity-70 blur-3xl"></div>
            <div className="magicpattern2 fixed -right-40 top-0 -z-50 opacity-20 blur-3xl"></div>
        </main>
    );
}

export default Layout;
