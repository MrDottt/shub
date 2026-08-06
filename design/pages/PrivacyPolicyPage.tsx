
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">
                    <h1 className="text-4xl font-bold text-center text-gray-900">Privacy Policy</h1>
                    <p className="text-lg text-center">Last Updated: November 5, 2025</p>

                    <p>Welcome to SecuryHub ("SecuryHub," "we," "us," or "our"). We provide a bug bounty and penetration testing platform. This Privacy Policy explains how we collect, use, disclose, and protect information about our users and visitors.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect information to provide and improve our services. The types of information we collect depend on how you interact with us.</p>
                    
                    <h4>Information You Provide to Us</h4>
                    <ul>
                        <li><strong>For Researchers:</strong> When you create an account, you provide us with information like your name, email address, and username. We also collect information you submit in vulnerability reports, including PoCs and communications.</li>
                        <li><strong>For Organizations:</strong> When you create an account, you provide us with information like your name, company name, work email, and payment information. We also collect information related to your bug bounty programs and pentest requests.</li>
                    </ul>
                    
                    <h4>Information We Collect Automatically</h4>
                    <p>When you use our services, we automatically collect information about your device and usage, such as your IP address, browser type, operating system, and pages you've visited, using cookies and similar technologies.</p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use your information for various purposes, including:</p>
                    <ul>
                        <li>To provide, operate, and maintain our platform.</li>
                        <li>To process and manage vulnerability reports, including sharing them with the relevant Organization.</li>
                        <li>To process payments and manage accounts.</li>
                        <li>To communicate with you, including responding to your inquiries and sending important service updates.</li>
                        <li>To improve our platform, including our AI Triage system.</li>
                        <li>To enforce our terms and policies and to comply with legal obligations.</li>
                    </ul>

                    <h2>3. How We Share Your Information</h2>
                    <p>We do not sell your personal information. We may share information in the following circumstances:</p>
                    <ul>
                        <li><strong>With Organizations:</strong> We share researcher profiles and vulnerability reports (including all details) with the Organization whose program the report was submitted to.</li>
                        <li><strong>With Researchers:</strong> We may share limited Organization information as necessary to define the scope of a program.</li>
                        <li><strong>Service Providers:</strong> We may share information with third-party vendors and service providers who perform services on our behalf (e.g., payment processing, cloud hosting).</li>
                        <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to a valid legal request.</li>
                    </ul>
                    <p>Vulnerability reports submitted to private programs are confidential and are only shared with the specific Organization.</p>

                    <h2>4. Data Security</h2>
                    <p>We implement industry-standard technical and organizational measures to protect your information from unauthorized access, use, or disclosure. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>

                    <h2>5. Your Rights and Choices</h2>
                    <p>You may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can manage your account information through your profile settings or by contacting us.</p>

                    <h2>6. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at: <a href="mailto:hello@securyhub.com">hello@securyhub.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
