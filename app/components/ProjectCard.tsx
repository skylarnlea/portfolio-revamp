type ProjectCardProps = {
  caseNumber: string;
  patientName: string;
  condition: string;
  treatment: string;
  prognosis: string;
  outcomes: string[];
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  isPrivate?: boolean;
};

export default function ProjectCard({
  caseNumber,
  patientName,
  condition,
  treatment,
  prognosis,
  outcomes,
  techStack,
  liveLink,
  githubLink,
  isPrivate = false,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-cyan-500 hover:shadow-xl transition-shadow">
      {/* Case Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-xs font-bold text-cyan-600 mb-1">
            {caseNumber}
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            {patientName}
          </h3>
        </div>
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          {prognosis}
        </div>
      </div>

      {/* Private Project Badge */}
      {isPrivate && (
        <div className="mb-4 flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-300">
          <span className="text-lg">🔒</span>
          <span className="text-sm font-semibold text-slate-700">
            Private Company Project - Code & Demo Under NDA
          </span>
        </div>
      )}

      {/* Medical Details */}
      <div className="space-y-3 mb-6">
        <div>
          <span className="text-sm font-semibold text-slate-700">CONDITION: </span>
          <span className="text-slate-600">{condition}</span>
        </div>
        
        <div>
          <span className="text-sm font-semibold text-slate-700">TREATMENT: </span>
          <span className="text-slate-600">{treatment}</span>
        </div>
      </div>

      {/* Outcomes */}
      <div className="mb-6">
        <div className="text-sm font-semibold text-slate-700 mb-2">OUTCOMES:</div>
        <ul className="space-y-1">
          {outcomes.map((outcome, index) => (
            <li key={index} className="text-slate-600 flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <div className="text-sm font-semibold text-slate-700 mb-2">PRESCRIBED TECH:</div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons - Only show if links exist */}
      {(liveLink || githubLink) && (
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-center py-2 rounded-lg transition-colors font-semibold"
            >
              VIEW LIVE DEMO
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-700 hover:bg-slate-800 text-white text-center py-2 rounded-lg transition-colors font-semibold"
            >
              VIEW CODE
            </a>
          )}
        </div>
      )}

      {/* Private project note */}
      {isPrivate && (
        <div className="mt-4 text-xs text-slate-500 italic">
          Details available upon request during interview
        </div>
      )}
    </div>
  );
}