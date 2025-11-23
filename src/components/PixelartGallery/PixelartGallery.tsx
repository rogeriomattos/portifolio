import { useState } from 'react';
import { pixelartList } from "@/data/pixelartList";
import PixelartModal from '@/components/PixelartModal/PixelartModal';
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
                <PixelartModal
                    image={selectedImage.image}
                    name={selectedImage.name}
                    description={selectedImage.description}
                    pallette={selectedImage.pallette}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default PixelartGallery;