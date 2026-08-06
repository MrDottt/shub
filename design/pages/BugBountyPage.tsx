import React, { useState } from 'react';

interface BugBountyPageProps {
    onNavigate: (path: string) => void;
}

const BugBountyPage: React.FC<BugBountyPageProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('researchers');

    const CheckIcon = () => (
        <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900">Bug Bounty Programs</h1>
            <p className="text-xl text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                The strategic advantage for modern security. We connect assets with expertise.
            </p>

            <div className="mt-12">
                <div className="flex justify-center border-b border-gray-300">
                    <button 
                        onClick={() => setActiveTab('researchers')}
                        className={`-mb-px px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'researchers' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        For Researchers
                    </button>
                    <button 
                        onClick={() => setActiveTab('companies')}
                        className={`-mb-px px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'companies' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        For Companies
                    </button>
                </div>

                {activeTab === 'researchers' && (
                    <div className="bg-white p-8 md:p-12 rounded-b-lg shadow-lg animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-900">Focus On Hacking, Not Housekeeping</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Stop wasting time on duplicate reports and programs with no clear scope. Our platform is built for researchers. We value your time.
                        </p>
                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li className="flex items-start"><CheckIcon /><span><strong>Intelligent Triage:</strong> Our smart-triage system ensures your valid, unique reports are seen by the right people faster. No more getting lost in the noise.</span></li>
                            <li className="flex items-start"><CheckIcon /><span><strong>Unlock Private Programs:</strong> Build your reputation on our public programs to gain exclusive invitations to high-reward private programs. We reward skill and professionalism.</span></li>
                            <li className="flex items-start"><CheckIcon /><span><strong>Clear Scope & Fast Payouts:</strong> We work with our partners to ensure clear rules of engagement and a commitment to fast, fair payouts for valid reports.</span></li>
                        </ul>
                        <div className="mt-8">
                            <button onClick={() => onNavigate('/programs')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
                                View Programs
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'companies' && (
                    <div className="bg-white p-8 md:p-12 rounded-b-lg shadow-lg animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-900">Security That Delivers ROI</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Stop drowning in alert fatigue and low-quality automated scans. A SecuryHub bug bounty program is your direct line to actionable, high-impact security insights from the world's most talented ethical hackers.
                        </p>
                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li className="flex items-start"><CheckIcon /><span><strong>Slash Remediation Time:</strong> Our platform filters the noise and validates findings, delivering high-signal, reproducible reports to your team. Reduce your mean-time-to-remediation (MTTR) from weeks to days.</span></li>
                            <li className="flex items-start"><CheckIcon /><span><strong>Pay for Results, Not Noise:</strong> Unlike traditional security tools, a bug bounty program is results-driven. You only pay for valid, unique vulnerabilities, ensuring your budget is spent on tangible risk reduction.</span></li>
                            <li className="flex items-start"><CheckIcon /><span><strong>Meet Compliance & Gain Assurance:</strong> Demonstrate a commitment to continuous security and satisfy compliance requirements (like SOC 2, ISO 27001) with a proactive, managed vulnerability disclosure program.</span></li>
                        </ul>
                        <div className="mt-8">
                            <button onClick={() => onNavigate('/contact')} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-medium">
                                Request a Demo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BugBountyPage;
