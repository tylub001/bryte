import "./App.css";
import logo from "./images/rr.png";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const video = document.getElementById("bgVideo");
    if (video) {
      video.playbackRate = 0.8; // Slows down to half speed
    }
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="App">
      <div className="video-background">
        <video id="bgVideo" autoPlay loop muted playsInline>
          <source src="/background/comp3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <div className="nav">
            <img className="logo" src={logo} />
            <div className="nav__header">
              <p className="nav__name">Bryte IDeas Workspace</p>
              <p className="nav__description">Streamline. Create. Simplify.</p>
            </div>
            <div
              className="nav-wrapper"
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="navbar">
                <div
                  className="nav__item"
                  onMouseEnter={() => setActiveMenu("home")}
                >
                  Home
                </div>
                <div
                  className="nav__item"
                  onMouseEnter={() => setActiveMenu("features")}
                >
                  Key Features
                </div>
                <div
                  className="nav__item"
                  onMouseEnter={() => setActiveMenu("downloads")}
                >
                  Downloads
                </div>
                <div
                  className="nav__item"
                  onMouseEnter={() => setActiveMenu("more")}
                >
                  More
                </div>
              </div>

              <div
                className={`dropdown ${activeMenu ? "dropdown--visible" : ""}`}
              >
                {activeMenu === "home" && (
                  <div className="dropdown__content">
                    <p>Overview</p>
                    <p>Getting Started</p>
                    <p>Updates</p>
                  </div>
                )}
                {activeMenu === "features" && (
                  <div className="dropdown__content">
                    <p>Collaboration</p>
                    <p>Security</p>
                    <p>Customization</p>
                  </div>
                )}
                {activeMenu === "downloads" && (
                  <div className="dropdown__content">
                    <p>Mac</p>
                    <p>Windows</p>
                    <p>Linux</p>
                  </div>
                )}
                {activeMenu === "more" && (
                  <div className="dropdown__content">
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Contact</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="welcome">
        <div className="omnia-container">
          <div className="omnia-column">
            <div className="letter-pair">
              <span className="letter">B</span>
              <span className="word">Build</span>
            </div>
            <div className="letter-pair">
              <span className="letter">R</span>
              <span className="word">Render</span>
            </div>
            <div className="letter-pair">
              <span className="letter">Y</span>
              <span className="word">Yield</span>
            </div>
            <div className="letter-pair">
              <span className="letter">T</span>
              <span className="word">Transform</span>
            </div>
            <div className="letter-pair">
              <span className="letter">E</span>
              <span className="word">Elevate</span>
            </div>
          </div>

          <div className="workspace">
            <p className="title">Welcome to BRYTE IDeas WorkSpace</p>
            <p>
              Streamline Your Workflow. Maximize Your Productivity. Meet
              Omnia—the ultimate all-in-one application dashboard. Run your
              favorite apps, browsers, and tools side-by-side, all within a
              single workspace.
            </p>
            <button className="join">Join the waitlist</button>
            <div className="extra">
              <p>Streamlined Efficiency & Security</p>
              <p>Flexibility & Scalability at Its Core</p>
              <p>Empower Your Team with Better Collaboration</p>
            </div>
          </div>
        </div>
      </section>
      <section className="early-access">
        <p className="text">Be Among The First to Get Access!</p>
        <p>
          Join our waitlist to get exclusive access to our product, and lock in
          an earlybird special!
        </p>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter your name"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
