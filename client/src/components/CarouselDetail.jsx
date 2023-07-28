import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MyImageGallery = () => {
    const images = [
        {
            original: 'https://www.thedressoutlet.com/cdn/shop/products/cd0186w__1.jpg?v=1689798218&width=2500',
            thumbnail: 'https://www.thedressoutlet.com/cdn/shop/products/cd0186w__1.jpg?v=1689798218&width=2500',
        },
        {
            original: "https://www.thedressoutlet.com/cdn/shop/products/long-formal-strapless-wedding-dress-the-dress-outlet-1.jpg?v=1689779113&width=1646",
            thumbnail: "https://www.thedressoutlet.com/cdn/shop/products/long-formal-strapless-wedding-dress-the-dress-outlet-1.jpg?v=1689779113&width=1646",
        },
        // Add more images as needed
    ];

    const galleryStyles = {
        width: '100%', // Adjust the width to fit your layout
        maxHeight: '10%', // Set a fixed maximum height for all images
        objectFit: 'contain', // This will ensure the images cover the entire container
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    };

    return (
        <div>
            <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={5000}
                thumbnailPosition='left'
                renderItem={(item) => (
                    <div style={{ maxHeight: '10%' }}>
                        <img src={item.original} alt={item.description} style={galleryStyles} />
                    </div>
                )}
            />
        </div>
    );
};


export default MyImageGallery;
