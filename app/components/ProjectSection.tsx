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
        
        {/* Project 1: Jebi Platform */}
        <ProjectCard
          caseNumber="CASE FILE #001 - CRITICAL CARE"
          patientName="Jebi Platform Rebuild"
          condition="Legacy system with high operational costs"
          treatment="Ground-up full-stack architecture rebuild"
          prognosis="✓ Excellent"
          outcomes={[
            "65% cloud cost reduction achieved",
            "Multi-tenant B2B SaaS transformation complete",
            "Gamified influencer management at scale",
            "Full-stack architecture from ground-up"
          ]}
          techStack={["Next.js", "TypeScript", "PostgreSQL", "GCP", "Terraform"]}
          isPrivate={true}
        />

        {/* Project 2: Multi-Channel AI Ecosystem */}
        <ProjectCard
          caseNumber="CASE FILE #002 - EMERGENCY RESPONSE"
          patientName="Samsung Multi-Channel AI Ecosystem"
          condition="Fragmented customer support across platforms"
          treatment="Unified AI with RAG model across Web, Reddit Bot, and Retail VA"
          prognosis="✓ Excellent"
          outcomes={[
            "Scaled multi-channel support (Web, Reddit Bot, Retail VA)",
            "GCP Vertex AI with RAG for up-to-date product responses",
            "Model caching and fallback for performance optimization",
            "Circuit breaker integrations for reliability"
          ]}
          techStack={["GCP", "Vertex AI", "RAG", "Reddit API", "Node.js"]}
          isPrivate={true}
        />

        {/* Project 3: AI Employee Assistant */}
        <ProjectCard
          caseNumber="CASE FILE #003 - SPECIALIZED TREATMENT"
          patientName="AI Employee Assistant"
          condition="Manual HR processes causing bottlenecks"
          treatment="RAG-powered chatbot with enterprise security"
          prognosis="✓ Excellent"
          outcomes={[
            "60% potential reduction in HR workload",
            "Instant access to company policies, benefits, and IT support",
            "Built with Google Vertex AI Gemini 2.5 Flash",
            "Secure document processing with encryption"
          ]}
          techStack={["Next.js", "TypeScript", "Vertex AI", "Cloud Run", "RAG"]}
          liveLink="https://ai-chatbot-212848745377.us-central1.run.app/widget-demo"
        />

        {/* Project 4: Conversational AI Voice System */}
        <ProjectCard
          caseNumber="CASE FILE #004 - ADVANCED DIAGNOSTICS"
          patientName="Samsung Voice-to-Voice Conversational AI"
          condition="Need for real-time voice-based product support"
          treatment="Cloud-native voice AI with WebSocket streaming"
          prognosis="✓ Excellent"
          outcomes={[
            "95% transcription accuracy achieved",
            "Real-time WebSocket streaming for bidirectional voice communication",
            "Google Cloud Speech-to-Text to ElevenLabs text-to-speech pipeline",
            "Backend support, production launch, and post-launch maintenance"
          ]}
          techStack={["GCP", "Speech-to-Text", "ElevenLabs", "WebSocket", "Custom AI Models"]}
          isPrivate={true}
        />

        {/* Project 5: AI Project Management Platform */}
        <ProjectCard
          caseNumber="CASE FILE #005 - PREDICTIVE ANALYTICS"
          patientName="AI-Powered Project Management Platform"
          condition="Project timeline overruns and resource estimation issues"
          treatment="Intelligent forecasting with machine learning algorithms"
          prognosis="✓ Very Good"
          outcomes={[
            "85% timeline forecast accuracy achieved",
            "30% reduction in project overruns",
            "Intelligent resource estimation and risk prediction",
            "Managing 200+ concurrent projects"
          ]}
          techStack={["React.js", "Node.js", "Machine Learning", "Predictive Analytics"]}
          isPrivate={true}
        />

        {/* Project 6: T-Mobile/Verizon Partnership Features */}
        <ProjectCard
          caseNumber="CASE FILE #006 - PARTNERSHIP INTEGRATION"
          patientName="T-Mobile & Verizon Frontend Features"
          condition="Need for responsive carrier-specific features"
          treatment="Frontend development from processed JSON data"
          prognosis="✓ Good"
          outcomes={[
            "Led development of responsive frontend features",
            "Partnered directly with T-Mobile and Verizon",
            "Processed and organized JSON data into user-facing features",
            "Cross-carrier compatibility maintained"
          ]}
          techStack={["React", "TypeScript", "JSON", "Responsive Design"]}
          isPrivate={true}
        />

      </div>
    </div>
  );
}