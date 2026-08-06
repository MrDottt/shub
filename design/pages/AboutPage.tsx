
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-900">About SecuryHub</h1>
                    <p className="mt-6 text-lg text-gray-600">
                        SecuryHub was founded by a team of veteran security engineers and AI researchers with a single mission: to make cybersecurity more intelligent, efficient, and accessible.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        We believe that the traditional model of cybersecurity is broken. Teams are overwhelmed by floods of low-quality alerts, while real, critical vulnerabilities get lost in the noise. Our platform was built from the ground up to solve this problem.
                    </p>
                    
                    <h2 className="mt-12 text-3xl font-bold text-gray-900">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our mission is to build a secure digital future. We empower organizations to protect their assets and innovate without fear, and we provide a platform for security researchers to do meaningful work and be rewarded for their expertise.
                    </p>

                    <h2 className="mt-12 text-3xl font-bold text-gray-900">Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        SecuryHub is led by a team of veteran security engineers, product designers, and AI researchers who have spent their careers on the front lines of cyber defense. We're passionate about security and dedicated to building a platform that truly serves the needs of both companies and the hacker community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
