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
    tools: 'bg-purple-500',
    cloud: 'bg-orange-500',
  };

  const bgColor = categoryColors[category as keyof typeof categoryColors] || 'bg-teal-500';

  // Determine proficiency label
  let proficiency = '';
  if (level >= 90) proficiency = 'Expert';
  else if (level >= 80) proficiency = 'Advanced';
  else if (level >= 70) proficiency = 'Proficient';
  else proficiency = 'Intermediate';

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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Frontend Panel */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            LAB RESULTS - FRONTEND PANEL
          </h3>
          <SkillBar name="Next.js" level={90} category="frontend" />
          <SkillBar name="React" level={88} category="frontend" />
          <SkillBar name="TypeScript" level={85} category="frontend" />
          <SkillBar name="Tailwind CSS" level={87} category="frontend" />
          <SkillBar name="JavaScript" level={90} category="frontend" />
          <SkillBar name="HTML/CSS" level={92} category="frontend" />
        </div>

        {/* Backend Panel */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-lg font-bold text-green-900 mb-4">
            LAB RESULTS - BACKEND PANEL
          </h3>
          <SkillBar name="Node.js" level={87} category="backend" />
          <SkillBar name="Express" level={80} category="backend" />
          <SkillBar name="PostgreSQL" level={78} category="backend" />
          <SkillBar name="RESTful APIs" level={85} category="backend" />
          <SkillBar name="Prisma" level={75} category="backend" />
        </div>

        {/* Cloud/DevOps Panel */}
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
          <h3 className="text-lg font-bold text-orange-900 mb-4">
            SPECIALIZED DIAGNOSTICS - CLOUD
          </h3>
          <SkillBar name="Google Cloud Platform" level={85} category="cloud" />
          <SkillBar name="Cloud Run" level={82} category="cloud" />
          <SkillBar name="Firebase" level={80} category="cloud" />
          <SkillBar name="Terraform" level={75} category="cloud" />
          <SkillBar name="Vertex AI" level={78} category="cloud" />
        </div>

        {/* Tools Panel */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="text-lg font-bold text-purple-900 mb-4">
            DIAGNOSTIC TOOLS & TESTING
          </h3>
          <SkillBar name="Git/GitHub" level={88} category="tools" />
          <SkillBar name="VS Code" level={90} category="tools" />
          <SkillBar name="Postman" level={82} category="tools" />
          <SkillBar name="Jest/Playwright" level={75} category="tools" />
          <SkillBar name="Figma" level={70} category="tools" />
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-600 italic">
          <span className="font-semibold">Clinical Note:</span> Proficiency levels based on 
          production experience, project complexity, and continuous learning. All skills 
          actively maintained and regularly updated.
        </p>
      </div>
    </div>
  );
}