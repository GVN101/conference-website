
// import { ArrowUpRight } from 'lucide-react';

// const registrationTypes = [
//   {
//     type: 'Paper Presentation',
//     categories: [
//       { name: 'Faculty / Research Scholars', price: '₹1,000.00' },
//       { name: 'UG / PG students', price: '₹750.00' },
//       { name: 'Industry / R&D Institutes', price: '₹2,000.00' },
//     ],
//   },
//   {
//     type: 'Poster Presentation',
//     categories: [
//       { name: 'Faculty / Research Scholars', price: '₹500.00' },
//       { name: 'UG / PG students', price: '₹250.00' },
//     ],
//   },
//   {
//     type: 'Workshop Registration',
//     categories: [
//       { name: 'All participants', price: '₹500.00' },
//     ],
//   },
// ];

// export default function Registration() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base font-semibold leading-7 text-blue-600">
//             Registration Details
//           </h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Join Us for the Conference
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Choose your registration category and secure your participation.
//           </p>
//         </div>

//         <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
//           {registrationTypes.map((tier) => (
//             <div
//               key={tier.type}
//               className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
//             >
//               <h3 className="text-lg font-semibold leading-8 text-gray-900">
//                 {tier.type}
//               </h3>
//               <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
//                 {tier.categories.map((category) => (
//                   <li key={category.name} className="flex justify-between">
//                     <span>{category.name}</span>
//                     <span className="font-bold text-gray-900">{category.price}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <a
//             href="https://forms.google.com/conference-registration"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-blue-700"
//           >
//             Register Now
//             <ArrowUpRight className="ml-2 h-5 w-5" />
//           </a>
//           <p className="mt-4 text-sm text-gray-500">
//             * Registration fees are non-refundable
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { ArrowUpRight } from 'lucide-react';

const registrationTypes = [
  {
    type: 'Paper Presentation',
    categories: [
      { name: 'Faculty / Research Scholars', price: '₹1,000.00' },
      { name: 'UG / PG students', price: '₹750.00' },
      { name: 'Industry / R&D Institutes', price: '₹2,000.00' },
    ],
  },
  {
    type: 'Poster Presentation',
    categories: [
      { name: 'Faculty / Research Scholars', price: '₹500.00' },
      { name: 'UG / PG students', price: '₹250.00' },
    ],
  },
  {
    type: 'Workshop Registration',
    categories: [
      { name: 'All participants', price: '₹500.00' },
    ],
  },
];

export default function Registration() {
  return (
    <div className="bg-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-bold tracking-wide uppercase text-gray-400">Registration Details</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Join Us for the Conference
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Choose your registration category and secure your participation today!
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {registrationTypes.map((tier) => (
            <div
              key={tier.type}
              className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 shadow-lg ring-1 ring-gray-700 xl:p-10 text-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-400">{tier.type}</h3>
              <ul className="mt-4 space-y-4 text-base">
                {tier.categories.map((category) => (
                  <li key={category.name} className="flex justify-between border-b border-gray-700 pb-2 last:border-none">
                    <span>{category.name}</span>
                    <span className="font-bold text-blue-400">{category.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://forms.google.com/conference-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-blue-500 px-8 py-4 text-lg font-medium text-white shadow-md hover:bg-blue-600"
          >
            Register Now
            <ArrowUpRight className="ml-2 h-5 w-5 text-white" />
          </a>
          <p className="mt-4 text-sm text-gray-400">
            * Registration fees are non-refundable
          </p>
        </div>
      </div>
    </div>
  );
}

