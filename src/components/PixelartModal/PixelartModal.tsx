import './styles.css';

interface PixelartModalProps {
    image: string;
    name: string;
    description: string;
    pallette?: string;
    onClose: () => void;
}

const PixelartModal = ({ image, name, description, pallette, onClose }: PixelartModalProps) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div className="modal-image-container">
                    <img src={image} alt={name} />
                </div>
                
                <div className="modal-info">
                    <h2 className="modal-title">{name}</h2>
                    <p className="modal-description">{description}</p>
                    
                    {pallette && (
                        <div className="modal-palette">
                            <h3 className="palette-title">Color Palette</h3>
                            <img src={pallette} alt={`${name} Palette`} className="palette-image" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PixelartModal;
