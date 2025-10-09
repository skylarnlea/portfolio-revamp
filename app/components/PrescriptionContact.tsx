export default function PrescriptionContact() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8 border-t-4 border-teal-500">
      {/* Prescription Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">℞</div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">PRESCRIPTION FOR SUCCESS</h2>
          <p className="text-slate-600">skylarlea.dev</p>
        </div>
      </div>

      {/* Prescription Details */}
      <div className="bg-slate-50 p-6 rounded-lg mb-6">
        <div className="space-y-3 text-slate-700">
          <div className="flex">
            <span className="font-semibold w-32">PATIENT:</span>
            <span>Your Company</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">DIAGNOSIS:</span>
            <span>Need for talented full-stack software engineer</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">TREATMENT:</span>
            <span>Skylar Lea, 1 developer, full-time</span>
          </div>
        </div>
      </div>

      {/* Directions - Contact Methods */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Directions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Email */}
          <a
            href="mailto:skyniclea@gmail.com"
            className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <div className="text-2xl">📧</div>
            <div>
              <div className="font-semibold text-slate-800">Direct Line</div>
              <div className="text-sm text-slate-600">skyniclea@gmail.com</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/skylar-lea/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <div className="text-2xl">💼</div>
            <div>
              <div className="font-semibold text-slate-800">Professional Network</div>
              <div className="text-sm text-slate-600">LinkedIn Profile</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/skylarnlea"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <div className="text-2xl">💻</div>
            <div>
              <div className="font-semibold text-slate-800">Code Repository</div>
              <div className="text-sm text-slate-600">View Projects & Code</div>
            </div>
          </a>
        </div>
      </div>

      {/* Resume Download */}
      <div className="mb-6">
        <a
          href="../public/skylar-lea-resume.pdf" 
          download
          className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-center py-4 rounded-lg transition-colors font-semibold text-lg"
        >
          📄 Download Complete Medical File (Resume)
        </a>
      </div>

      {/* Prescription Footer */}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between text-sm text-slate-600">
          <div>
            <span className="font-semibold">Refills:</span> Unlimited
          </div>
          <div>
            <span className="font-semibold">Prescriber:</span> Skylar Lea, Full-Stack Software Engineer
          </div>
        </div>
        <div className="mt-2 text-xs text-slate-500 italic">
          Prescription valid for immediate hire consideration. Side effects may include: 
          increased productivity, cleaner code, and innovative solutions.
        </div>
      </div>
    </div>
  );
}