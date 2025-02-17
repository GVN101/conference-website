
import { ArrowUpRight, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  price: string;
}

interface RegistrationType {
  type: string;
  categories: Category[];
  registrationLink?: string;
}

interface RegistrationButtonProps {
  link?: string;
  isDisabled?: boolean;
}

const registrationTypes: RegistrationType[] = [
  {
    type: 'Paper Presentation',
    categories: [
      { name: 'Faculty / Research Scholars', price: '₹1,000.00' },
      { name: 'UG / PG students', price: '₹750.00' },
      { name: 'Industry / R&D Institutes', price: '₹2,000.00' },
    ],
    registrationLink: 'https://forms.gle/J1bqNB7tz96GxRrE7',
  },
  {
    type: 'Poster Presentation',
    categories: [
      { name: 'Faculty / Research Scholars', price: '₹500.00' },
      { name: 'UG / PG students', price: '₹250.00' },
    ],
    registrationLink: 'https://forms.gle/MoX7mfDyo1hGyr1VA',
  },
  {
    type: 'Workshop Registration',
    categories: [{ name: 'All participants', price: '₹500.00' }],
  },
];

export default function Registration() {
  const RegistrationButton = ({ link, isDisabled }: RegistrationButtonProps) =>
    isDisabled ? (
      <span className="inline-flex items-center justify-center rounded-md bg-gray-600 px-6 py-3 text-base font-medium text-gray-300 shadow-md w-full cursor-not-allowed">
        Available Soon
      </span>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-600 transition-colors duration-300 w-full"
      >
        Register Now
        <ArrowUpRight className="ml-2 h-5 w-5 text-white" />
      </a>
    );

  return (
    <div className="bg-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center"> {/* Increased max-width */}
          <h2 className="text-lg font-bold tracking-wide uppercase text-gray-400">Registration Details</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Join Us for the Conference</p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Choose your registration category and secure your participation today!
          </p>

          {/* Paper Submission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 rounded-lg bg-gray-900 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 text-gray-200 w-full" // Added w-full
          >
            <h3 className="text-lg font-semibold flex items-center gap-x-2 text-blue-400">
              <Upload className="h-6 w-6 text-blue-400" />
              Paper Submission
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-400">
              All research papers must be submitted through the Microsoft Conference Management Toolkit or via email:&nbsp;
              <a href="mailto:ncicst25@gmail.com" className="text-blue-400 hover:underline">
                ncicst25@gmail.com
              </a>.
              <br />
              Authors should ensure their submissions adhere to the conference guidelines and formatting requirements.
            </p>
            <p className="mt-2 text-sm text-red-500 font-medium">
              * Please note: Authors must only register after the conference paper has been accepted.
            </p>
            <div className="mt-4">
              <a
                href="https://cmt3.research.microsoft.com/NCICST2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
              >
                Submit Your Paper
              </a>
            </div>
          </motion.div>
        </div>

        {/* Registration Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:max-w-5xl lg:max-w-6xl lg:grid-cols-3">
          {registrationTypes.map((tier) => (
            <div
              key={tier.type}
              className="flex flex-col rounded-3xl bg-gray-900 p-8 shadow-lg ring-1 ring-gray-700 xl:p-10 text-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-400">{tier.type}</h3>
              <ul className="mt-4 space-y-4 text-base flex-grow">
                {tier.categories.map((category) => (
                  <li key={category.name} className="flex justify-between border-b border-gray-700 pb-2 last:border-none">
                    <span>{category.name}</span>
                    <span className="font-bold text-blue-400">{category.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <RegistrationButton link={tier.registrationLink} isDisabled={!tier.registrationLink} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">* Registration fees are non-refundable</p>
        </div>
      </div>
    </div>
  );
}