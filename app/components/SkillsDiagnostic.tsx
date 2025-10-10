type SkillProps = {
  name: string;
  level: number;
  category: string;
};

function SkillBar({ name, level, category }: SkillProps) {
  // Determine color based on category
  const categoryColors = {
    frontend: 'bg-blue-500',
    backend: 'bg-green-500',
    cloud: 'bg-orange-500',
    testing: 'bg-purple-500',
    orm: 'bg-pink-500',
  };

  const bgColor = categoryColors[category as keyof typeof categoryColors] || 'bg-teal-500';

  // Determine proficiency label
  let proficiency = '';
  if (level >= 85) proficiency = 'Advanced';
  else if (level >= 75) proficiency = 'Proficient';
  else if (level >= 65) proficiency = 'Intermediate';
  else proficiency = 'Developing';

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-slate-700">{name}</span>
        <span className="text-xs text-slate-600">{proficiency} ({level}%)</span>
      </div>
      <div className="bg-slate-200 rounded-full h-3">
        <div
          className={`${bgColor} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsDiagnostic() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">COMPREHENSIVE SKILLS DIAGNOSTIC</h2>
        <p className="text-slate-600 mt-1">Technical Proficiency Assessment</p>
      </div>

      {/* Skills Grid - Matches Resume Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Frontend Panel */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            LAB RESULTS - FRONTEND
          </h3>
          <SkillBar name="React" level={85} category="frontend" />
          <SkillBar name="TypeScript" level={80} category="frontend" />
          <SkillBar name="Next.js" level={80} category="frontend" />
          <SkillBar name="Tailwind CSS" level={80} category="frontend" />
        </div>

        {/* Backend Panel */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-bold text-green-900 mb-4">
            LAB RESULTS - BACKEND
          </h3>
          <SkillBar name="Node.js" level={85} category="backend" />
          <SkillBar name="Express" level={85} category="backend" />
          <SkillBar name="PostgreSQL" level={85} category="backend" />
          <SkillBar name="RESTful APIs" level={85} category="backend" />
        </div>

        {/* Cloud & DevOps Panel */}
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
          <h3 className="text-lg font-bold text-orange-900 mb-4">
            CLOUD & DEVOPS DIAGNOSTICS
          </h3>
          <SkillBar name="Google Cloud Platform" level={80} category="cloud" />
          <SkillBar name="Firebase" level={75} category="cloud" />
          <SkillBar name="Terraform" level={60} category="cloud" />
        </div>

        {/* Testing & Tools Panel */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="text-lg font-bold text-purple-900 mb-4">
            TESTING & TOOLS
          </h3>
          <SkillBar name="Mocha" level={85} category="testing" />
          <SkillBar name="Chai" level={85} category="testing" />
          <SkillBar name="Git" level={85} category="testing" />
        </div>

        {/* ORMs Panel */}
        <div className="bg-pink-50 p-6 rounded-lg border border-pink-100 md:col-span-2">
          <h3 className="text-lg font-bold text-pink-900 mb-4">
            DATABASE MANAGEMENT
          </h3>
          <div className="max-w-md">
            <SkillBar name="Prisma" level={80} category="orm" />
          </div>
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-600 italic">
          <span className="font-semibold">Clinical Note:</span> Proficiency levels based on 
          production experience at Cheíl USA (Samsung), hands-on project implementation, and continuous 
          learning. All skills actively maintained with enterprise-level applications.
        </p>
      </div>
    </div>
  );
}