//import React from "react";

import './HomePage.css'
import CarouselComponent from "../Carousel/CarouselComponent";


function HomePage() {
    return (
        <div className="root">
            <div className="carousel">
                <CarouselComponent />
            </div>
            <div className="column-container">
                {/* Left: 2/3 width */}
                <div className="left-column">
                    <h2 style={{ color: "#333" }}>Big Rounded Container</h2>
                </div>
                {/* Right: 1/3 width, 3 stacked containers */}
                <div className="right-column">
                    {[1,2,3].map((i) => (
                        <div className="right-container" key={i}>
                            <span style={{ color: "#555" }}>Rounded Container {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;