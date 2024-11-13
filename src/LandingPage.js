// src/LandingPage.js
import React from 'react';

const LandingPage = () => {
    return (
        <div className="font-sans p-6 max-w-3xl mx-auto">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold">MENA Health</h1>
                <h2 className="text-lg mt-2 text-gray-700">Empowering Communities to Rebuild and Restore Essential Healthcare Through Telemedicine</h2>
                <div className="mt-6">
                    <button className="px-4 py-2 m-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
                        Donate
                    </button>
                    <button className="px-4 py-2 m-2 bg-gray-200 text-gray-900 font-semibold rounded hover:bg-gray-300">
                        Get Involved
                    </button>
                </div>
            </header>

            <section className="mb-10">
                <h3 className="text-2xl font-semibold">Our Goal</h3>
                <p className="mt-4 text-gray-700">
                    Forging connections between under-resourced communities in the region and a global network of aid and expertise:
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                    <li>Streamline patient enrollment & care</li>
                    <li>Enhance primary & specialty medicine</li>
                    <li>Support local healthcare systems​</li>
                    <li>Leverage technology for broader impact​</li>
                </ul>
            </section>

            <section className="mb-10">
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="mt-4 text-gray-700">
                    A world in which all people have access to quality and essential healthcare, regardless of geographic or political constraints,
                    by providing a lifeline to these communities through remote medical consultations and support to local health infrastructure.
                </p>
            </section>

            <section className="mb-10">
                <h3 className="text-2xl font-semibold">Our Focus</h3>
                <p className="mt-4 text-gray-700">
                    Prioritizing sustainability and collaboration to enable vital medical services access for those in need.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                    <li>Physician-patient consultation across 30+ medical specialties</li>
                    <li>Virtual mental health and emotional support counseling</li>
                    <li>Support local medical infrastructure through training and education</li>
                    <li>Address specific health needs of various populations and communities</li>
                    <li>Targeted aid provisions through continuous needs assessments</li>
                </ul>
            </section>

            <footer className="text-center mt-10">
                <p className="text-gray-600">MENA Health is a 501(c)(3) not-for-profit organization</p>
                <p className="mt-2 text-gray-600">
                    Contact us at: <a href="mailto:contactus@menahealth.org" className="text-blue-600 hover:text-blue-500">contactus@menahealth.org</a>
                </p>
                <p className="mt-2 text-gray-600">Follow us on social media: Facebook | Instagram | LinkedIn</p>
            </footer>
        </div>
    );
};

export default LandingPage;