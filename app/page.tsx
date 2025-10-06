import PatientHeader from './components/PatientHeader';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto p-8">
        <PatientHeader />
      </div>
    </main>
  );
}