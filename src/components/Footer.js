import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Test</h3>
        <p className="tagline">Lorem ipsum dolor sit amet</p>
        <div className="social-links">
          <a href="#"><FiTwitter size={24}/></a>
          <a href="#"><FiLinkedin size={24}/></a>
          <a href="#"><FiGithub size={24}/></a>
        </div>
        <div className="copyright">
          <p>© 2025 Test. Lorem ipsum.</p>
        </div>
      </div>
    </footer>
  );
}