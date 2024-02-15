import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-5 flex justify-center items-center gap-2">
      <FaGithub className="mt-5 text-xl" />
      <a className="mt-5" href="https://github.com/Avijit07x" target="_blank">
        Avijit07x
      </a>
    </footer>
  );
};

export default Footer;
