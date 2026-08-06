import React from 'react';

interface LoginPageProps {
    onNavigate: (path: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Log in to SecuryHub
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please select your account type.
                    </p>
                </div>
                
                <div className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                         <button type="button" onClick={() => onNavigate('/login/researcher')} className="w-full flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                            <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1m-5-4H3v-4h4v4zM21 17h-4v-4h4v4z" /></svg>
                            <span className="mt-3 text-xl font-bold text-gray-900">Researcher</span>
                            <span className="mt-1 text-sm text-gray-500">Log in as a researcher.</span>
                        </button>
                        
                         <button type="button" onClick={() => onNavigate('/login/organization')} className="w-full flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                            <svg className="h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                            <span className="mt-3 text-xl font-bold text-gray-900">Organization</span>
                            <span className="mt-1 text-sm text-gray-500">Log in to your company.</span>
                         </button>
                    </div>
                     <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?
                        <a href="/signup" onClick={(e) => { e.preventDefault(); onNavigate('/signup'); }} className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
