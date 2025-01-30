
import { CalendarClock, FileText,  FileType, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallForPaper() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/files/${fileName}`;
    link.download = fileName;
    link.click();
  };

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
          {/* Grid Container with 2 rows, 3 columns in the first row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Conference Topics Section (Top row - 3 columns) */}
            {[
              {
                title: "Computer Science",
                content: [
                  "Machine Learning & AI",
                  "Data Science & Big Data",
                  "Cybersecurity & Privacy",
                  "Blockchain Technology",
                  "Cloud Computing",
                  "Computer Vision"
                ]
              },
              {
                title: "ECE (Electronics & Communication)",
                content: [
                  "Signal Processing",
                  "Wireless Communications",
                  "Microwave Engineering",
                  "Embedded Systems",
                  "Optical Communication",
                  "Antennas & Propagation"
                ]
              },
              {
                title: "EEE (Electrical & Electronics Engineering)",
                content: [
                  "Power Systems",
                  "Renewable Energy Systems",
                  "Electrical Machines & Drives",
                  "Power Electronics",
                  "High Voltage Engineering",
                  "Control Systems & Automation"
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
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <ul className="mt-4 list-disc list-inside text-base leading-7 text-gray-600">
                  {item.content.map((point, i) => (
                    <li key={i} className="mt-1">{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-36 mt-12 lg:mt-0 lg:mx-12">
              {[
                {
                  icon: <FileText className="h-6 w-6 text-blue-600" />,
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
                    "Paper Submission: February 15, 2025",
                    "Review Notification: February 28, 2025",
                    "Camera-ready: March 28, 2025",
                    "Early Registration: March 29, 2025"
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
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-x-2">
              <FileType className="h-6 w-6 text-blue-600" />
              Guidelines for Language, Margins, Formats & Templates
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              All papers must be written in English and formatted in the standard IEEE 2-column format. Authors should use the provided LaTeX or Microsoft Word templates. Only PDF files will be accepted.
            </p>
            {/* <div className="mt-4 flex gap-x-4">
              <button
                className="relative overflow-hidden h-12 px-8 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer shadow hover:text-black hover:bg-green-700"
                onClick={() => handleDownload('ieeeconf.zip')}
              >
                <span className="relative z-10">📄 LaTeX Template</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
              </button>
              <button
                className="relative overflow-hidden h-12 px-8 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer shadow hover:text-black hover:bg-blue-700"
                onClick={() => handleDownload('Template-for-Preparation-of-Papers-for-IEEE-Sponsored-Conferences.docx')}
              >
                <span className="relative z-10">📄 MS Word Template</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
              </button>
            </div> */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <button
                className="relative overflow-hidden h-12 px-4 sm:px-6 md:px-8 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer shadow hover:text-black hover:bg-green-700 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => handleDownload('ieeeconf.zip')}
              >
                <span className="relative z-10 whitespace-nowrap">📄 LaTeX Template</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
              </button>
              <button
                className="relative overflow-hidden h-12 px-4 sm:px-6 md:px-8 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer shadow hover:text-black hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => handleDownload('Template-for-Preparation-of-Papers-for-IEEE-Sponsored-Conferences.docx')}
              >
                <span className="relative z-10 whitespace-nowrap">📄 MS Word Template</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Note: Authors are responsible for submitting their papers in the required format. <strong>Please do not modify the official templates!</strong> Papers will be published as submitted.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900">Plagiarism Policy</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              All submissions will be tested for similarity using the iThenticate tool. If violations of IEEE publishing ethics are detected, the case will be investigated.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-x-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              Generative AI Language Tools in Publications
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Please note that manuscripts generated by AI tools like ChatGPT are prohibited. If AI tools contribute to a small portion of a manuscript, full reference must be provided. Authors are responsible for ensuring content accuracy.
            </p>
            <ul className="mt-4 list-disc list-inside text-base leading-7 text-gray-600">
              <li>Generative AI language tools cannot be listed as an author.</li>
              <li>AI tools may be used for light editing, such as spelling and grammar corrections.</li>
              <li>Authors must acknowledge AI usage in the acknowledgment section if used.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
