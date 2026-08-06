import React from 'react';

interface SignupOrganizationPageProps {
    onNavigate: (path: string) => void;
    onSignup: () => void;
}

const SignupOrganizationPage: React.FC<SignupOrganizationPageProps> = ({ onNavigate, onSignup }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignup();
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <svg className="mx-auto h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m18 0v-18H6.75a4.5 4.5 0 00-4.5 4.5v13.5m0 0c1.143 0 2.23.344 3.117.938m-3.117.938c-1.143 0-2.23-.344-3.117-.938m3.117.938c.571 0 1.13.172 1.636.468m-1.636-.468C4.562 15.105 3.372 15 2.25 15c-1.122 0-2.312.105-3.448.309m18.218-3.309c.229.043.45.09.666.142m-.666-.142a2.25 2.25 0 01-2.248-2.247l.001-.002c0-1.242.668-2.35 1.748-2.942m-1.748 2.942a2.25 2.25 0 01-2.248-2.247c0-1.242.668-2.35 1.748-2.942M6.75 15.75H2.25V13.5M6.75 11.25H2.25V9M6.75 6.75H2.25V4.5M12 15.75v-1.5m0-3v-1.5m0-3v-1.5M12 9v1.5" />
                    </svg>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your Organization Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?
                        <a href="/login/organization" onClick={(e) => { e.preventDefault(); onNavigate('/login/organization'); }} className="font-medium text-blue-600 hover:text-blue-500">
                            Log in
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="full-name-org" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input id="full-name-org" name="full-name" type="text" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="company-name-org" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input id="company-name-org" name="company-name" type="text" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email-signup-org" className="block text-sm font-medium text-gray-700">Work Email</label>
                        <input id="email-signup-org" name="email" type="email" autoComplete="email" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password-signup-org" className="block text-sm font-medium text-gray-700">Password</label>
                        <input id="password-signup-org" name="password" type="password" autoComplete="new-password" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupOrganizationPage;
