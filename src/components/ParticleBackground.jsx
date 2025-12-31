import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab", // Connect particles to mouse
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                }
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00f3ff", "#b026ff", "#ff006e"],
            },
            links: {
              color: "#00f3ff", // Neon Cyan links
              distance: 150,
              enable: true,
              opacity: 0.2, // Subtle links
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce", // Bounce off edges
              },
              random: false,
              speed: 1.5, // Slightly faster
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // More particles
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
