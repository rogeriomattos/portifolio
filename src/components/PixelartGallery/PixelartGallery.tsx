import { useState } from 'react';
import { pixelartList } from "@/data/pixelartList";
import './styles.css';

interface SelectedArt {
    image: string;
    name: string;
    description: string;
    pallette: string | undefined;
}

const PixelartGallery = () => {
    const [selectedImage, setSelectedImage] = useState<SelectedArt | null>(null);

    const openModal = (image: string, name: string, description: string, pallette: string | undefined) => {
        setSelectedImage({ image, name, description, pallette });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return(
        <div className="pixelart-gallery">
            <div className="pixelart-gallery-text">
                <h1>Pixel arts</h1>
            </div>
            <div className="pixel-art-carrousel">
                {pixelartList.map((art) => (
                    <div key={art.id} className="pixel-art-item" onClick={() => openModal(art.image, art.name, art.description, art.pallette)}>
                        <img src={art.image} alt={art.name} />
                        <p>{`${art.id} - ${art.name}`}</p> 
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.image} alt={selectedImage.name} />
                        <h3>{selectedImage.name}</h3>
                        <p>{selectedImage.description}</p>
                        {selectedImage.pallette && (
                        <div className="modal-palette">
                            <h4>Palette</h4>
                            <img src={selectedImage.pallette} alt={`${selectedImage.name} Palette`} />
                        </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PixelartGallery;