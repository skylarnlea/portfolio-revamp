export default function PatientHeader() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
            {/* Medical Center Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800">
                    SKYLAR LEA MEDICAL CENTER
                </h1>
                <p className="text-slate-600 mt-1">
                    Developer Health & Performance System
                </p>
            </div>

            {/* Patient Information */}
            <div className="space-y-2 bg-slate-50 p-4 rounded">
                <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">PATIENT ID:</span>
                    <span className="text-slate-600">FULLSTACK-2025-SL</span>
                </div>
        
                <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">STATUS:</span>
                    <span className="text-green-600 font-semibold">✓ Available for Opportunity</span>
                </div>
        
                <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">SPECIALIZATION:</span>
                    <span className="text-slate-600">Full-Stack Software Engineer</span>
                </div>
        
                <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">EXPERIENCE:</span>
                    <span className="text-slate-600">2+ Years Dev, 10+ Years Healthcare</span>
                </div>
            </div>

            {/* CTA Button */}
            <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors">
                BEGIN EXAMINATION
            </button>
        </div>
    )
}