

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: revogue.7@gmail.com</p>
                    <p>Phone:+91 807 3224 8551</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>&copy; {new Date().getFullYear} ReVogue</h4>
                    <p>Your ultimate wardrobe solution.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
