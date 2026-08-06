import React, { useState } from 'react';

interface ProgramsPageProps {
    onNavigate: (path: string) => void;
}

const PrivateProgramCard: React.FC<{title: string; description: string; resolved: string; lastReport: string; tags: string}> = ({title, description, resolved, lastReport, tags}) => (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <span className="inline-flex items-center text-sm font-medium text-gray-700">{resolved}</span>
                    <span className="inline-flex items-center text-sm font-medium text-gray-700">{lastReport}</span>
                </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 flex sm:flex-col sm:items-end sm:justify-center">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md font-medium" disabled>View Program</button>
                <div className="mt-2 text-sm text-gray-500 sm:text-right">{tags}</div>
            </div>
        </div>
    </div>
);


const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('public-programs');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900">Bug Bounty Programs</h1>
            <p className="text-xl text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                Find public programs to hack on or learn how to access our exclusive private programs.
            </p>

            <div className="mt-12">
                <div className="flex justify-center border-b border-gray-300">
                    <button
                        onClick={() => setActiveTab('public-programs')}
                        className={`-mb-px px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'public-programs' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Public Programs
                    </button>
                    <button
                        onClick={() => setActiveTab('private-programs')}
                        className={`-mb-px px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'private-programs' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Private Programs
                    </button>
                </div>

                {activeTab === 'public-programs' && (
                    <div className="bg-white p-8 md:p-12 rounded-b-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900">Public Programs</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            These programs are open to all researchers. Start hacking and build your reputation.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md">
                                <div className="flex flex-col sm:flex-row justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900">SecuryHub</h3>
                                        <p className="mt-2 text-gray-600">Help secure the SecuryHub platform itself and earn your spot in our private programs.</p>
                                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                                            <span className="inline-flex items-center text-sm font-medium text-gray-700"><svg className="h-5 w-5 mr-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>120+ Resolved</span>
                                            <span className="inline-flex items-center text-sm font-medium text-gray-700"><svg className="h-5 w-5 mr-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Last report 2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 flex sm:flex-col sm:items-end sm:justify-center">
                                        <button onClick={() => onNavigate('/programs/securyhub')} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">View Program</button>
                                        <div className="mt-2 text-sm text-gray-500 sm:text-right">Web, API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'private-programs' && (
                    <div className="bg-white p-8 md:p-12 rounded-b-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900">Private Programs</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Access to our private programs is by invitation only. Many of our partners require their security testing to be conducted by only the most skilled and trusted professionals. For this reason, their programs are private and accessible only to researchers who have been thoroughly vetted and qualified by our team.
                        </p>
                        <p className="mt-2 text-lg text-gray-600">The first step to access is to qualify through our internal CTF challenge.</p>
                        <div className="mt-10 space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-800">Available Private Programs</h3>
                            <div className="relative space-y-6 blur-sm select-none pointer-events-none">
                                <PrivateProgramCard title="Global-Pay Financial" description="Next-gen fintech and payment processing infrastructure." resolved="80+ Resolved" lastReport="Last report 1 day ago" tags="Web, API, Cloud" />
                                <PrivateProgramCard title="AeroTech Industries" description="Next-generation aerospace and IoT platform." resolved="45+ Resolved" lastReport="Last report 5 hours ago" tags="IoT, Mobile, Web" />
                                <PrivateProgramCard title="NextGen SaaS" description="Enterprise-scale B2B cloud software suite." resolved="210+ Resolved" lastReport="Last report 18 hours ago" tags="Web, Cloud" />
                                <PrivateProgramCard title="E-Com Giant" description="Global e-commerce marketplace and logistics." resolved="150+ Resolved" lastReport="Last report 3 days ago" tags="Web, Mobile" />
                                <PrivateProgramCard title="Project Citadel (Stealth)" description="Pre-launch blockchain infrastructure project." resolved="30+ Resolved" lastReport="Last report 6 hours ago" tags="Blockchain, API" />
                            </div>
                        </div>
                        <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="text-xl font-semibold text-gray-900">Ready to Unlock These Programs?</h3>
                            <p className="mt-2 text-gray-700">To be considered for private programs, you must first qualify by participating in our internal CTF (Capture The Flag) challenge. This helps us verify your technical abilities and problem-solving skills.</p>
                            <p className="mt-4 text-gray-700">Please email our team to request access to the qualification process:</p>
                            <a href="mailto:ctf@securyhub.com" className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-800">ctf@securyhub.com</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgramsPage;
