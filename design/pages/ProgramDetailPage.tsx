
import React, { useState } from 'react';

interface ProgramDetailPageProps {
    onShowModal: (title: string, message: string) => void;
}

const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ onShowModal }) => {
    const [activeTab, setActiveTab] = useState('program-policy');
    const [isFormVisible, setFormVisible] = useState(false);
    const [isPolicyAgreed, setPolicyAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onShowModal('Login Required', 'You must be logged in to submit a report. Please log in or create an account.');
    };

    const toggleForm = () => {
        const newVisibility = !isFormVisible;
        setFormVisible(newVisibility);
        if (newVisibility) {
            setTimeout(() => {
                document.getElementById('submit-report-form-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };
    
    return (
        <div>
            <div className="bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-900">SecuryHub Public Program</h1>
                        <p className="mt-4 text-xl text-gray-600">Help us secure the SecuryHub platform. We are committed to working with the security community to find and resolve vulnerabilities.</p>
                        
                        <div className="mt-8">
                            <button onClick={toggleForm} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
                                {isFormVisible ? 'Hide Report Form' : 'Submit a Report'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {isFormVisible && (
                <div id="submit-report-form-container" className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900">Submit Report</h2>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div>
                                    <label htmlFor="bug-target-asset" className="block text-sm font-medium text-gray-700">Target Asset</label>
                                    <select id="bug-target-asset" name="target" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-50">
                                        <option value="*.securyhub.com">*.securyhub.com</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="bug-vulnerability-type" className="block text-sm font-medium text-gray-700">Vulnerability Type</label>
                                    <select id="bug-vulnerability-type" name="type" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select a vulnerability type...</option>
                                        <option value="xss">Cross-Site Scripting (XSS)</option>
                                        <option value="sql-injection">SQL Injection</option>
                                        <option value="idor">Insecure Direct Object Reference (IDOR)</option>
                                        <option value="rce">Remote Code Execution (RCE)</option>
                                        <option value="csrf">Cross-Site Request Forgery (CSRF)</option>
                                        <option value="ssrf">Server-Side Request Forgery (SSRF)</option>
                                        <option value="auth-bypass">Authentication Bypass</option>
                                        <option value="priv-escalation">Privilege Escalation</option>
                                        <option value="misconfiguration">Security Misconfiguration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="bug-endpoint" className="block text-sm font-medium text-gray-700">Endpoint (if available, with parameter)</label>
                                    <input type="text" id="bug-endpoint" name="endpoint" placeholder="/api/v1/user?id=123" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="bug-program-severity" className="block text-sm font-medium text-gray-700">Severity</label>
                                    <select id="bug-program-severity" name="severity" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select severity...</option>
                                        <option value="critical">Critical</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                        <option value="info">Informational</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="bug-program-description" className="block text-sm font-medium text-gray-700">Detailed Description and Impact</label>
                                    <textarea id="bug-program-description" name="description" rows={6} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the vulnerability and its potential impact."></textarea>
                                </div>
                                <div>
                                    <label htmlFor="bug-program-steps" className="block text-sm font-medium text-gray-700">Steps to Reproduce</label>
                                    <textarea id="bug-program-steps" name="steps" rows={6} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Be clear and concise. Provide step-by-step instructions."></textarea>
                                </div>
                                <div>
                                    <label htmlFor="bug-program-poc" className="block text-sm font-medium text-gray-700">Proof of Concept (PoC)</label>
                                    <textarea id="bug-program-poc" name="poc" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., complete url with parameter and payload. Code snippets, screenshots (links), cURL commands."></textarea>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <input id="policy-agreement-checkbox" name="policy-agreement" type="checkbox" checked={isPolicyAgreed} onChange={(e) => setPolicyAgreed(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="policy-agreement-checkbox" className="font-medium text-gray-700">I have read and agree to the program's policy.</label>
                                        <p className="text-gray-500">I am submitting this report in good faith and in accordance with all program rules.</p>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <button type="submit" disabled={!isPolicyAgreed} className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        Submit Report
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="bg-white py-12">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <button onClick={() => setActiveTab('program-policy')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'program-policy' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Policy</button>
                                <button onClick={() => setActiveTab('program-scope')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'program-scope' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Scope</button>
                                <button onClick={() => setActiveTab('program-rewards')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'program-rewards' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Rewards</button>
                            </nav>
                        </div>

                        <div className="mt-8">
                            {activeTab === 'program-policy' && (
                                <div id="program-policy">
                                    <h2 className="text-3xl font-bold text-gray-900">Program Policy</h2>
                                    <p className="mt-4 text-lg text-gray-600">We ask that you test responsibly. Please do not engage in any activity that is disruptive or harmful to our users or services. Do not access, modify, or delete data that is not your own.</p>
                                    <h3 className="mt-8 text-2xl font-bold text-gray-900">Out-of-Scope Vulnerabilities</h3>
                                    <p className="mt-4 text-lg text-gray-600">The following findings are considered out of scope and will not be eligible for reputation:</p>
                                    <ul className="mt-4 list-disc list-inside text-lg text-gray-600 space-y-2">
                                        <li>Findings from non-production environments (e.g., test, staging).</li>
                                        <li>Reports of spam, social engineering, or phishing.</li>
                                        <li>Denial of Service (DoS/DDoS) vulnerabilities.</li>
                                        <li>Missing security headers (e.g., CSP, HSTS) without a clear, exploitable impact.</li>
                                        <li>Self-XSS or XSS that requires significant, unlikely user interaction.</li>
                                        <li>Reports on outdated software versions without a working Proof of Concept (PoC).</li>
                                        <li>Password complexity, account lockout, or other account-related policies.</li>
                                        <li>Clickjacking on pages with no sensitive actions.</li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'program-scope' && (
                                <div id="program-scope">
                                    <h2 className="text-3xl font-bold text-gray-900">Scope</h2>
                                    <p className="mt-4 text-lg text-gray-600">The following assets are in scope for this program. Any vulnerabilities found outside of these assets will be considered out of scope.</p>
                                    <div className="mt-6 border rounded-lg overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Type</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><code className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md">*.securyhub.com</code></td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wildcard Domain (Web, API)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                             {activeTab === 'program-rewards' && (
                                <div id="program-rewards">
                                    <h2 className="text-3xl font-bold text-gray-900">Rewards</h2>
                                    <p className="mt-4 text-lg text-gray-600">SecuryHub's public program offers <strong className="font-medium text-gray-900">Reputation</strong> for all valid, unique vulnerability submissions.</p>
                                    <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-inner">
                                        <h3 className="text-xl font-bold text-gray-900">Why Reputation Matters</h3>
                                        <p className="mt-3 text-lg text-gray-700">Earning reputation is the primary way to build your profile, climb the leaderboard, and demonstrate your skill to the community and our partners.</p>
                                        <p className="mt-2 text-lg text-gray-700">More importantly, researchers with a proven track record and high reputation will receive <strong className="font-medium">exclusive invitations to paid private programs.</strong> Your work here is your key to unlocking top-tier rewards.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailPage;
