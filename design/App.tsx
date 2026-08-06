import React, { useState, useCallback, useEffect } from 'react';
import { ModalInfo } from './types';

import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

import HomePage from './pages/HomePage';
import BugBountyPage from './pages/BugBountyPage';
import ProgramsPage from './pages/ProgramsPage';
import PentestPage from './pages/PentestPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import LoginResearcherPage from './pages/LoginResearcherPage';
import LoginOrganizationPage from './pages/LoginOrganizationPage';
import SignupResearcherPage from './pages/SignupResearcherPage';
import SignupOrganizationPage from './pages/SignupOrganizationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


const App: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname);
    const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

    useEffect(() => {
        const onPopState = () => setPath(window.location.pathname);
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const handleNavigate = useCallback((newPath: string) => {
        if (window.location.pathname !== newPath) {
            window.history.pushState({}, '', newPath);
        }
        setPath(newPath);
        window.scrollTo(0, 0);
    }, []);

    const showModal = useCallback((title: string, message: string) => {
        setModalInfo({ title, message });
    }, []);

    const handleFormSubmit = (type: 'login' | 'signup' | 'report') => {
        if (type === 'login') {
            showModal('Login Success!', 'Welcome back! (This is a demo)');
            handleNavigate('/');
        } else if (type === 'signup') {
            showModal('Account Created!', 'Welcome to SecuryHub! Please log in. (This is a demo)');
            handleNavigate('/login');
        } else if (type === 'report') {
            showModal('Login Required', 'You must be logged in to submit a report. Please log in or create an account.');
        }
    };
    
    const renderPage = () => {
        const pathSegments = path.split('/').filter(Boolean);

        switch (pathSegments[0]) {
            case undefined: // Root path '/'
                return <HomePage onNavigate={handleNavigate} />;
            case 'bug-bounty':
                return <BugBountyPage onNavigate={handleNavigate} />;
            case 'programs':
                if (pathSegments[1] === 'securyhub') {
                    return <ProgramDetailPage onShowModal={showModal} />;
                }
                return <ProgramsPage onNavigate={handleNavigate} />;
            case 'pentest':
                return <PentestPage onNavigate={handleNavigate} />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'login':
                if (pathSegments[1] === 'researcher') {
                    return <LoginResearcherPage onNavigate={handleNavigate} onLogin={() => handleFormSubmit('login')} />;
                }
                if (pathSegments[1] === 'organization') {
                    return <LoginOrganizationPage onNavigate={handleNavigate} onLogin={() => handleFormSubmit('login')} />;
                }
                return <LoginPage onNavigate={handleNavigate} />;
            case 'signup':
                if (pathSegments[1] === 'researcher') {
                    return <SignupResearcherPage onNavigate={handleNavigate} onSignup={() => handleFormSubmit('signup')} />;
                }
                if (pathSegments[1] === 'organization') {
                    return <SignupOrganizationPage onNavigate={handleNavigate} onSignup={() => handleFormSubmit('signup')} />;
                }
                return <SignupPage onNavigate={handleNavigate} />;
            case 'privacy':
                return <PrivacyPolicyPage />;
            default: // 404 - for now, redirect to home
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <>
            <Header currentPath={path} onNavigate={handleNavigate} />
            <main key={path} className="flex-grow page-enter-animation">
                {renderPage()}
            </main>
            <Footer onNavigate={handleNavigate} />
            {modalInfo && (
                <Modal 
                    title={modalInfo.title} 
                    message={modalInfo.message} 
                    onClose={() => setModalInfo(null)} 
                />
            )}
        </>
    );
};

export default App;
