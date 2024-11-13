// src/LandingPage.js
import React from 'react';

const LandingPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>MENA Health</h1>
                <h2>Empowering Communities to Rebuild and Restore Essential Healthcare Through Telemedicine</h2>
                <button style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>Donate</button>
                <button style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>Get Involved</button>
            </header>

            <section>
                <h3>Our Goal</h3>
                <p>
                    Forging connections between under-resourced communities in the region and a global network of aid and expertise:
                </p>
                <ul>
                    <li>Streamline patient enrollment & care</li>
                    <li>Enhance primary & specialty medicine</li>
                    <li>Support local healthcare systems​</li>
                    <li>Leverage technology for broader impact​</li>
                </ul>
            </section>

            <section>
                <h3>Our Vision</h3>
                <p>
                    A world in which all people have access to quality and essential healthcare, regardless of geographic or political constraints,
                    by providing a lifeline to these communities through remote medical consultations and support to local health infrastructure.
                </p>
            </section>

            <section>
                <h3>Our Focus</h3>
                <p>
                    Prioritizing sustainability and collaboration to enable vital medical services access for those in need.
                </p>
                <ul>
                    <li>Physician-patient consultation across 30+ medical specialties</li>
                    <li>Virtual mental health and emotional support counseling</li>
                    <li>Support local medical infrastructure through training and education</li>
                    <li>Address specific health needs of various populations and communities</li>
                    <li>Targeted aid provisions through continuous needs assessments</li>
                </ul>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '40px' }}>
                <p>MENA Health is a 501(c)(3) not-for-profit organization</p>
                <p>Contact us at: <a href="mailto:contactus@menahealth.org">contactus@menahealth.org</a></p>
                <p>Follow us on social media: Facebook | Instagram | LinkedIn</p>
            </footer>
        </div>
    );
};

export default LandingPage;