import React from "react";
import Hyperspeed from "./Hyperspeed/Hyperspeed";
import TextType from "./TextType/TextType";

const Loading: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {

    const texts = [
        "Engines online…",
        "Accelerating through creativity…",
        "Welcome to Kavindu’s Portfolio !",
        "Loading...",
    ];

    const handleSentenceComplete = (_sentence: string, index: number) => {
        if (index === texts.length - 2) {   //use 2 because this not identifeid when last senetce not finshed
            setTimeout(() => {
                onFinish();
            }, 1800);
        }
    };

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Hyperspeed animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: "turbulentDistortion",
                        length: 400,
                        roadWidth: 5,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                            sticks: 0x03b3c3,
                        },
                    }}
                />
            </div>

            {/* Name on top */}
            <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold z-10 pointer-events-none">
                <TextType
                    text={texts}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-6xl max-[400px]:text-3xl text-center max-[400px]:p-2"
                    loop={false}
                    onSentenceComplete={handleSentenceComplete}
                />
            </h1>
        </div>
    );
};

export default Loading;