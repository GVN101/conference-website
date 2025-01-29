import { ArrowUpRight } from 'lucide-react';

const registrationTypes = [
  {
    type: 'Early Bird',
    price: '$299',
    deadline: 'Until September 15, 2024',
    features: [
      'Full conference access',
      'Conference materials',
      'Welcome reception',
      'Coffee breaks',
      'Certificate of attendance',
    ],
  },
  {
    type: 'Regular',
    price: '$399',
    deadline: 'After September 15, 2024',
    features: [
      'Full conference access',
      'Conference materials',
      'Welcome reception',
      'Coffee breaks',
      'Certificate of attendance',
    ],
  },
  {
    type: 'Student',
    price: '$199',
    deadline: 'Valid student ID required',
    features: [
      'Full conference access',
      'Conference materials',
      'Welcome reception',
      'Coffee breaks',
      'Certificate of attendance',
    ],
  },
];

export default function Registration() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Registration
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Us at NCICST 2025
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose your registration package and secure your spot at the conference
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {registrationTypes.map((tier) => (
            <div
              key={tier.type}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.type}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.deadline}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://forms.google.com/conference-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Register Now
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            * Registration fees are non-refundable
          </p>
        </div>
      </div>
    </div>
  );
}