import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    useEffect(() => {
        document.title = "Home | Tamilnadu Fly Ash Bricks Association";
    }, []);

    return (
        <div className="home-page-wrapper">
            {/* Hero Section */}
            <div className="home-hero">
                <div className="home-hero-inner">
                    <span className="home-hero-badge">Sustainable & Durable Pavements</span>
                    <h1>Paving the Future with Premium Concrete Pavers</h1>
                    <p className="home-hero-text">
                        Engineered to withstand heavy traffic, resist weathering, and elevate the aesthetics of any outdoor space. Discover M40+ grade interlocking concrete blocks manufactured with high-quality standards across Tamil Nadu.
                    </p>
                    <div className="home-hero-ctas">
                        <Link to="/aboutus" className="btn-primary">Explore Paver Designs</Link>
                        <Link to="/contact-us" className="btn-secondary">Request a Quote</Link>
                    </div>
                </div>
            </div>

            {/* Main Page Content */}
            <div className="home-content-container">
                <div className="area-expertise">
                    <h2>Check Our Key Areas of Expertise</h2>
                    <p className="area-expertise-subtitle">
                        Providing specialized, high-performance interlocking concrete paver blocks for residential, commercial, and heavy industrial applications.
                    </p>

                    <div className="expertise-grid">
                        {/* Area 1: Industrial Yards */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M12 3v18" />
                                    <path d="M3 12h18" />
                                    <path d="M7 7h10" />
                                    <path d="M7 17h10" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Industrial Yards & Roads</h3>
                                <p>Heavy-duty, high compressive strength (M40 & M50 grade) interlocking blocks engineered for factories, container terminals, warehouse yards, and heavy-vehicle roads.</p>
                            </div>
                        </div>

                        {/* Area 2: Commercial Areas */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="8" rx="2" />
                                    <rect x="2" y="14" width="20" height="8" rx="2" />
                                    <path d="M6 10v4" />
                                    <path d="M18 10v4" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Commercial & Public Spaces</h3>
                                <p>Aesthetic and high-performance paving solutions for shopping plazas, office parking lots, public pathways, walkways, and municipal parks, balancing layout versatility and strength.</p>
                            </div>
                        </div>

                        {/* Area 3: Residential Paving */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Residential Landscaping</h3>
                                <p>Premium decorative paver blocks for home driveways, backyard patios, garden walkways, and swimming pool decks, available in a variety of design patterns, shapes, and color tones.</p>
                            </div>
                        </div>

                        {/* Area 4: Permeable Paving */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Eco-Permeable Paving</h3>
                                <p>Smart storm-water drainage paver configurations designed to facilitate groundwater recharge, minimize puddles, and prevent stormwater pooling in critical flood-prone zones.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Row */}
                <div className="home-cta-banner">
                    <h3>Pave Your Project with the Experts</h3>
                    <p>Contact the Tamilnadu Fly Ash Bricks Association today to coordinate supply, select interlocking patterns, or consult on compressive strength grades.</p>
                    <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};