import React, { useEffect, useState } from 'react';


export const Contactus = () => {
    useEffect(() => {
        document.title = "Contact Us | TamilNadu Flyash Product Manufacturer Association";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        brickType: 'High-Strength Structural Bricks (Class 10/15)',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! Your enquiry about ${formData.brickType} has been received. Our team will get back to you shortly.`);
        setFormData({
            name: '',
            email: '',
            phone: '',
            location: '',
            brickType: 'High-Strength Structural Bricks (Class 10/15)',
            message: ''
        });
    };

    return (
        <>
            <div className="contact-page-wrapper">
                <div className="contact-grid">
                    {/* Left Side: Contact Information */}
                    <div className="contact-info-left">
                        <span className="contact-badge">Get In Touch</span>
                        <h1>We'd Love to Hear From You</h1>
                        <p className="contact-info-desc">
                            Have questions about fly ash brick specifications, compressive strength grades, thermal properties, or delivery logistics across Tamil Nadu? Reach out to our team directly.
                        </p>

                        <div className="contact-details-list">
                            {/* Address */}
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="contact-detail-content">
                                    <h3>Association Office</h3>
                                    <p>AD61, New No. 3 AD Block, 3rd Street, Anna Nagar, Chennai - 600040</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="contact-detail-content">
                                    <h3>Call/WhatsApp</h3>
                                    <p>+91 88831 44777</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="contact-detail-content">
                                    <h3>Email Address</h3>
                                    <p>smtflyashbricks@gmail.com</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="contact-detail-content">
                                    <h3>Business Hours</h3>
                                    <p>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>

                            {/* X (Twitter) */}
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block', margin: 'auto' }}>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <div className="contact-detail-content">
                                    <h3>Follow Us on X</h3>
                                    <p>
                                        <a href="https://x.com/TamilNadu22365" target="_blank" rel="noopener noreferrer" style={{ color: '#0d8a72', fontWeight: 600, textDecoration: 'none' }}>
                                            @TamilNadu22365
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form Card */}
                    <div className="contact-form-card">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Project Location *</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        required
                                        placeholder="e.g. Chennai, Madurai"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                             <div className="form-group">
                                <label htmlFor="brickType">Required Fly Ash Brick Type/Grade</label>
                                <select
                                    id="brickType"
                                    name="brickType"
                                    value={formData.brickType}
                                    onChange={handleChange}
                                >
                                    <option value="High-Strength Structural Bricks (Class 10/15)">High-Strength Structural Bricks (Class 10/15)</option>
                                    <option value="Standard Masonry Bricks (Class 7.5)">Standard Masonry Bricks (Class 7.5)</option>
                                    <option value="Eco-Friendly Lightweight Blocks">Eco-Friendly Lightweight Blocks</option>
                                    <option value="Custom Specification Bricks">Custom Specification Bricks</option>
                                    <option value="Other / General Enquiry">Other / General Enquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Describe your requirement (quantity, brick grade, compressive strength, delivery location)..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-form-submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map-wrapper">
                <iframe
                    className="map-iframe"
                    src="https://maps.google.com/maps?q=SMT+FLYASH+BRICKS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Perundurai Location"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};