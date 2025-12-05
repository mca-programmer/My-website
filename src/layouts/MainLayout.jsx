import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;