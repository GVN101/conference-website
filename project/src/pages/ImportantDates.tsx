import { Calendar } from 'lucide-react';

const dates = [
  {
    date: 'July 15, 2024',
    event: 'Paper Submission Deadline',
    description: 'Last day to submit your research papers',
  },
  {
    date: 'August 15, 2024',
    event: 'Review Notification',
    description: 'Authors will be notified of the review results',
  },
  {
    date: 'September 1, 2024',
    event: 'Camera-ready Submission',
    description: 'Deadline for final paper submission',
  },
  {
    date: 'September 15, 2024',
    event: 'Early Registration Deadline',
    description: 'Last day for early bird registration',
  },
  {
    date: 'October 15-17, 2024',
    event: 'Conference Dates',
    description: 'Main conference days',
  },
];

export default function ImportantDates() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Timeline
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Important Dates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mark your calendar with these key dates for NCICST 2025
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid gap-8">
            {dates.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-x-4 rounded-xl bg-gray-50 p-6 ring-1 ring-inset ring-gray-200"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-600">
                  <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {item.date}
                  </h3>
                  <p className="mt-1 text-base font-semibold leading-7 text-blue-600">
                    {item.event}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}