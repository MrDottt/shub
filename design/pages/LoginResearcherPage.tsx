import React from 'react';

interface LoginResearcherPageProps {
    onNavigate: (path: string) => void;
    onLogin: () => void;
}

const LoginResearcherPage: React.FC<LoginResearcherPageProps> = ({ onNavigate, onLogin }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <svg className="mx-auto h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>                          
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Researcher Login
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a href="/signup/researcher" onClick={(e) => { e.preventDefault(); onNavigate('/signup/researcher'); }} className="font-medium text-blue-600 hover:text-blue-500">
                            create a new researcher account
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address-researcher" className="sr-only">Email address</label>
                            <input id="email-address-researcher" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password-researcher" className="sr-only">Password</label>
                            <input id="password-researcher" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me-researcher" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me-researcher" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginResearcherPage;
