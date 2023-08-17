import Logo from "./Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className=" flex gap-8 items-center justify-center flex-row h-[10vh] w-full mt-8 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <Logo />
            <p>
                Coded by <span className="text-accent">Fariz Ghani</span>
            </p>
            <span className="text-xl flex gap-4 ">
                <a
                    href="https://github.com/farizge"
                    className="hover:text-secondary"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/fariz-ghani-fuad"
                    className="hover:text-secondary"
                >
                    <FaLinkedin />
                </a>
            </span>
        </footer>
    );
}

export default Footer;
