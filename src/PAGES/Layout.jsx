import { Outlet } from "react-router-dom";
import Header from './../components/Header';

const Layout = () => {
    return (
        <div className="min-h-screen w-screen bg-gray-100 font-rubik dark:bg-gray-900 dark:text-gray-100">
            <Header />
            <div className="container  px-5 md:px-0 mx-auto">
                <Outlet/>
            </div>
        </div>
    );
}
export default Layout;