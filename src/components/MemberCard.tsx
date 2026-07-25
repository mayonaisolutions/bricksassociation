import React from 'react';
import { MemberCardProps } from '../types/types';

export const MemberCard: React.FC<MemberCardProps> = ({
    name,
    zone,
    company,
    phone,
    location,
    imageUrl
}) => {
    // Premium SVG Silhouette Avatar matching the user's screenshot (gray background, gray outline)
    const renderDefaultAvatar = () => (
        <svg viewBox="0 0 200 200" className="member-card-default-avatar" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="avatarBackgroundGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#d1d5db" />
                </radialGradient>
            </defs>
            {/* Background */}
            <rect width="200" height="200" fill="url(#avatarBackgroundGrad)" />
            {/* Head Silhouette */}
            <circle cx="100" cy="76" r="34" fill="#888888" />
            {/* Neck */}
            <path d="M86 100 h28 v20 h-28 z" fill="#888888" />
            {/* Shoulders */}
            <path d="M100 114c-42 0-76 18-76 46v24h152v-24c0-28-34-46-76-46z" fill="#888888" />
        </svg>
    );

    return (
        <div className="member-card-wrapper">
            <div className="member-card-image-container">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={`${name} - ${company}`} 
                        className="member-card-img" 
                    />
                ) : (
                    renderDefaultAvatar()
                )}
            </div>
            
            <div className="member-card-teal-box">
                <h3 className="member-card-name">{name.toUpperCase()}</h3>
                {zone && <p className="member-card-zone">{zone}</p>}
            </div>
            
            <div className="member-card-details">
                <h4 className="member-card-company">{company.toUpperCase()}</h4>
                
                <div className="member-card-info-item">
                    <svg className="member-card-icon phone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    <a href={`tel:${phone}`} className="member-card-phone-link">{phone}</a>
                </div>
                
                <div className="member-card-info-item">
                    <svg className="member-card-icon location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="member-card-location">{location.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};
