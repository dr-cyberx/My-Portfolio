import React from "react";

const DropletBackground = () => {
    // Array of neon colors to randomly pick from
    const neonColors = ["#ff00ff", "#00ffff", "#ff4500", "#00ff00", "#ff6347", "#9400d3", "#1e90ff", "#ff1493"];

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none blur-md">
            {/* Generate multiple glowing droplets */}
            {Array.from({ length: 30 }).map((_, index) => {
                const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
                return (
                    <div
                        key={index}
                        className={`absolute rounded-full  opacity-50 animate-fall`}
                        style={{
                            backgroundColor: randomColor, // Random neon color
                            width: `${Math.random() * 10 + 30}px`, // Random droplet size (10px to 20px)
                            height: `${Math.random() * 10 + 20}px`,
                            left: `${Math.random() * 100}vw`, // Random horizontal position
                            animationDelay: `${Math.random() * 5}s`, // Random animation delay
                            animationDuration: `${Math.random() * 5 + 5}s`, // Random animation duration (5s-10s)
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default DropletBackground;
