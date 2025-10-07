export default function VitalSigns() {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        {/* Section Header */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">VITAL SIGNS</h2>
            <p className="text-slate-600 mt-1">Real-time Developer Health Metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1: GitHub Commits */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100">
                <div className="text-sm font-semibold text-teal-700 mb-2">
                    CODE COMMITS
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                    450+
                </div>
                <div className="text-sm text-slate-600">
                    per year
                </div>
                {/* Progress Bar */}
                <div className="mt-4 bg-teal-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
                <div className="text-xs text-teal-600 mt-1">89% consistency</div>
            </div>

            {/* Stat 2: Projects */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100">
                <div className="text-sm font-semibold text-teal-700 mb-2">
                    ACTIVE PROJECTS
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                    3
                </div>
                <div className="text-sm text-slate-600">
                    in progress
                </div>
                {/* Progress Bar */}
                <div className="mt-4 bg-teal-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-xs text-teal-600 mt-1">85% completion rate</div>
            </div>

            {/* Stat 3: GitHub Streak */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100">
                <div className="text-sm font-semibold text-teal-700 mb-2">
                    GITHUB STREAK
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                    47
                </div>
                <div className="text-sm text-slate-600">
                    days active
                </div>
                {/* Progress Bar */}
                <div className="mt-4 bg-teal-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="text-xs text-teal-600 mt-1">82% target reached</div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* Code Health */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                    <div className="text-sm font-semibold text-green-700 mb-2">
                        CODE HEALTH
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                        98%
                    </div>
                    <div className="text-sm text-slate-600">
                        clean & tested
                    </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
                    <div className="text-sm font-semibold text-blue-700 mb-2">
                        RESPONSE TIME
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                        &lt;24hrs
                    </div>
                    <div className="text-sm text-slate-600">
                        average reply
                    </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                    <div className="text-sm font-semibold text-purple-700 mb-2">
                        AVAILABILITY
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                        Ready
                    </div>
                    <div className="text-sm text-slate-600">
                        open to opportunities
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}