import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">ACTIVE TREATMENT PLANS</h2>
        <p className="text-slate-600 mt-1">Current Development Projects & Outcomes</p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        
        {/* Project 1: Jebi */}
        <ProjectCard
          caseNumber="CASE FILE #001 - CRITICAL CARE"
          patientName="Jebi Platform"
          condition="Legacy system with high operational costs"
          treatment="Ground-up full-stack rebuild with modern architecture"
          prognosis="✓ Excellent"
          outcomes={[
            "65% cloud cost reduction achieved",
            "Multi-tenant B2B SaaS transformation complete",
            "System health: 98% uptime",
            "Gamified influencer management at scale"
          ]}
          techStack={["Next.js", "TypeScript", "PostgreSQL", "GCP", "Terraform"]}
          liveLink="https://jebi.example.com"
          githubLink="https://github.com/yourusername/jebi"
        />

        {/* Project 2: AI Employee Assistant */}
        <ProjectCard
          caseNumber="CASE FILE #002 - SPECIALIZED TREATMENT"
          patientName="AI Employee Assistant"
          condition="Manual HR processes causing bottlenecks"
          treatment="RAG-powered chatbot with enterprise security"
          prognosis="✓ Excellent"
          outcomes={[
            "60% reduction in HR workload potential",
            "Instant access to company policies and benefits",
            "Secure document processing with encryption",
            "Built with Google Vertex AI Gemini 2.5 Flash"
          ]}
          techStack={["Next.js", "TypeScript", "Vertex AI", "Cloud Run", "RAG"]}
          liveLink="https://ai-chatbot-212848745377.us-central1.run.app/widget-demo"
        />

        {/* Project 3: Samsung AI Ecosystem */}
        <ProjectCard
          caseNumber="CASE FILE #003 - EMERGENCY RESPONSE"
          patientName="Samsung Multi-Channel AI"
          condition="Fragmented customer support across platforms"
          treatment="Unified AI ecosystem with RAG model"
          prognosis="✓ Very Good"
          outcomes={[
            "Multi-channel support (Web, Reddit Bot, Retail VA)",
            "Scalable, up-to-date product responses",
            "Model caching and fallback for performance",
            "Circuit breaker integration for reliability"
          ]}
          techStack={["GCP", "Vertex AI", "RAG", "Reddit API", "Node.js"]}
        />

      </div>
    </div>
  );
}