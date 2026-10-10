import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    useEffect(() => {
        document.title = "Home | TamilNadu Flyash Product Manufacturer Association";
    }, []);

    return (
        <div className="home-page-wrapper">
            {/* Hero Section */}
            <div className="home-hero">
                <div className="home-hero-inner">
                    <span className="home-hero-badge">Eco-Friendly Construction Solutions</span>
                    <h1>Building the Future with Premium Eco-Friendly Fly Ash Bricks</h1>
                    <p className="home-hero-text">
                        Engineered to withstand heavy structural loads, resist weathering, and elevate the durability of any construction. Discover high-quality Fly Ash bricks manufactured with premium standards across Tamil Nadu.
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
                            <img src={`${process.env.PUBLIC_URL}/unity_community.png`} alt="TamilNadu Flyash Product Manufacturer Association Unity & Community" className="intro-main-image" />
                            <div className="since-badge">
                                <span className="since-title">Since</span>
                                <span className="since-year">2014</span>
                            </div>
                        </div>
                    </div>

                    <div className="home-intro-right">
                        <div className="intro-subtitle">
                            <span className="subtitle-line"></span>
                            <span className="subtitle-text">TAMILNADU FLYASH PRODUCT MANUFACTURER ASSOCIATION</span>
                        </div>
                        <h2 className="intro-title">Unity in Purpose, Growth in Community</h2>
                        <p className="intro-description">
                            Welcome to the TamilNadu Flyash Product Manufacturer Association, a dynamic community dedicated to revolutionizing the construction landscape through sustainable practices and innovative solutions.
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
                        Providing specialized, high-performance, and eco-friendly fly ash bricks for structural, commercial, and residential construction applications.
                    </p>

                    <div className="expertise-grid">
                        {/* Area 1: Structural & Load-Bearing Walls */}
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
                                <h3>Structural & Load-Bearing Walls</h3>
                                <p>High-compressive strength fly ash bricks engineered for load-bearing walls in multi-story residential buildings, industrial complexes, and commercial properties.</p>
                            </div>
                        </div>

                        {/* Area 2: Commercial & Infrastructure Projects */}
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
                                <h3>Commercial & Infrastructure</h3>
                                <p>Eco-friendly, lightweight, and thermal-insulating fly ash bricks optimized for large-scale commercial developments, public infrastructure, and government projects.</p>
                            </div>
                        </div>

                        {/* Area 3: Residential Masonry & Partition Walls */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Residential Masonry Walls</h3>
                                <p>Premium quality, dimensionally uniform fly ash bricks for home partitions, compound walls, and interior masonry work, offering smooth finishes and low plastering costs.</p>
                            </div>
                        </div>

                        {/* Area 4: Fly Ash Bricks */}
                        <div className="expertise-card">
                            <div className="expertise-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18" />
                                    <path d="M3 15h18" />
                                    <path d="M9 3v6" />
                                    <path d="M15 3v6" />
                                    <path d="M6 9v6" />
                                    <path d="M12 9v6" />
                                    <path d="M18 9v6" />
                                    <path d="M9 15v6" />
                                    <path d="M15 15v6" />
                                </svg>
                            </div>
                            <div className="expertise-info">
                                <h3>Eco-Friendly Fly Ash Bricks</h3>
                                <p>Sustainable, high-strength structural bricks manufactured from fly ash, ideal for load-bearing walls, masonry work, and high-performance, cost-effective buildings.</p>
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
                            Our association operates across designated regional zones in Tamil Nadu to foster local manufacturing growth and sustainable building:
                        </p>
                    </div>

                    <div className="home-zones-grid">
                        {/* Mettur Zone */}
                        <div className="home-zone-card" id="mettur-zone">
                            <div className="zone-card-image-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/mettur_pin.png`} alt="Mettur Zone Fly Ash Brick Manufacturers" className="zone-card-img" />
                                <span className="zone-card-badge">192 Members</span>
                            </div>
                            <div className="zone-card-body">
                                <h3 className="zone-card-title">METTUR</h3>
                                <div className="zone-card-divider"></div>
                                <p className="zone-card-desc">
                                    Encompassing 192 certified manufacturers across Salem, Coimbatore, Erode, Tirupur, Namakkal, Karur, Dindigul & Dharmapuri.
                                </p>
                                <Link to="/members?zone=mettur" className="zone-card-btn">
                                    <span>Member Details</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Neyveli Zone */}
                        <div className="home-zone-card" id="neyveli-zone">
                            <div className="zone-card-image-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/neyveli_pin.png`} alt="Neyveli Zone Fly Ash Brick Manufacturers" className="zone-card-img" />
                                <span className="zone-card-badge">35 Members</span>
                            </div>
                            <div className="zone-card-body">
                                <h3 className="zone-card-title">NEYVELI</h3>
                                <div className="zone-card-divider"></div>
                                <p className="zone-card-desc">
                                    Representing 35 certified fly ash brick manufacturing units delivering quality construction products across the Neyveli zone.
                                </p>
                                <Link to="/members?zone=neyveli" className="zone-card-btn">
                                    <span>Member Details</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Chennai Zone */}
                        <div className="home-zone-card" id="chennai-zone">
                            <div className="zone-card-image-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/chennai_pin.png`} alt="Chennai Zone Fly Ash Brick Manufacturers" className="zone-card-img" />
                                <span className="zone-card-badge">38 Members</span>
                            </div>
                            <div className="zone-card-body">
                                <h3 className="zone-card-title">CHENNAI</h3>
                                <div className="zone-card-divider"></div>
                                <p className="zone-card-desc">
                                    Featuring 38 verified Fly Ash Bricks manufacturers serving the Chennai and metropolitan capital region.
                                </p>
                                <Link to="/members?zone=chennai" className="zone-card-btn">
                                    <span>Member Details</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Tutukudi Zone */}
                        <div className="home-zone-card" id="tutukudi-zone">
                            <div className="zone-card-image-wrapper">
                                <img src={`${process.env.PUBLIC_URL}/tuticorin_pin.png`} alt="Tutukudi Zone Fly Ash Brick Manufacturers" className="zone-card-img" />
                                <span className="zone-card-badge">68 Members</span>
                            </div>
                            <div className="zone-card-body">
                                <h3 className="zone-card-title">TUTUKUDI</h3>
                                <div className="zone-card-divider"></div>
                                <p className="zone-card-desc">
                                    A vibrant hub with 68 association members supplying eco-friendly building blocks across Tutukudi & southern Tamil Nadu.
                                </p>
                                <Link to="/members?zone=tutukudi" className="zone-card-btn">
                                    <span>Member Details</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Row */}
                <div className="home-cta-banner">
                    <h3>Build Your Project with the Experts</h3>
                    <p>Contact the TamilNadu Flyash Product Manufacturer Association today to coordinate supply, select brick grades, or consult on compressive strength and thermal specifications.</p>
                    <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};