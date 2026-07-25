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
                        <Link to="/contact-us" className="btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Main Page Content */}
            <div className="home-content-container">
                {/* Intro Section with Partnership & Growth */}
                <div className="home-intro-section">
                    <div className="home-intro-left">
                        <div className="intro-image-wrapper">
                            <img src="unity_community.png" alt="Tamilnadu Flyash Bricks Association Unity & Community" className="intro-main-image" />
                            <div className="since-badge">
                                <span className="since-title">Since</span>
                                <span className="since-year">2014</span>
                            </div>
                        </div>
                    </div>

                    <div className="home-intro-right">
                        <div className="intro-subtitle">
                            <span className="subtitle-line"></span>
                            <span className="subtitle-text">TAMILNADU FLYASH BRICKS ASSOCIATION</span>
                        </div>
                        <h2 className="intro-title">Unity in Purpose, Growth in Community</h2>
                        <p className="intro-description">
                            Welcome to the Tamilnadu Fly Ash Bricks Association, a dynamic community dedicated to revolutionizing the construction landscape through sustainable practices and innovative solutions.
                        </p>

                        <div className="intro-progress-container">
                            <div className="progress-bar-header">
                                <span className="progress-percent">100%</span>
                            </div>
                            <div className="progress-bar-track">
                                <div className="progress-bar-fill"></div>
                            </div>
                        </div>

                        <div className="intro-seal-badge">
                            <div className="seal-svg-container">
                                <svg width="72" height="72" viewBox="0 0 100 100" className="env-badge-svg-elem">
                                    <defs>
                                        <path id="badgeTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                                    </defs>
                                    <circle cx="50" cy="50" r="48" fill="#10b981" stroke="#047857" strokeWidth="1" />
                                    <circle cx="50" cy="50" r="45" fill="#ffffff" />
                                    <circle cx="50" cy="50" r="42" fill="#10b981" />
                                    <circle cx="50" cy="50" r="33" fill="#ffffff" />
                                    
                                    <text fill="#ffffff" fontSize="6.2" fontWeight="bold" letterSpacing="0.6">
                                        <textPath href="#badgeTextPath" startOffset="50%" textAnchor="middle">
                                            ENVIRONMENTALLY FRIENDLY •
                                        </textPath>
                                    </text>
                                    
                                    <g transform="translate(50, 48) scale(0.9)">
                                        <text x="0" y="-3" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8.5" fontWeight="900" fill="#047857" textAnchor="middle">FLY ASH</text>
                                        <text x="0" y="7" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8.5" fontWeight="900" fill="#047857" textAnchor="middle">BRICKS</text>
                                    </g>
                                    <circle cx="50" cy="65" r="2" fill="#047857" />
                                    <circle cx="43" cy="64" r="1.5" fill="#047857" />
                                    <circle cx="57" cy="64" r="1.5" fill="#047857" />
                                </svg>
                            </div>
                            <div className="seal-text-container">
                                <h3>ENVIRONMENT FRIENDLY</h3>
                                <p>FLYASH BRICKS</p>
                            </div>
                        </div>
                    </div>
                </div>

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

                {/* Regional Zones Section */}
                <div className="home-zones-section">
                    <div className="zone-section-header" style={{ textAlign: 'center', margin: '0 auto 50px auto' }}>
                        <span className="home-hero-badge" style={{ background: 'rgba(13, 138, 114, 0.1)', color: '#0d8a72', border: '1px solid rgba(13, 138, 114, 0.2)' }}>Association Zones</span>
                        <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#111827', margin: '15px 0 10px 0' }}>Explore Our Regional Zones</h2>
                        <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 auto', maxWidth: '700px', lineHeight: '1.6' }}>
                            Our association operates across designated regional zones in Tamil Nadu to foster local manufacturing growth and sustainable building.
                        </p>
                    </div>

                    <div className="home-zones-grid">
                        {/* Chennai Zone */}
                        <div className="home-zone-card" id="chennai-zone">
                            <div className="zone-card-image-wrapper">
                                <img src="chennai_pin.png" alt="Chennai Zone Location Map" className="zone-card-img" />
                            </div>
                            <h3 className="zone-card-title">CHENNAI ZONE</h3>
                            <div className="zone-card-divider"></div>
                            <p className="zone-card-desc">
                                The Chennai Zone Association Members are an integral part of the larger Tamilnadu Fly Ash Bricks Association, contributing to the growth and success of sustainable construction practices within the Chennai region.
                            </p>
                            <Link to="/members" className="zone-card-btn">Member Details</Link>
                        </div>

                        {/* Mettur Zone */}
                        <div className="home-zone-card" id="mettur-zone">
                            <div className="zone-card-image-wrapper">
                                <img src="mettur_pin.png" alt="Mettur Zone Location Map" className="zone-card-img" />
                            </div>
                            <h3 className="zone-card-title">METTUR ZONE</h3>
                            <div className="zone-card-divider"></div>
                            <p className="zone-card-desc">
                                The Mettur Zone Association Members play a vital role in advancing the goals of the Tamilnadu Fly Ash Bricks Association within the Mettur region.
                            </p>
                            <Link to="/members" className="zone-card-btn">Member Details</Link>
                        </div>

                        {/* Neyveli Zone */}
                        <div className="home-zone-card" id="neyveli-zone">
                            <div className="zone-card-image-wrapper">
                                <img src="neyveli_pin.png" alt="Neyveli Zone Location Map" className="zone-card-img" />
                            </div>
                            <h3 className="zone-card-title">NEYVELI ZONE</h3>
                            <div className="zone-card-divider"></div>
                            <p className="zone-card-desc">
                                The Neyveli Zone Association Members form an integral part of the Tamilnadu Fly Ash Bricks Association, actively contributing to the promotion of sustainable construction practices in the Neyveli region.
                            </p>
                            <Link to="/members" className="zone-card-btn">Member Details</Link>
                        </div>

                        {/* Tuticorin Zone */}
                        <div className="home-zone-card" id="tuticorin-zone">
                            <div className="zone-card-image-wrapper">
                                <img src="tuticorin_pin.png" alt="Tuticorin Zone Location Map" className="zone-card-img" />
                            </div>
                            <h3 className="zone-card-title">TUTICORIN ZONE</h3>
                            <div className="zone-card-divider"></div>
                            <p className="zone-card-desc">
                                The Tuticorin Zone Association Members form an integral part of the Tamilnadu Fly Ash Bricks Association, actively contributing to the promotion of sustainable construction practices in the Tuticorin region.
                            </p>
                            <Link to="/members" className="zone-card-btn">Member Details</Link>
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