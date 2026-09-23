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

export const Gallery: React.FC = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Gallery | TamilNadu Flyash Product Manufacturer Association";
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explore our gallery of fly ash brick products and regional manufacturing unit images.");
        }
    }, []);

    // Close lightbox on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Extract images list and optional folderUrl from gallery.json configuration
    const config: GalleryConfig = rawGalleryData as any;
    const imagesList: (string | { url?: string; driveUrl?: string; imageName?: string })[] = 
        Array.isArray(config) 
            ? config 
            : (Array.isArray(config.images) ? config.images : []);

    const folderUrl = !Array.isArray(config) ? config.folderUrl : undefined;

    return (
        <div className="gallery-page-wrapper">
            {/* Gallery Hero Header */}
            <div className="gallery-hero">
                <div className="gallery-hero-inner">
                    <span className="gallery-hero-badge">Visual Showcase</span>
                    <h1>Our Gallery</h1>
                    {folderUrl && (
                        <a 
                            href={folderUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-secondary" 
                            style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            View Google Drive Folder
                        </a>
                    )}
                </div>
            </div>

            <div className="gallery-content-container">
                {/* Clean Image Grid */}
                <div className="gallery-grid">
                    {imagesList.map((item, index) => {
                        const imgUrl = getDirectImageUrl(item);
                        return (
                            <div 
                                key={index} 
                                className="gallery-card"
                                onClick={() => setActiveImage(imgUrl)}
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
            </div>

            {/* Lightbox Modal */}
            {activeImage && (
                <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
                    <div className="lightbox-content image-only-modal" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="lightbox-close-btn" 
                            onClick={() => setActiveImage(null)}
                            aria-label="Close Preview"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="lightbox-image-wrapper">
                            <img 
                                src={activeImage} 
                                alt="Gallery preview full view" 
                                className="lightbox-img" 
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
