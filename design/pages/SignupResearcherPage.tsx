import React from 'react';

interface SignupResearcherPageProps {
    onNavigate: (path: string) => void;
    onSignup: () => void;
}

const SignupResearcherPage: React.FC<SignupResearcherPageProps> = ({ onNavigate, onSignup }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignup();
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <svg className="mx-auto h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> 
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your Researcher Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?
                        <a href="/login/researcher" onClick={(e) => { e.preventDefault(); onNavigate('/login/researcher'); }} className="font-medium text-blue-600 hover:text-blue-500">
                            Log in
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input id="first-name" name="first-name" type="text" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input id="last-name" name="last-name" type="text" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email-signup-researcher" className="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email-signup-researcher" name="email" type="email" autoComplete="email" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password-signup-researcher" className="block text-sm font-medium text-gray-700">Password</label>
                        <input id="password-signup-researcher" name="password" type="password" autoComplete="new-password" required className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
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

export default SignupResearcherPage;
