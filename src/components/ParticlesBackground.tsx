import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticlesBackground() {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    const particlesLoaded = async (): Promise<void> => {
        return Promise.resolve();
    };

    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-0"
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            push: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#22c55e" // folhas verdes
                        },
                        links: {
                            enable: false,
                            // color: "#8B4513", // marrom tipo tronco
                            // distance: 130,
                            // opacity: 0.4,
                            // width: 1.2
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "top",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: true,
                            speed: 0.6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000
                            },
                            value: 90
                        },
                        opacity: {
                            value: 0.8
                        },
                        shape: {
                            type: "image",
                            image: {
                                src: "https://img.icons8.com/ios/50/22c55e/leaf.png",
                                width: 30,
                                height: 30
                            }
                        },
                        size: {
                            value: { min: 6, max: 15 }
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
}