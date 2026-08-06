import React from 'react';

interface FooterProps {
    onNavigate: (path: string) => void;
}

const FooterLink: React.FC<{ path: string, onNavigate: (path: string) => void, children: React.ReactNode }> = ({ path, onNavigate, children }) => (
    <a href={path} onClick={(e) => { e.preventDefault(); onNavigate(path); }} className="text-base hover:text-white transition-colors duration-200">{children}</a>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform</h3>
                        <ul className="mt-4 space-y-2">
                            <li><FooterLink path="/bug-bounty" onNavigate={onNavigate}>Bug Bounty</FooterLink></li>
                            <li><FooterLink path="/pentest" onNavigate={onNavigate}>Pentest-as-a-Service</FooterLink></li>
                            <li><FooterLink path="/programs" onNavigate={onNavigate}>Programs</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Researchers</h3>
                        <ul className="mt-4 space-y-2">
                            <li><FooterLink path="/programs" onNavigate={onNavigate}>Submit a Bug</FooterLink></li>
                            <li><a href="#" className="text-base hover:text-white">Leaderboard</a></li>
                            <li><a href="#" className="text-base hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><FooterLink path="/about" onNavigate={onNavigate}>About Us</FooterLink></li>
                            <li><a href="#" className="text-base hover:text-white">Careers</a></li>
                            <li><FooterLink path="/contact" onNavigate={onNavigate}>Contact</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><FooterLink path="/privacy" onNavigate={onNavigate}>Privacy Policy</FooterLink></li>
                            <li><a href="#" className="text-base hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-base">&copy; 2025 SecuryHub.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
