import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto"></div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        At Ursuline Study Centre, we are committed to protecting the privacy of our students and their parents/guardians. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 mt-8">Information We Collect</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        We collect personal information when you:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li className="text-gray-700">Enquire about our courses through our website contact form, phone, or email</li>
                        <li className="text-gray-700">Apply for admission to our institute</li>
                        <li className="text-gray-700">Provide information during the admission process</li>
                    </ul>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        The information we collect may include student's name, age, educational background, parent/guardian's name, contact details (phone, email, address), and any other information you choose to provide.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We use the information we collect solely for educational purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li className="text-gray-700">To respond to your enquiries and provide information about our courses</li>
                        <li className="text-gray-700">To process and manage admissions</li>
                        <li className="text-gray-700">To communicate regarding institute updates and events</li>
                        <li className="text-gray-700">To improve our services and website experience</li>
                    </ul>

                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 mt-8">Protection of Your Information</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 mt-8">Third-Party Services</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We do not share your personal information with third parties except as required by law or to fulfill our educational services. In such cases, we ensure these parties adhere to strict confidentiality standards.
                    </p>

                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 mt-8">Contact for Privacy Concerns</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        If you have any questions about our Privacy Policy or the handling of your personal information, please contact us:
                    </p>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                        <p className="text-gray-800 font-medium">Ursuline Study Centre</p>
                        <p className="text-gray-700">Near Ursuline Convent School, Purliya Road, Ranchi, Jharkhand</p>
                        <p className="text-gray-700">Phone: +91 79790 00000</p>
                        <p className="text-gray-700">Email: ursulinestudycentre@gmail.com</p>
                    </div>

                    <p className="text-gray-600 text-sm mt-8 italic">
                        This Privacy Policy is effective as of April 27, 2026. We reserve the right to update this policy periodically.
                    </p>
                </div>
            </div>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default PrivacyPolicy;

export const metadata: Metadata = {
    title: 'Privacy Policy | Ursuline Study Centre',
    description: 'Learn how Ursuline Study Centre protects your personal information and privacy.',
};