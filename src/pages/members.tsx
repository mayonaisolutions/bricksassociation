import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MemberCard } from '../components/MemberCard';
import membersData from '../data/members.json';

interface Member {
    s_no: number;
    company: string;
    district: string;
    owner: string;
    address: string;
    mobile: string;
    aadhar: string;
    gst: string;
}

export const Members = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('ALL');
    const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
    const location = useLocation();

    // Sync state with URL query parameters for deep linking categories
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const zoneParam = params.get('zone');
        if (zoneParam) {
            const upperZone = zoneParam.toUpperCase();
            if (['COIMBATORE', 'ERODE', 'TIRUPUR', 'NAMAKKAL', 'KARUR', 'SALEM', 'DINDUGUL', 'DHARMAPURI'].includes(upperZone)) {
                setSelectedDistrict(upperZone);
            } else if (upperZone === 'METTUR' || upperZone === 'ALL') {
                setSelectedDistrict('ALL');
            }
        }
    }, [location]);

    useEffect(() => {
        document.title = "Members Directory | Tamilnadu Fly Ash Bricks Association";
        
        // Add or update meta description dynamically
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Browse verified fly ash bricks manufacturers and association members across Tamil Nadu zone-wise.");
        }
    }, []);

    // Filter and search logic
    useEffect(() => {
        let results = membersData as Member[];

        // 1. Filter by District (Zone)
        if (selectedDistrict !== 'ALL') {
            results = results.filter(m => m.district === selectedDistrict);
        }

        // 2. Filter by Search Term
        if (searchTerm.trim() !== '') {
            const query = searchTerm.toLowerCase();
            results = results.filter(m => 
                m.company.toLowerCase().includes(query) || 
                m.owner.toLowerCase().includes(query) ||
                m.address.toLowerCase().includes(query)
            );
        }

        setFilteredMembers(results);
    }, [searchTerm, selectedDistrict]);

    // Distinct list of districts from members data for tab categories
    const districts = ['ALL', 'COIMBATORE', 'ERODE', 'TIRUPUR', 'NAMAKKAL', 'KARUR', 'SALEM', 'DINDUGUL', 'DHARMAPURI'];

    return (
        <div className="members-page-wrapper">
            {/* Page Header Banner */}
            <div className="members-hero">
                <div className="members-hero-inner">
                    <span className="members-hero-badge">Verified Manufacturers</span>
                    <h1>Association Members Directory</h1>
                    <p className="members-hero-text">
                        Connecting you with certified high-quality Fly Ash Bricks and Paver Block manufacturers in Mettur Zone, Tamil Nadu. Filter by district or search for specific members below.
                    </p>
                </div>
            </div>

            <div className="members-content-container">
                {/* Search and Filters Section */}
                <div className="search-filter-section">
                    {/* Search Input Box */}
                    <div className="search-box-wrapper">
                        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Search by company, owner name, or location..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button className="clear-search-btn" onClick={() => setSearchTerm('')} title="Clear search">
                                &times;
                            </button>
                        )}
                    </div>

                    {/* Zone/District Selector Tabs */}
                    <div className="district-tabs-wrapper">
                        <div className="district-tabs">
                            {districts.map(dist => (
                                <button
                                    key={dist}
                                    className={`district-tab-btn ${selectedDistrict === dist ? 'active' : ''}`}
                                    onClick={() => setSelectedDistrict(dist)}
                                >
                                    {dist === 'ALL' ? 'All Districts' : dist}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Directory Results Header */}
                <div className="results-header-info">
                    <h2>
                        {selectedDistrict === 'ALL' ? 'All Districts' : `${selectedDistrict} Zone`}
                        <span className="results-count-badge">{filteredMembers.length} Members</span>
                    </h2>
                    {searchTerm && (
                        <p className="search-query-indicator">
                            Showing search results for "<span>{searchTerm}</span>"
                        </p>
                    )}
                </div>

                {/* Member Grid */}
                {filteredMembers.length > 0 ? (
                    <div className="members-grid-container">
                        {filteredMembers.map(member => (
                            <div key={member.s_no} className="member-grid-card-item">
                                <MemberCard 
                                    name={member.owner || "MEMBER"}
                                    // zone={`${member.district}`}
                                    company={member.company}
                                    phone={member.mobile || "N/A"}
                                    location={member.district}
                                />
                                <div className="member-extra-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Address:</span>
                                        <span className="detail-value">{member.address || "N/A"}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results-found">
                        <svg className="no-results-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        <h3>No Members Found</h3>
                        <p>We couldn't find any members matching your filter or search query. Try clearing your search text or selecting a different district.</p>
                        <button className="reset-filters-btn" onClick={() => { setSearchTerm(''); setSelectedDistrict('ALL'); }}>
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
