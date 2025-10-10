type ExperienceProps = {
  year: string;
  role: string;
  company: string;
  location: string;
  status: string;
  department: string;
  accomplishments: string[];
  current?: boolean;
};

function TimelineItem({
  year,
  role,
  company,
  location,
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
            <p className="text-sm text-slate-500">{location}</p>
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
        
        {/* Current Role: Cheíl USA (Samsung) */}
        <TimelineItem
          year="05/2025 – PRESENT"
          role="Full-Stack Software Engineer"
          company="Cheíl USA (Samsung)"
          location="Plano, TX"
          status="Active Treatment"
          department="Software Engineering"
          accomplishments={[
            "Developed full-stack architecture from ground-up rebuild of Jebi platform, reducing cloud costs by 65%",
            "Led backend initiative to scale multi-channel AI ecosystem (Web, Reddit Bot, Retail VA) using GCP Vertex AI and RAG model",
            "Engineered RAG-powered chatbot with Next.js and Vertex AI Gemini 2.5 Flash, potentially reducing HR workload by 60%",
            "Built AI-powered project management platform achieving 85% timeline forecast accuracy and 30% reduction in overruns",
            "Supported production launch of conversational AI with WebSocket streaming, achieving 95% transcription accuracy",
            "Partnered with T-Mobile and Verizon to lead development of responsive frontend features"
          ]}
          current={true}
        />

        {/* Healthcare Background */}
        <TimelineItem
          year="2014 – 2024"
          role="Healthcare Professional"
          company="Various Healthcare Facilities"
          location="Multiple Locations"
          status="Completed"
          department="Medical Services & Systems"
          accomplishments={[
            "10+ years of direct patient care and healthcare systems experience",
            "Developed critical thinking and problem-solving skills in high-pressure, time-sensitive environments",
            "Gained deep understanding of healthcare workflows, compliance requirements (HIPAA), and medical data systems",
            "Built strong attention to detail and accuracy—essential for both patient safety and clean code",
            "Unique perspective on user-centric design: understanding real-world needs from the healthcare provider side",
            "Successfully transitioned domain expertise into full-stack software engineering"
          ]}
        />

      </div>

      {/* Footer Note - Ties Healthcare to Development */}
      <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Physician Assessment:</span> Patient demonstrates 
          exceptional ability to bridge healthcare domain expertise with modern software development. 
          Ten years of medical experience provides invaluable insight into building accurate, 
          compliant, and user-focused technical solutions—particularly valuable for healthcare 
          technology, SaaS products, and systems requiring high reliability. 
          <span className="font-semibold text-teal-700"> Prognosis for career growth: Excellent. 
          Recommended for roles requiring both technical skill and domain understanding.</span>
        </p>
      </div>
    </div>
  );
}