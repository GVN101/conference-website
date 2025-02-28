import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const dates = [
  {
    date: 'February 15, 2025',
    event: 'Paper Submission Deadline',
    description: 'Last day to submit your research papers',
  },
  {
    date: 'March 10, 2025',
    event: 'Paper Submission Deadline extended',
    description: 'Extended Last day to submit your research papers',
  },
  {
    date: 'March 10, 2025',
    event: 'Notification of acceptance of paper',
    description: 'Authors will be notified of the review results',
  },
  {
    date: 'March 28, 2025',
    event: 'Conference Day 1',
    description: 'Day 1 of the conference',
  },
  {
    date: 'March 29, 2025',
    event: 'Conference Day 2',
    description: 'Day 2 of the conference',
  }
  // {
  //   date: 'September 1, 2024',
  //   event: 'Camera-ready Submission',
  //   description: 'Deadline for final paper submission',
  // },
  // {
  //   date: 'September 15, 2024',
  //   event: 'Early Registration Deadline',
  //   description: 'Last day for early bird registration',
  // },
  // {
  //   date: 'October 15-17, 2024',
  //   event: 'Conference Dates',
  //   description: 'Main conference days',
  // },
];

// export default function ImportantDates() {
//   return (
//     <div className="bg-gray-50 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-2xl lg:text-center"
//         >
//           <h2 className="text-lg font-semibold uppercase tracking-wider text-blue-600">
//             Timeline
//           </h2>
//           <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//             Important Dates
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-700">
//             Mark your calendar with these key dates for NCICST 2025
//           </p>
//         </motion.div>

//         <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
//           <div className="grid gap-8">
//             {dates.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative flex gap-x-4 rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-1 ring-inset ring-gray-200"
//               >
//                 <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-600">
//                   <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
//                 </div>
//                 <div className="flex-auto">
//                   <h3 className="text-lg font-semibold leading-8 text-gray-900">
//                     {item.date}
//                   </h3>
//                   <p className="mt-1 text-base font-semibold leading-7 text-blue-600">
//                     {item.event}
//                   </p>
//                   <p className="mt-1 text-base leading-7 text-gray-600">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ImportantDates() {
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
            Timeline
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Important Dates
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Mark your calendar with these key dates for NCICST 2025
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid gap-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex gap-x-4 rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-1 ring-inset ring-gray-200"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-blue-600">
                  <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3
                    className={`text-lg font-semibold leading-8 text-gray-900 ${index === 0 ? 'line-through text-gray-500' : ''}`}
                  >
                    {item.date}
                  </h3>
                  <p
                    className={`mt-1 text-base font-semibold leading-7 text-blue-600 ${index === 0 ? 'line-through text-gray-500' : ''}`}
                  >
                    {item.event}
                  </p>
                  <p
                    className={`mt-1 text-base leading-7 text-gray-600 ${index === 0 ? 'line-through text-gray-500' : ''}`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

