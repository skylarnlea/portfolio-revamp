import PatientHeader from './components/PatientHeader';
import VitalSigns from './components/VitalSigns';
import ProjectSection from './components/ProjectSection';
import SkillsDiagnostic from './components/SkillsDiagnostic';
import ExperienceTimeline from './components/ExperienceTimeline';
import PrescriptionContact from './components/PrescriptionContact';
import FadeInSection from './components/FadeInSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <FadeInSection>
          <PatientHeader />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <VitalSigns />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <ProjectSection />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <SkillsDiagnostic />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <ExperienceTimeline />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <PrescriptionContact />
        </FadeInSection>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>© 2025 Skylar Lea - Full-Stack Software Engineer</p>
          <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}