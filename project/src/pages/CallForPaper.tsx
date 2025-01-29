import { CalendarClock, FileText, ListChecks } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallForPaper() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600">
            Call for Papers
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Share Your Research
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            We invite researchers, educators, and practitioners to submit their
            original research papers for NCICST 2025.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                icon: <FileText className="h-6 w-6 text-blue-600" />, 
                title: "Conference Topics", 
                content: [
                  "Educational Technology",
                  "AI in Education",
                  "Online Learning",
                  "Digital Pedagogy",
                  "Learning Analytics",
                  "Educational Data Mining"
                ]
              },
              {
                icon: <ListChecks className="h-6 w-6 text-blue-600" />, 
                title: "Submission Guidelines", 
                content: [
                  "Full papers: 8-10 pages",
                  "Short papers: 4-6 pages",
                  "Format: IEEE template",
                  "Language: English",
                  "Original unpublished work",
                  "Blind review process"
                ]
              },
              {
                icon: <CalendarClock className="h-6 w-6 text-blue-600" />, 
                title: "Important Deadlines", 
                content: [
                  "Paper Submission: July 15, 2024",
                  "Review Notification: August 15, 2024",
                  "Camera-ready: September 1, 2024",
                  "Early Registration: September 15, 2024"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  {item.icon}
                  {item.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <ul className="list-disc list-inside">
                    {item.content.map((point, i) => (
                      <li key={i} className="mt-1">{point}</li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
