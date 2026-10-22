import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MemberCard } from '../components/MemberCard';
import membersData from '../data/members.json';

interface Member {
    s_no: number;
    company: string;
    zone: string;
    district: string;
    owner: string;
    address: string;
    mobile: string;
    aadhar?: string;
    gst?: string;
    imageUrl?: string;
    image?: string;
    driveUrl?: string;
    drive_link?: string;
    photo?: string;
}

const getMemberZone = (district?: string, explicitZone?: string): string => {
    if (explicitZone) return explicitZone.toUpperCase();
    const d = (district || '').toUpperCase().trim();
    if (d === 'CHENNAI') return 'CHENNAI';
    if (d === 'NEYVELI') return 'NEYVELI';
    if (d === 'TUTICORIN' || d === 'THOOTHUKUDI') return 'TUTICORIN';
    return 'METTUR';
};

export const Members = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedZone, setSelectedZone] = useState('ALL');
    const [selectedDistrict, setSelectedDistrict] = useState('ALL');
    const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
    const location = useLocation();

    // 4 Association Zones
    const zones = [
        { id: 'ALL', label: 'All Zones' },
        { id: 'METTUR', label: 'Mettur Zone' },
        { id: 'NEYVELI', label: 'Neyveli Zone' },
        { id: 'CHENNAI', label: 'Chennai Zone' },
        { id: 'TUTICORIN', label: 'Tuticorin Zone' }
    ];

    // Calculate zone counts
    const membersList = membersData as Member[];
    const zoneCounts: Record<string, number> = {
        ALL: membersList.length,
        METTUR: membersList.filter(m => getMemberZone(m.district, m.zone) === 'METTUR').length,
        NEYVELI: membersList.filter(m => getMemberZone(m.district, m.zone) === 'NEYVELI').length,
        CHENNAI: membersList.filter(m => getMemberZone(m.district, m.zone) === 'CHENNAI').length,
        TUTICORIN: membersList.filter(m => getMemberZone(m.district, m.zone) === 'TUTICORIN').length
    };

    const activeZoneObj = zones.find(z => z.id === selectedZone);
    const zoneShortName = activeZoneObj ? activeZoneObj.label.replace(/\s+Zone$/i, '') : selectedZone;

    // Dynamically calculate districts and counts for whichever zone is currently selected
    const { currentZoneDistricts, districtCounts } = useMemo(() => {
        if (selectedZone === 'ALL') {
            return { currentZoneDistricts: [] as string[], districtCounts: {} as Record<string, number> };
        }

        const zoneMembers = membersList.filter(m => getMemberZone(m.district, m.zone) === selectedZone);
        const counts: Record<string, number> = {};

        zoneMembers.forEach(m => {
            const dist = (m.district || '').toUpperCase().trim();
            if (dist) {
                counts[dist] = (counts[dist] || 0) + 1;
            }
        });

        // Sort by count descending, then alphabetically
        const sortedDistricts = Object.keys(counts).sort((a, b) => {
            if (counts[b] !== counts[a]) {
                return counts[b] - counts[a];
            }
            return a.localeCompare(b);
        });

        return {
            currentZoneDistricts: ['ALL', ...sortedDistricts],
            districtCounts: counts
        };
    }, [selectedZone, membersList]);

    // Sync state with URL query parameters for deep linking categories
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const zoneParam = params.get('zone');
        const districtParam = params.get('district');

        if (zoneParam) {
            const upper = zoneParam.toUpperCase();
            if (upper === 'METTUR') {
                setSelectedZone('METTUR');
            } else if (upper === 'NEYVELI') {
                setSelectedZone('NEYVELI');
            } else if (upper === 'CHENNAI') {
                setSelectedZone('CHENNAI');
            } else if (upper === 'TUTICORIN' || upper === 'THOOTHUKUDI') {
                setSelectedZone('TUTICORIN');
            } else {
                // If a district name was passed as zone, detect its zone
                const matchingMember = membersList.find(
                    m => (m.district || '').toUpperCase().trim() === upper
                );
                if (matchingMember) {
                    setSelectedZone(getMemberZone(matchingMember.district, matchingMember.zone));
                    setSelectedDistrict(upper);
                    return;
                } else {
                    setSelectedZone('ALL');
                }
            }
        }

        if (districtParam) {
            const upperDist = districtParam.toUpperCase().trim();
            setSelectedDistrict(upperDist);
            if (!zoneParam || zoneParam.toUpperCase() === 'ALL') {
                const matchingMember = membersList.find(
                    m => (m.district || '').toUpperCase().trim() === upperDist
                );
                if (matchingMember) {
                    setSelectedZone(getMemberZone(matchingMember.district, matchingMember.zone));
                }
            }
        } else if (zoneParam && ['METTUR', 'NEYVELI', 'CHENNAI', 'TUTICORIN', 'THOOTHUKUDI'].includes(zoneParam.toUpperCase())) {
            setSelectedDistrict('ALL');
        }
    }, [location, membersList]);

    useEffect(() => {
        document.title = "Members Directory | TamilNadu Flyash Product Manufacturer Association";

        // Add or update meta description dynamically
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Browse verified fly ash bricks manufacturers and association members across Tamil Nadu zone-wise: Mettur, Neyveli, Chennai, and Tuticorin.");
        }
    }, []);

    // Filter and search logic
    useEffect(() => {
        let results = membersList;

        // 1. Filter by Zone
        if (selectedZone !== 'ALL') {
            results = results.filter(m => getMemberZone(m.district, m.zone) === selectedZone);
        }

        // 2. Filter by District (if in sub-filter)
        if (selectedZone !== 'ALL' && selectedDistrict !== 'ALL') {
            results = results.filter(m => (m.district || '').toUpperCase().trim() === selectedDistrict);
        }

        // 3. Filter by Search Term
        if (searchTerm.trim() !== '') {
            const query = searchTerm.toLowerCase();
            results = results.filter(m =>
                (m.company && m.company.toLowerCase().includes(query)) ||
                (m.owner && m.owner.toLowerCase().includes(query)) ||
                (m.district && m.district.toLowerCase().includes(query)) ||
                (m.address && m.address.toLowerCase().includes(query)) ||
                (m.zone && m.zone.toLowerCase().includes(query))
            );
        }

        setFilteredMembers(results);
    }, [searchTerm, selectedZone, selectedDistrict, membersList]);

    const handleZoneSelect = (zoneId: string) => {
        setSelectedZone(zoneId);
        setSelectedDistrict('ALL');
    };

    return (
        <div className="members-page-wrapper">
            {/* Page Header Banner */}
            <div className="members-hero">
                <div className="members-hero-inner">
                    <span className="members-hero-badge">Verified Manufacturers</span>
                    <h1>Association Members Directory</h1>
                    <p className="members-hero-text">
                        Connecting you with certified high-quality Fly Ash Bricks manufacturers across Tamil Nadu. Filter by zone (Mettur, Neyveli, Chennai, Tuticorin) or search for specific members below.
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
                            placeholder="Search by company, owner name, district, or location..."
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

                    {/* Zone Selector Tabs */}
                    <div className="district-tabs-wrapper">
                        <div className="district-tabs">
                            {zones.map(z => (
                                <button
                                    key={z.id}
                                    className={`district-tab-btn ${selectedZone === z.id ? 'active' : ''}`}
                                    onClick={() => handleZoneSelect(z.id)}
                                >
                                    {z.label} ({zoneCounts[z.id]})
                                </button>
                            ))}
                        </div>

                        {/* District Sub-filter when any zone is selected */}
                        {selectedZone !== 'ALL' && currentZoneDistricts.length > 1 && (
                            <div className="sub-district-wrapper">
                                <div className="sub-district-header">
                                    <div className="sub-district-title-group">
                                        <svg className="sub-district-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                        </svg>
                                        <span className="sub-district-title">
                                            Filter by District in {activeZoneObj?.label || `${selectedZone} Zone`}:
                                        </span>
                                    </div>
                                    {selectedDistrict !== 'ALL' && (
                                        <button
                                            type="button"
                                            className="sub-district-clear-btn"
                                            onClick={() => setSelectedDistrict('ALL')}
                                        >
                                            Show All {zoneShortName} Districts
                                        </button>
                                    )}
                                </div>
                                <div className="sub-district-pills">
                                    {currentZoneDistricts.map(dist => {
                                        const count = dist === 'ALL'
                                            ? (zoneCounts[selectedZone] || 0)
                                            : (districtCounts[dist] || 0);
                                        return (
                                            <button
                                                key={dist}
                                                type="button"
                                                className={`sub-district-btn ${selectedDistrict === dist ? 'active' : ''}`}
                                                onClick={() => setSelectedDistrict(dist)}
                                            >
                                                <span className="sub-district-name">
                                                    {dist === 'ALL' ? `All ${zoneShortName} Districts` : dist}
                                                </span>
                                                <span className="sub-district-count">{count}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Directory Results Header */}
                <div className="results-header-info">
                    <h2>
                        {selectedZone === 'ALL'
                            ? 'All Association Zones'
                            : `${activeZoneObj?.label || `${selectedZone} Zone`}${selectedDistrict !== 'ALL' ? ` — ${selectedDistrict}` : ''}`}
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
                                    zone={`${member.zone || getMemberZone(member.district)} ZONE`}
                                    company={member.company}
                                    phone={member.mobile || "N/A"}
                                    location={member.district}
                                    imageUrl={member.imageUrl || member.image || member.driveUrl || member.drive_link || member.photo}
                                />
                                <div className="member-extra-details">
                                    <div className="detail-row">
                                        <span className="detail-label">District / Location:</span>
                                        <span className="detail-value">{member.district || "N/A"}</span>
                                    </div>
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
                        <p>We couldn't find any members matching your filter or search query. Try clearing your search text or selecting a different zone.</p>
                        <button className="reset-filters-btn" onClick={() => { setSearchTerm(''); setSelectedZone('ALL'); setSelectedDistrict('ALL'); }}>
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
