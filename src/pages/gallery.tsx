import React, { useEffect, useState } from 'react';
import rawGalleryData from '../data/gallery.json';

interface GalleryConfig {
    folderUrl?: string;
    folderId?: string;
    images?: (string | { url?: string; driveUrl?: string; imageName?: string })[];
}

// Utility to convert Google Drive file sharing links, direct URLs, or local assets into displayable image URLs
const getDirectImageUrl = (urlOrItem: string | { url?: string; driveUrl?: string; imageName?: string }): string => {
    let urlOrName = '';
    
    if (typeof urlOrItem === 'string') {
        urlOrName = urlOrItem;
    } else if (urlOrItem && typeof urlOrItem === 'object') {
        urlOrName = urlOrItem.driveUrl || urlOrItem.url || urlOrItem.imageName || '';
    }

    if (!urlOrName) return '';

    // Check if it's a Google Drive URL
    if (urlOrName.includes('drive.google.com')) {
        const fileIdMatch = urlOrName.match(/\/file\/d\/([^/?]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
            return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
        }
        const idParamMatch = urlOrName.match(/[?&]id=([^&]+)/);
        if (idParamMatch && idParamMatch[1]) {
            return `https://lh3.googleusercontent.com/d/${idParamMatch[1]}`;
        }
    }

    // Check if it is a full HTTP/HTTPS URL
    if (urlOrName.startsWith('http://') || urlOrName.startsWith('https://')) {
        return urlOrName;
    }

    // Fallback to local asset in public directory
    return `${process.env.PUBLIC_URL}/${urlOrName}`;
};

const BATCH_SIZE = 48;

export const Gallery: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

    useEffect(() => {
        document.title = "Gallery | TamilNadu Flyash Product Manufacturer Association";
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explore our full gallery of fly ash brick products and regional manufacturing unit images.");
        }
    }, []);

    // Extract images list and optional folderUrl from gallery.json configuration
    const config: GalleryConfig = rawGalleryData as any;
    const imagesList: (string | { url?: string; driveUrl?: string; imageName?: string })[] = 
        Array.isArray(config) 
            ? config 
            : (Array.isArray(config.images) ? config.images : []);

    const visibleImages = imagesList.slice(0, visibleCount);

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null || imagesList.length === 0) return;
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + imagesList.length) % imagesList.length : null));
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null || imagesList.length === 0) return;
        const nextIdx = (selectedIndex + 1) % imagesList.length;
        if (nextIdx >= visibleCount) {
            setVisibleCount(prev => Math.min(imagesList.length, prev + BATCH_SIZE));
        }
        setSelectedIndex(nextIdx);
    };

    // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') {
                setSelectedIndex(null);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setSelectedIndex((prev) => {
                    if (prev === null) return null;
                    const next = (prev + 1) % imagesList.length;
                    if (next >= visibleCount) {
                        setVisibleCount(v => Math.min(imagesList.length, v + BATCH_SIZE));
                    }
                    return next;
                });
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setSelectedIndex((prev) => {
                    if (prev === null) return null;
                    return (prev - 1 + imagesList.length) % imagesList.length;
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, imagesList.length, visibleCount]);

    return (
        <div className="gallery-page-wrapper">
            {/* Gallery Hero Header */}
            <div className="gallery-hero">
                <div className="gallery-hero-inner">
                    <span className="gallery-hero-badge">Visual Showcase</span>
                    <h1>Our Gallery</h1>
                </div>
            </div>

            <div className="gallery-content-container">
                {/* Clean Image Grid */}
                <div className="gallery-grid">
                    {visibleImages.map((item, index) => {
                        const imgUrl = getDirectImageUrl(item);
                        return (
                            <div 
                                key={index} 
                                className="gallery-card"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className="gallery-card-image-wrapper">
                                    <img 
                                        src={imgUrl} 
                                        alt={`Gallery showcase ${index + 1}`} 
                                        className="gallery-card-img" 
                                        loading="lazy"
                                        onError={(e) => {
                                             const target = e.currentTarget;
                                            if (target.src.includes('lh3.googleusercontent.com/d/')) {
                                                const fileId = target.src.split('/d/')[1];
                                                if (fileId) {
                                                    target.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                                                }
                                            }
                                        }}
                                    />
                                    <div className="gallery-card-overlay">
                                        <div className="overlay-zoom-icon">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                                <line x1="8" y1="11" x2="14" y2="11"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {visibleCount < imagesList.length && (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button 
                            className="btn-primary" 
                            onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
                            style={{ padding: '14px 36px', fontSize: '15px' }}
                        >
                            Load More Photos ({imagesList.length - visibleCount} remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal with Arrow Key Navigation */}
            {selectedIndex !== null && (
                <div className="lightbox-backdrop" onClick={() => setSelectedIndex(null)}>
                    {/* Previous Button */}
                    <button 
                        className="lightbox-nav-btn prev" 
                        onClick={handlePrev}
                        aria-label="Previous Image"
                        title="Previous Image (Left Arrow)"
                    >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button 
                        className="lightbox-nav-btn next" 
                        onClick={handleNext}
                        aria-label="Next Image"
                        title="Next Image (Right Arrow)"
                    >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    {/* Counter Indicator */}
                    <div className="lightbox-counter">
                        {selectedIndex + 1} / {imagesList.length}
                    </div>

                    <div className="lightbox-content image-only-modal" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="lightbox-close-btn" 
                            onClick={() => setSelectedIndex(null)}
                            aria-label="Close Preview"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="lightbox-image-wrapper">
                            <img 
                                src={getDirectImageUrl(imagesList[selectedIndex])} 
                                alt={`Gallery showcase ${selectedIndex + 1}`} 
                                className="lightbox-img" 
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
