// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="relative">
//       {/* Hero section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[600px] bg-cover bg-center"
//         style={{ backgroundImage: 'url("/images/clg-main.png")' }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
//           >
//             NCICST 2025
//           </motion.h1>
//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="mx-auto mt-6 max-w-lg text-xl text-gray-300 sm:max-w-3xl"
//           >
//             National Conference on Intelligent Computing and Secure Technologies
//           </motion.p>
//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="mt-2 text-lg text-gray-300"
//           >
//             March 20, 2025
//           </motion.p>

//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="mt-10 flex justify-center"
//           >
//             <Link to="/registration">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900"
//               >
//                 <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 hover:opacity-100" />
//                 <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950 flex items-center space-x-2">
//                   <span>Register Now</span>
//                   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       clipRule="evenodd"
//                       d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//                       fillRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Conference highlights */}
//       <div className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
//           >
//             Conference Highlights
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"
//           >
//             Join us for three days of inspiring talks, workshops, and networking opportunities
//           </motion.p>

//           <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Expert Speakers",
//                 description: "Learn from leading educators and researchers in the field of educational technology."
//               },
//               {
//                 title: "Interactive Workshops",
//                 description: "Participate in hands-on sessions to explore the latest educational tools and methodologies."
//               },
//               {
//                 title: "Networking",
//                 description: "Connect with peers and industry leaders from around the world."
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.3 }}
//                 viewport={{ once: true }}
//                 className="rounded-lg bg-gray-50 p-6 text-center shadow-lg"
//               >
//                 <h3 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h3>
//                 <p className="mt-4 text-gray-500">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for scroll animations

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero section with fade-in animation */}
      <div
        className={`relative h-[600px] bg-cover bg-center transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: 'url("/images/clg-main.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              NCICST 2025
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300 sm:max-w-3xl">
              National Conference on Intelligent Computing and Secure Technologies
            </p>
            <p className="mt-2 text-lg text-gray-300">March 20, 2025</p>

            {/* Button with hover animation */}
            <div className="mt-10 flex justify-center">
              <div className="relative group">
                <Link to="/registration">
                  <button
                    className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>

                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#151E3E]">
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          Register Now
                        </span>
                        <svg
                          className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                          data-slot="icon"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conference highlights with scroll animations */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conference Highlights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Join us for three days of inspiring talks, workshops, and networking opportunities
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Speakers",
                description:
                  "Learn from leading educators and researchers in the field of educational technology.",
              },
              {
                title: "Interactive Workshops",
                description:
                  "Participate in hands-on sessions to explore the latest educational tools and methodologies.",
              },
              {
                title: "Networking",
                description:
                  "Connect with peers and industry leaders from around the world.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg bg-gray-50 p-6 text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
