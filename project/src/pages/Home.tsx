import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/clg-main.png")',
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
            <p className="mt-2 text-lg text-gray-300">March 20 2025</p>
            <div className="mt-10">
              <Link
                to="/registration"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Conference highlights */}
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
                title: 'Expert Speakers',
                description:
                  'Learn from leading educators and researchers in the field of educational technology.',
              },
              {
                title: 'Interactive Workshops',
                description:
                  'Participate in hands-on sessions to explore the latest educational tools and methodologies.',
              },
              {
                title: 'Networking',
                description:
                  'Connect with peers and industry leaders from around the world.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-gray-50 p-6 text-center"
              >
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}