/**
 * Utility functions for handling images and Google Drive links across the application
 */

/**
 * Extracts Google Drive file ID from various Drive sharing and file URL formats:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/file/d/FILE_ID/view
 * - https://drive.google.com/file/d/FILE_ID
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?id=FILE_ID
 * - https://drive.google.com/uc?export=view&id=FILE_ID
 * - https://lh3.googleusercontent.com/d/FILE_ID
 */
export const extractGoogleDriveFileId = (url: string): string | null => {
    if (!url || typeof url !== 'string') return null;

    // Pattern 1: /file/d/{fileId}
    const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch && fileMatch[1]) return fileMatch[1];

    // Pattern 2: id={fileId} parameter (open?id=..., uc?id=..., etc.)
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) return idMatch[1];

    // Pattern 3: lh3 /d/{fileId}
    const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) return dMatch[1];

    return null;
};

/**
 * Converts a Google Drive link, web URL, or local asset into a high-performance direct displayable image URL
 */
export const getDirectImageUrl = (
    urlOrItem: string | { url?: string; driveUrl?: string; imageUrl?: string; imageName?: string; image?: string; drive_link?: string; photo?: string } | undefined | null
): string => {
    if (!urlOrItem) return '';

    let raw = '';
    if (typeof urlOrItem === 'string') {
        raw = urlOrItem.trim();
    } else if (typeof urlOrItem === 'object') {
        raw = (
            urlOrItem.imageUrl ||
            urlOrItem.image ||
            urlOrItem.driveUrl ||
            urlOrItem.drive_link ||
            urlOrItem.photo ||
            urlOrItem.url ||
            urlOrItem.imageName ||
            ''
        ).trim();
    }

    if (!raw) return '';

    // Check if it's a Google Drive link
    if (raw.includes('drive.google.com') || raw.includes('googleusercontent.com')) {
        const fileId = extractGoogleDriveFileId(raw);
        if (fileId) {
            return `https://lh3.googleusercontent.com/d/${fileId}`;
        }
    }

    // Check if it's a standard web URL
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
        return raw;
    }

    // Fallback to local asset in public directory
    const publicUrl = process.env.PUBLIC_URL || '';
    const cleanPath = raw.startsWith('/') ? raw : `/${raw}`;
    return `${publicUrl}${cleanPath}`;
};
