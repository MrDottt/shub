import React from 'react';

interface HomePageProps {
    onNavigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Security, Accelerated. Talent, Rewarded.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        SecuryHub connects organizations to a vetted, global community of security researchers. Companies get continuous, real-world vulnerability testing. Researchers get to work on exclusive programs and build their careers.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => onNavigate('/bug-bounty')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
                            For Companies
                        </button>
                        <button onClick={() => onNavigate('/programs')} className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md text-lg font-medium">
                            For Researchers
                        </button>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="bg-white py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">The SecuryHub Difference</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Smarter, Faster Triage
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Stop wasting time on noise. Our platform filters duplicates, helps validate findings, and prioritizes critical vulnerabilities so your team can focus on what matters.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Radically Faster Triage</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Our system automatically handles duplicates and assists in validating submissions in real-time, cutting triage time from days to minutes.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Filter Out the Noise</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Automatically filter over 80% of spam, out-of-scope, and low-impact reports before they ever reach your team.
                                 </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Actionable Reports</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Augmented reports provide rich context, severity scoring, and remediation advice, making it easy to fix vulnerabilities.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why SecuryHub is the Smarter Choice</h2>
                        <p className="mt-4 text-xl text-gray-500">
                            We're built from the ground up to respect the time of both our partners and our researchers.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900">Less Noise, More Signal</h3>
                            <p className="mt-3 text-base text-gray-600">
                                Our platform, powered by a combination of AI and human analysts, provides an intelligent first pass. Invalid, duplicate, and out-of-scope reports are handled instantly, freeing your team from alert fatigue and letting researchers know where to focus.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900">Time-Efficient Security</h3>
                            <p className="mt-3 text-base text-gray-600">
                                For companies, less noise means your team only reviews validated, high-impact reports. For researchers, clear, instant feedback on scope means you can focus on finding the "gems" that lead to high-impact discoveries and bigger bounties.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900">Cost-Effective & Targeted</h3>
                            <p className="mt-3 text-base text-gray-600">
                                Pay for results, not process. Organizations can set priorities, target specific assets, and define the vulnerabilities that matter most. You only reward valid findings, ensuring your security budget is spent on what truly matters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900">Efficient, Transparent Triage</h2>
                        <p className="mt-4 text-xl text-center text-gray-500">
                            Our unique triage process ensures speed for researchers and quality for organizations.
                        </p>
                        <div className="mt-12 space-y-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.657l-2.12 2.122" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Step 1: AI-Assisted Intake</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        When a report is submitted, our AI Analyst performs instant checks for duplicates, scope eligibility, and basic formatting. Invalid reports are flagged immediately, giving researchers instant feedback.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Step 2: Automated Validation</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        For common vulnerabilities with a clear PoC (like XSS, SQLi, etc.), the report is set to 'In review' and our system attempts to validate the finding. If successful, the report is automatically promoted to 'Triaged' and a reward is suggested.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5V8h-5v12zM9 20h5V4H9v16zM3 20h5V12H3v8z" /></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Step 3: Human Analyst Review</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        If automated validation fails or the bug is more complex, the 'In review' report is escalated to our human security analysts. This human-in-the-loop system ensures every valid report is recognized and organizations only see actionable intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
