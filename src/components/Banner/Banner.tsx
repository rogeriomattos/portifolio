import { pixelartList } from "@/data/pixelartList";
import './styles.css';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-text">
                <h1>ROGERIO MATTOS</h1>
                <p>Frontend Developer | ReactJS | TypeScript | JavaScript | HTML | CSS</p>
            </div>
            <div className="pixel-art-carrousel">
                {pixelartList.map((art:any) => (
                    <img key={art.id} src={art.image} alt={art.name}  className="pixel-art-item"/>
                ))}
            </div>
        </div>
    )
}

export default Banner;