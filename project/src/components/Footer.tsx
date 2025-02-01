// import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="z-[1] bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className='flex '>
              <h2 className="text-2xl font-bold">NCICST 2025</h2>
              <img height={'30px'} width={'30px'} src="../../images/favicon_white.png" alt="logo" />
            </div>
            <p className="mt-2 text-gray-400">Shaping the Future of Education</p>
          </div>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NCICST 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}