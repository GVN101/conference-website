
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Users, Video, UserSquare2, Presentation, Network } from "lucide-react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative">
      <div
        className={`relative h-[600px] bg-cover bg-center transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
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
            <p className="mt-2 text-lg text-gray-300">March 28,29 2025</p>

            <div className="mt-10 flex justify-center">
              <div className="relative group">
                <Link to="/registration">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#6c60f0]">
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

      {/* Hybrid Mode Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the Future of Conferences
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4">
              Join us in-person or virtually - the choice is yours!
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">In-Person Experience</h3>
              <p className="mt-4 text-gray-600">Join us on campus for face-to-face networking, interactive sessions, and direct engagement with speakers and peers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <Video className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Virtual Attendance</h3>
              <p className="mt-4 text-gray-600">Present and participate from anywhere in the world through our interactive virtual platform.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <Globe className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Community</h3>
              <p className="mt-4 text-gray-600">Connect with a diverse international audience through our hybrid format, expanding your professional network.</p>
            </motion.div>
          </div>
        </div>
      </div>

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
                icon: UserSquare2,
                color: "text-blue-500"
              },
              {
                title: "Interactive Workshops",
                description:
                  "Participate in hands-on sessions to explore the latest educational tools and methodologies.",
                icon: Presentation,
                color: "text-purple-500"
              },
              {
                title: "Networking",
                description:
                  "Connect with peers and industry leaders from around the world.",
                icon: Network,
                color: "text-green-500"
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
                <div className="mb-4 flex justify-center">
                  <item.icon className={`h-12 w-12 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
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