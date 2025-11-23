import './styles.css';
import githubLogo from '@assets/logos/github.png';
import lospecLogo from '@assets/logos/lospec.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a 
                        href="https://github.com/rogeriomattos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <img src={githubLogo} alt="GitHub" className="footer-icon" />
                        GitHub
                    </a>
                    <a 
                        href="https://lospec.com/rogerio-mattos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <img src={lospecLogo} alt="Lospec" className="footer-icon" />
                        Lospec
                    </a>
                </div>
                <p className="footer-text">© 2025 Rogerio Mattos. Frontend Developer.</p>
            </div>
        </footer>
    );
};

export default Footer;