import { pixelartList } from "@/data/pixelartList";
import './styles.css';

const PixelartGallery = () => {
    return(
        <div className="pixelart-gallery">
            <div className="pixelart-gallery-text">
                <h1>Pixel arts</h1>
            </div>
            <div className="pixel-art-carrousel">
                {pixelartList.map((art) => (
                    <div key={art.id} className="pixel-art-item">
                        <img src={art.image} alt={art.name}  />
                        <p>{art.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PixelartGallery;