import PatientHeader from './components/PatientHeader';
import VitalSigns from './components/VitalSigns';
import ProjectSection from './components/ProjectSection';
import SkillsDiagnostic from './components/SkillsDiagnostic';
import ExperienceTimeline from './components/ExperienceTimeline';
import PrescriptionContact from './components/PrescriptionContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto p-8">
        <PatientHeader />
        <VitalSigns />
        <ProjectSection />
        <SkillsDiagnostic />
        <ExperienceTimeline />
        <PrescriptionContact />
      </div>
    </main>
  );
}