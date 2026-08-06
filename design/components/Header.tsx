import React, { useState } from 'react';

interface HeaderProps {
    currentPath: string;
    onNavigate: (path: string) => void;
}

const NavLink: React.FC<{
    path: string;
    currentPath: string;
    onNavigate: (path: string) => void;
    children: React.ReactNode;
    className?: string;
    isButton?: boolean;
}> = ({ path, currentPath, onNavigate, children, className = '', isButton = false }) => {
    
    const isActive = (path === '/' && currentPath === '/') || (path !== '/' && currentPath.startsWith(path));

    const baseClasses = "nav-item rounded-md text-sm font-medium transition-colors duration-200";
    const activeClasses = isActive ? 'active bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    
    const finalClassName = `${baseClasses} ${activeClasses} ${className}`;
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate(path);
    };

    if (isButton) {
        return (
            <button onClick={handleClick} className={finalClassName}>
                {children}
            </button>
        );
    }
    
    return (
        <a href={path} onClick={handleClick} className={finalClassName}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileNavigate = (path: string) => {
        onNavigate(path);
        setMobileMenuOpen(false);
    }

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-40">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="text-2xl font-bold text-white">
                        SecuryHub
                    </a>

                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavLink path="/bug-bounty" currentPath={currentPath} onNavigate={onNavigate} className="px-3 py-2">Bug Bounty</NavLink>
                        <NavLink path="/programs" currentPath={currentPath} onNavigate={onNavigate} className="px-3 py-2">Programs</NavLink>
                        <NavLink path="/pentest" currentPath={currentPath} onNavigate={onNavigate} className="px-3 py-2">Pentest Services</NavLink>
                        <NavLink path="/about" currentPath={currentPath} onNavigate={onNavigate} className="px-3 py-2">About Us</NavLink>
                        <NavLink path="/contact" currentPath={currentPath} onNavigate={onNavigate} className="px-3 py-2">Contact</NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                         <NavLink path="/login" currentPath={currentPath} onNavigate={onNavigate} isButton={true} className="px-4 py-2 text-gray-300 hover:bg-gray-700">Log In</NavLink>
                         <NavLink path="/signup" currentPath={currentPath} onNavigate={onNavigate} isButton={true} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700">Sign Up</NavLink>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/bug-bounty" onClick={(e) => { e.preventDefault(); handleMobileNavigate('/bug-bounty'); }} className="nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Bug Bounty</a>
                    <a href="/programs" onClick={(e) => { e.preventDefault(); handleMobileNavigate('/programs'); }} className="nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Programs</a>
                    <a href="/pentest" onClick={(e) => { e.preventDefault(); handleMobileNavigate('/pentest'); }} className="nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Pentest Services</a>
                    <a href="/about" onClick={(e) => { e.preventDefault(); handleMobileNavigate('/about'); }} className="nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
                    <a href="/contact" onClick={(e) => { e.preventDefault(); handleMobileNavigate('/contact'); }} className="nav-item block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                    <div className="border-t border-gray-700 mt-2 pt-2">
                        <button onClick={() => handleMobileNavigate('/login')} className="nav-item block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700">Log In</button>
                        <button onClick={() => handleMobileNavigate('/signup')} className="nav-item block w-full text-left mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
