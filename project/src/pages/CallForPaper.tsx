import { CalendarClock, FileText, ListChecks } from 'lucide-react';

export default function CallForPaper() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Call for Papers
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Share Your Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We invite researchers, educators, and practitioners to submit their
            original research papers for NCICST 2025.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <FileText className="h-5 w-5 flex-none text-blue-600" />
                Conference Topics
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  - Educational Technology
                  <br />
                  - AI in Education
                  <br />
                  - Online Learning
                  <br />
                  - Digital Pedagogy
                  <br />
                  - Learning Analytics
                  <br />
                  - Educational Data Mining
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <ListChecks className="h-5 w-5 flex-none text-blue-600" />
                Submission Guidelines
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  - Full papers: 8-10 pages
                  <br />
                  - Short papers: 4-6 pages
                  <br />
                  - Format: IEEE template
                  <br />
                  - Language: English
                  <br />
                  - Original unpublished work
                  <br />
                  - Blind review process
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <CalendarClock className="h-5 w-5 flex-none text-blue-600" />
                Important Deadlines
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  - Paper Submission: July 15, 2024
                  <br />
                  - Review Notification: August 15, 2024
                  <br />
                  - Camera-ready: September 1, 2024
                  <br />
                  - Early Registration: September 15, 2024
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}