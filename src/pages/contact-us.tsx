import React, { useEffect, useState } from 'react';
import { MemberCard } from '../components/MemberCard';

export const Contactus = () => {
    useEffect(() => {
        document.title = "Contact Us | Tamilnadu Fly Ash Bricks Association";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        paverType: 'Heavy-Duty Industrial Pavers',
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
        alert(`Thank you ${formData.name}! Your enquiry about ${formData.paverType} has been received. Our team will get back to you shortly.`);
        setFormData({
            name: '',
            email: '',
            phone: '',
            location: '',
            paverType: 'Heavy-Duty Industrial Pavers',
            message: ''
        });
    };

    return (
        <div className="contact-page-wrapper">
            <div className="contact-grid">
                {/* Left Side: Contact Information */}
                <div className="contact-info-left">
                    <span className="contact-badge">Get In Touch</span>
                    <h1>We'd Love to Hear From You</h1>
                    <p className="contact-info-desc">
                        Have questions about concrete paver block specifications, compressive strength grades, layout designs, or delivery logistics across Tamil Nadu? Reach out to our team directly.
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
                            <label htmlFor="paverType">Required Paver Block Type</label>
                            <select 
                                id="paverType" 
                                name="paverType" 
                                value={formData.paverType}
                                onChange={handleChange}
                            >
                                <option value="Heavy-Duty Industrial Pavers">Heavy-Duty Industrial Pavers (M40/M50)</option>
                                <option value="Commercial Plazas & Walkways">Commercial Plazas & Walkways (M30/M40)</option>
                                <option value="Decorative Residential Pavers">Decorative Residential Pavers (M30)</option>
                                <option value="Eco-Permeable Drainage Pavers">Eco-Permeable Drainage Pavers</option>
                                <option value="Other / General Enquiry">Other / General Enquiry</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                placeholder="Describe your requirement (quantity, area size, pattern preference)..."
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

            {/* Zone Coordinators Section */}
            <div className="zone-representatives-section">
                <div className="section-header">
                    <span className="contact-badge">Zone Coordinators</span>
                    <h2>Find Your Nearest Representative</h2>
                    <p className="section-desc">
                        Get in touch with our regional coordinators for localized support, bulk pricing, and manufacturer coordination across Tamil Nadu.
                    </p>
                </div>
                
                <div className="zones-grid">
                    {/* Chennai Zone */}
                    <div id="chennai-zone" className="zone-column">
                        <h3 className="zone-title">Chennai Zone</h3>
                        <MemberCard 
                            name="K. Rajasekar"
                            zone="Chennai Zone"
                            company="Sri Balaji Fly Ash Bricks"
                            phone="98401 23456"
                            location="Chennai"
                        />
                    </div>

                    {/* Mettur Zone */}
                    <div id="mettur-zone" className="zone-column">
                        <h3 className="zone-title">Mettur Zone</h3>
                        <MemberCard 
                            name="Dileep Aswanth"
                            zone="Mettur Zone"
                            company="Sivaaji Flyash Bricks"
                            phone="9994092998"
                            location="Erode"
                        />
                    </div>

                    {/* Tuticorin Zone */}
                    <div id="tuticorin-zone" className="zone-column">
                        <h3 className="zone-title">Tuticorin Zone</h3>
                        <MemberCard 
                            name="S. Murugan"
                            zone="Tuticorin Zone"
                            company="Nellai Fly Ash Bricks"
                            phone="94431 98765"
                            location="Tuticorin"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};