// src/LandingPage.js
import React from 'react';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <header className="text-center py-10 bg-blue-600 text-white">
                <h1 className="text-4xl font-bold">MENA Health</h1>
                <p className="mt-2 text-lg">Empowering Communities to Rebuild and Restore Essential Healthcare Through Telemedicine</p>
                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">Donate</button>
                    <button className="bg-gray-200 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-300">Get Involved</button>
                </div>
            </header>

            <main className="px-6 py-10 max-w-3xl mx-auto space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Our Goal</h2>
                    <p className="mt-4">Forging connections between under-resourced communities in the region and a global network of aid and expertise:</p>
                    <ul className="mt-4 list-disc pl-5 space-y-2">
                        <li>Streamline patient enrollment & care</li>
                        <li>Enhance primary & specialty medicine</li>
                        <li>Support local healthcare systems</li>
                        <li>Leverage technology for broader impact</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
                    <p className="mt-4">
                        A world in which all people have access to quality and essential healthcare, regardless of geographic or political constraints,
                        by providing a lifeline to these communities through remote medical consultations and support to local health infrastructure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-blue-600">Our Focus</h2>
                    <p className="mt-4">
                        Prioritizing sustainability and collaboration to enable vital medical services access for those in need.
                    </p>
                    <ul className="mt-4 list-disc pl-5 space-y-2">
                        <li>Physician-patient consultation across 30+ medical specialties</li>
                        <li>Virtual mental health and emotional support counseling</li>
                        <li>Support local medical infrastructure through training and education</li>
                        <li>Address specific health needs of various populations and communities</li>
                        <li>Targeted aid provisions through continuous needs assessments</li>
                    </ul>
                </section>

                <section className="text-center bg-gray-100 py-6">
                    <h3 className="text-lg font-semibold">Stay up to date with MENA Health</h3>
                    <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500">
                        Sign Up
                    </button>
                </section>
            </main>

            <footer className="bg-blue-600 text-white text-center py-6">
                <p>MENA Health is a 501(c)(3) not-for-profit organization</p>
                <p>Contact us at: <a href="mailto:contactus@menahealth.org" className="text-gray-200 hover:text-white">contactus@menahealth.org</a></p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:underline">Facebook</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;