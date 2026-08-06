
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
                    <p className="mt-4 text-xl text-gray-600">
                        We'd love to hear from you. Please reach out to the appropriate team below.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md text-left">
                            <h2 className="text-2xl font-bold text-gray-900">General & Privacy</h2>
                            <p className="mt-3 text-lg text-gray-600">For general questions, support, or privacy-related matters, please email us.</p>
                            <a href="mailto:hello@securyhub.com" className="mt-6 inline-block text-lg font-medium text-blue-600 hover:text-blue-800">
                                hello@securyhub.com
                            </a>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md text-left">
                            <h2 className="text-2xl font-bold text-gray-900">Business & Pentesting</h2>
                            <p className="mt-3 text-lg text-gray-600">To request a quote for our Pentest services or for other business inquiries, contact our team.</p>
                            <a href="mailto:team@securyhub.com" className="mt-6 inline-block text-lg font-medium text-blue-600 hover:text-blue-800">
                                team@securyhub.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
