import React from "react";

const BMWFooter = () => {
  return (
    <footer className="bmw-footer">
      {/* Anniversary Section */}
      <div className="anniversary-section">
        <p>25-year anniversary</p>
        <h3>The BMW X5 through the ages</h3>
      </div>

      {/* Podcast Section */}
      <div className="podcast-section">
        <p>GAME CHANGER</p>
        <p>An audio series about those who change the world around them</p>
      </div>

      {/* Article Section */}
      <div className="article-section">
        <p>Enigma – German prototype cars</p>
        <p>The art of deception</p>
      </div>

      <div className="divider"></div>

      {/* Language Selector */}

      <div className="language-selector">
        <span>English</span> | <span>Deutsch</span> | <span>Persian</span>
      </div>

      <div className="divider"></div>

      {/* Quick Links */}
      <div className="links-section">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>BMW in your country</li>
            <li>BMW Group Careers</li>
            <li>EU Disclosure Regulation</li>
            <li>REACH Regulation</li>
            <li>Compatibility Check</li>
            <li>Accessories Update</li>
            <li>Connected Test Vehicle</li>
            <li>Service Page Charging Products</li>
            <li>Cooperation Test Car</li>
            <li>EU Battery Regulation</li>
          </ul>
        </div>

        {/* More BMW Websites */}
        <div className="more-websites">
          <h4>More BMW Websites</h4>
          <ul>
            <li>BMW M</li>
            <li>BMW M Motorsport</li>
            <li>BMW Motorsport</li>
            <li>BMW Driving Experience</li>
            <li>BMW Welt</li>
            <li>BMW Group Classic</li>
            <li>BMW Corporate/Direct Sales</li>
            <li>BMW Group</li>
            <li>BMW Group Cultural Engagement</li>
            <li>BMW ConnectedDrive Upgrades</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="legal-links">
          <h4>BMW.com</h4>
          <ul>
            <li>About BMW.com</li>
            <li>Contact</li>
            <li>Cookies</li>
            <li>Imprint</li>
            <li>Legal Notice / Data protection</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <h4>Visit us on</h4>
          <div className="social-icons">
            <span>Facebook</span>
            <span>X</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">© BMW & Shayan Taghipour AG 2025</div>
    </footer>
  );
};

export default BMWFooter;
