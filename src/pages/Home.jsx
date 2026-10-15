
import { Link } from "react-router-dom";
import homeBanner from "../../images/iteration-1-images/home-banner.png";
import logo from "../../images/iteration-1-images/logo.svg";
import "./Home.css";

import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <img
                    src={homeBanner}
                    alt="Home Banner"
                    className="hero-banner"
                />

                <div className="hero-content">
                    <img
                        src={logo}
                        alt="Teknoloji Yemekleri"
                        className="hero-title"
                    />

                    <div>
                        <Link to="/order">
                            <button className="hero-button">
                                Acıktım
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="icon-section">
                <div className="image-container">
                    <div className="icon-item">
                        <img src={icon1} alt="Yeni" />
                        <span>YENİ! Kore</span>
                    </div>

                    <div className="icon-item">
                        <img src={icon2} alt="Pizza" />
                        <span>Pizza</span>
                    </div>

                    <div className="icon-item">
                        <img src={icon3} alt="Burger" />
                        <span>Burger</span>
                    </div>

                    <div className="icon-item">
                        <img src={icon4} alt="Patates" />
                        <span>Kızartmalar</span>
                    </div>

                    <div className="icon-item">
                        <img src={icon5} alt="Fast Food" />
                        <span>Fast Food</span>
                    </div>

                    <div className="icon-item">
                        <img src={icon6} alt="İçecek" />
                        <span>Gazlı İçecek</span>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>En Çok Paketlenen Menüler</h2>
            </div>

            <div className="section">
                <h2>Footer</h2>
            </div>
        </div>
    );
}

export default Home;

