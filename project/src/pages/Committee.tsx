const committees = {
  organizing: [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Conference Chair',
      affiliation: 'Stanford University',
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Program Chair',
      affiliation: 'MIT',
    },
    {
      name: 'Dr. Emily Williams',
      role: 'Technical Program Chair',
      affiliation: 'Harvard University',
    },
  ],
  technical: [
    {
      name: 'Dr. James Wilson',
      role: 'Committee Member',
      affiliation: 'University of California, Berkeley',
    },
    {
      name: 'Prof. Lisa Anderson',
      role: 'Committee Member',
      affiliation: 'Carnegie Mellon University',
    },
    {
      name: 'Dr. Robert Taylor',
      role: 'Committee Member',
      affiliation: 'Georgia Institute of Technology',
    },
  ],
  advisory: [
    {
      name: 'Prof. David Brown',
      role: 'Advisory Board Member',
      affiliation: 'University of Oxford',
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Advisory Board Member',
      affiliation: 'ETH Zurich',
    },
    {
      name: 'Prof. John Smith',
      role: 'Advisory Board Member',
      affiliation: 'University of Cambridge',
    },
  ],
};

export default function Committee() {
  return (
    <div className="bg-white py-24 sm:py-32">
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
                    className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200"
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