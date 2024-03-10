import { Github, Linkedin, Twitter } from 'lucide-react';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8">
          <ul className="flex mb-6 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-gray-600 hover:text-gray-700 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out dark:bg-gray-800 dark:text-gray-400 p-1.5"
                aria-label="Twitter"
                href="https://twitter.com/Meistervedasys"
              >
                <Twitter size={20} />
              </a>
            </li>
            <li className="ml-4">
              <a
                className="flex justify-center items-center text-gray-600 hover:text-gray-700 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out dark:bg-gray-800 dark:text-gray-400 p-1.5"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/gustavo-cabezal-sys/"
              >
                <Linkedin size={20} />
              </a>
            </li>

            <li className="ml-4">
              <a
                className="flex justify-center items-center text-gray-600 hover:text-gray-700 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out dark:bg-gray-800 dark:text-gray-400 p-1.5"
                aria-label="Github"
                href="https://github.com/meisterveda/portfolio"
              >
                <Github size={20} />
              </a>
            </li>
          </ul>
          <div className="text-sm text-gray-700 mr-4 dark:text-slate-400">
            Made by{' '}
            <a
              className="text-blue-600 hover:underline dark:text-gray-200"
              href="https://meisterveda.com/"
            >
              Meisterveda
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
