import React, { useEffect, useState } from 'react';

interface GalleryItem {
    id: number;
    title: string;
    category: 'Brick Products' | 'Manufacturing Plants' | 'Construction Projects' | 'Pavers & Blocks';
    imageName: string;
    description: string;
}

const galleryData: GalleryItem[] = [
    {
        id: 1,
        title: 'Precision Structural Fly Ash Bricks',
        category: 'Brick Products',
        imageName: 'coimbatore_district.png',
        description: 'High-compressive strength fly ash bricks manufactured with uniform dimensions and low water absorption for multi-story load-bearing structures.'
    },
    {
        title: 'Automated Vibro-Compaction Batching Yard',
        id: 2,
        category: 'Manufacturing Plants',
        imageName: 'erode_district.png',
        description: 'Modern fly ash brick manufacturing facility equipped with heavy-duty hydraulic compaction machinery and palletized handling.'
    },
    {
        id: 3,
        title: 'Eco-Friendly Residential Masonry Construction',
        category: 'Construction Projects',
        imageName: 'tirupur_district.png',
        description: 'Sustainable apartment building built using high-performance gray fly ash bricks, providing thermal insulation and plaster cost savings.'
    },
    {
        id: 4,
        title: 'Industrial Heavy Duty Masonry Blocks',
        category: 'Brick Products',
        imageName: 'salem_district.png',
        description: 'High-density fly ash blocks engineered for commercial warehouses, partition walls, and industrial infrastructure.'
    },
    {
        id: 5,
        title: 'District Supply & Outdoor Storage Yard',
        category: 'Manufacturing Plants',
        imageName: 'namakkal_district.png',
        description: 'Expansive outdoor brick curing and logistics fleet ready for rapid site delivery across regional industrial zones.'
    },
    {
        id: 6,
        title: 'Cured Stacked Precision Bricks',
        category: 'Brick Products',
        imageName: 'karur_district.png',
        description: 'Perfectly cured, sharp-edged fly ash bricks ready for dispatch, tested for compressive strength and durability.'
    },
    {
        id: 7,
        title: 'Green Infrastructure & Institutional Building',
        category: 'Construction Projects',
        imageName: 'dindigul_district.png',
        description: 'Modern institutional building project utilizing eco-friendly fly ash masonry to meet green building council standards.'
    },
    {
        id: 8,
        title: 'Interlocking Heavy-Duty Concrete Pavers',
        category: 'Pavers & Blocks',
        imageName: 'dharmapuri_district.png',
        description: 'Durable interlocking paver blocks designed for heavy industrial driveways, parking bays, and pedestrian walkways.'
    },
    {
        id: 9,
        title: 'Commercial Multi-Story Structural Masonry',
        category: 'Construction Projects',
        imageName: 'eco_building.png',
        description: 'Commercial complex framed with high-strength fly ash blocks, highlighting architectural elegance and reduced carbon footprint.'
    },
    {
        id: 10,
        title: 'Class 10 & 15 Certified Fly Ash Bricks',
        category: 'Brick Products',
        imageName: 'fly_ash_bricks_about.png',
        description: 'Certified premium grade fly ash bricks tested for ISI compliance, superior thermal resistance, and fire safety.'
    },
    {
        id: 11,
        title: 'Interlocking Paving Unit Blocks',
        category: 'Pavers & Blocks',
        imageName: 'paver_blocks.png',
        description: 'High-density paver blocks engineered for high traffic resistance and long-lasting aesthetic appeal.'
    },
    {
        id: 12,
        title: 'Architectural Residential Driveway Pavers',
        category: 'Pavers & Blocks',
        imageName: 'villa_driveway.png',
        description: 'Premium eco-paver installation in luxury residential villas, blending aesthetic design with high load resistance.'
    }
];

export const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        document.title = "Gallery | TamilNadu Flyash Product Manufacturer Association";
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explore our gallery of fly ash brick products, manufacturing plants, green construction projects, and paver blocks.");
        }
    }, []);

    // Close lightbox on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveItem(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const categories = ['All', 'Brick Products', 'Manufacturing Plants', 'Construction Projects', 'Pavers & Blocks'];

    const filteredItems = selectedCategory === 'All' 
        ? galleryData 
        : galleryData.filter(item => item.category === selectedCategory);

    return (
        <div className="gallery-page-wrapper">
            {/* Gallery Hero Header */}
            <div className="gallery-hero">
                <div className="gallery-hero-inner">
                    <span className="gallery-hero-badge">Visual Showcase</span>
                    <h1>Our Products & Facilities Showcase</h1>
                    <p className="gallery-hero-text">
                        Discover certified high-strength fly ash bricks, modern manufacturing plant infrastructure, completed eco-friendly building projects, and heavy-duty paver blocks across Tamil Nadu.
                    </p>
                </div>
            </div>

            <div className="gallery-content-container">
                {/* Category Filter Tabs */}
                <div className="gallery-filter-container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Cards Grid */}
                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="gallery-card"
                            onClick={() => setActiveItem(item)}
                        >
                            <div className="gallery-card-image-wrapper">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/${item.imageName}`} 
                                    alt={item.title} 
                                    className="gallery-card-img" 
                                />
                                <span className="gallery-card-category-badge">{item.category}</span>
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
                            <div className="gallery-card-info">
                                <h3 className="gallery-card-title">{item.title}</h3>
                                <p className="gallery-card-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activeItem && (
                <div className="lightbox-backdrop" onClick={() => setActiveItem(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="lightbox-close-btn" 
                            onClick={() => setActiveItem(null)}
                            aria-label="Close Preview"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="lightbox-image-wrapper">
                            <img 
                                src={`${process.env.PUBLIC_URL}/${activeItem.imageName}`} 
                                alt={activeItem.title} 
                                className="lightbox-img" 
                            />
                        </div>
                        <div className="lightbox-details">
                            <span className="lightbox-badge">{activeItem.category}</span>
                            <h2 className="lightbox-title">{activeItem.title}</h2>
                            <p className="lightbox-desc">{activeItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
