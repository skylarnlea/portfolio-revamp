type ExperienceProps = {
  year: string;
  role: string;
  company: string;
  status: string;
  department: string;
  accomplishments: string[];
  current?: boolean;
};

function TimelineItem({
  year,
  role,
  company,
  status,
  department,
  accomplishments,
  current = false,
}: ExperienceProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-teal-300 last:border-l-0 last:pb-0">
      {/* Timeline Dot */}
      <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-4 ${
        current ? 'bg-green-500 border-green-200 animate-pulse' : 'bg-teal-500 border-teal-200'
      }`}></div>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-sm font-bold text-teal-600 mb-1">{year}</div>
            <h3 className="text-xl font-bold text-slate-800">{role}</h3>
            <p className="text-slate-600">{company}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            current 
              ? 'bg-green-100 text-green-700' 
              : 'bg-slate-100 text-slate-600'
          }`}>
            {status}
          </div>
        </div>

        {/* Department */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-slate-700">Department: </span>
          <span className="text-slate-600">{department}</span>
        </div>

        {/* Chart Notes */}
        <div>
          <div className="text-sm font-semibold text-slate-700 mb-2">Chart Notes:</div>
          <ul className="space-y-1">
            {accomplishments.map((item, index) => (
              <li key={index} className="text-slate-600 flex items-start text-sm">
                <span className="text-teal-500 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">CLINICAL EXPERIENCE RECORD</h2>
        <p className="text-slate-600 mt-1">Detailed Employment & Service History</p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl">
        <TimelineItem
          year="05/2025 – PRESENT"
          role="Full-Stack Software Engineer"
          company="Cheíl USA"
          status="Active Treatment"
          department="Software Engineering"
          accomplishments={[
            "Developed full-stack architecture from the ground up for Jebi, a gamified influencer management platform, slashing cloud costs by 65%",
            "Enabled transition into a multi-tenant B2B SaaS product",
            "Assisted in backend development of multi-channel AI ecosystem (Web, Reddit Bot, Retail VA) using GCP Vertex AI",
            "Implemented RAG model for scalable, up-to-date responses on Samsung products",
            "Optimized performance through model caching, model fallback, and circuit breaker integrations"
          ]}
          current={true}
        />

        <TimelineItem
          year="2012 – 2024"
          role="Medical Aesthetician, Patient Care Coordinator, Site-Manager/Lab Director"
          company="Various Healthcare Facilities"
          status="Completed"
          department="Healthcare Field"
          accomplishments={[
            "10+ years of patient care and healthcare systems experience",
            "Gained deep understanding of medical workflows and system requirements",
            "Developed problem-solving skills in high-pressure environments",
            "Successfully transitioned technical knowledge into software engineering",
            "Unique perspective bridging healthcare domain and technology solutions"
          ]}
        />
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Physicians Assessment:</span> Patient demonstrates 
          exceptional ability to bridge healthcare domain expertise with modern software 
          development. Unique background provides valuable perspective on building user-centric 
          technical solutions. <span className="font-semibold text-teal-700">Prognosis for 
          career growth: Excellent.</span>
        </p>
      </div>
    </div>
  );
}