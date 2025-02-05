// const committees = {
//   organizing: [
//     {
//       name: 'Dr. Sabeena K',
//       role: 'Conference Chair',
//       affiliation: 'College of Engineering Chengannur',
//     },
//     {
//       name: 'Smt. Geetha S',
//       role: 'Program Chair',
//       affiliation: 'College of Engineering Chengannur',
//     },
//   ]
// };

// export default function Committee() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base font-semibold leading-7 text-blue-600">
//             Committee
//           </h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Meet Our Team
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//           NCICST 2025 is organized by leading experts in educational technology
//             and innovation
//           </p>
//         </div>

//         <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
//           {Object.entries(committees).map(([category, members]) => (
//             <div key={category} className="mb-16">
//               <h3 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
//                 {category} Committee
//               </h3>
//               <div className="grid gap-8 lg:grid-cols-2">
//                 {members.map((member) => (
//                   <div
//                     key={member.name}
//                     className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200"
//                   >
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">
//                         {member.name}
//                       </h4>
//                       <p className="mt-1 text-sm text-blue-600">{member.role}</p>
//                       <p className="mt-2 text-sm text-gray-600">
//                         {member.affiliation}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

const committees = {
  patron: [
    {
      name: 'Dr. v. A Arun Kumar',
      role: 'Chief Patron',
      affiliation: 'Director of IHRD',
    },
    {
      name: 'Dr. Hari V S',
      role: 'Principal of College of Engineering Chengannur',
      affiliation: 'College of Engineering Chengannur',
    }
  ],
  organizing: [
    {
      name: 'Smt. Chinchu M Pillai ',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Syama S',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Syeatha Merlin Thampy',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Sreelekshmi K R',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Alka Vijay',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Neethu Treasa',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Sulaja Sanal',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Ameena A',
      affiliation: 'College of Engineering Chengannur',
    }
  ],
  Coordinating: [
    {
      name: 'Dr. Manju S Nair',
      role: 'Conference Coordinator',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Sri. Gopakumar G',
      role: 'Conference Coordinator',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Dr. Sabeena K',
      role: 'Conference Chair',
      affiliation: 'College of Engineering Chengannur',
    },
    {
      name: 'Smt. Geetha S',
      role: 'Conference Chair',
      affiliation: 'College of Engineering Chengannur',
    },
  ],
  Advisory: [
      {
        name: 'Sri. Jyothi John',
        affiliation: 'Principal (Rtd.), Model Engineering College, Kochi'
      },
      {
        name: 'Smt. Ragasree M S',
        affiliation: 'Former vice-chancellor APJAKTU'
      },
      {
        name: 'Dr. Gopakumar G',
        affiliation: 'NIT Calicut'
      },
      {
        name: 'Dr. Biju R Mohan',
        affiliation: 'NIT Surathkal'
      }
  ]
};

export default function Committee() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 350); 
  }, []);

  return (
    <div className={`bg-white py-24 sm:py-32 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Committee
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          NCICST 2025 is organized by leading experts in educational technology
            and innovation
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          {Object.entries(committees).map(([category, members]) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
                {category} Committee
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200 transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {member.name}
                      </h4>
                      <p className="mt-1 text-sm text-blue-600">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-600">
                        {member.affiliation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
