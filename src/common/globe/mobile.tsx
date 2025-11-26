"use client";
import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

const MobileGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 300 * 2,
      height: 300 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      scale: 1.1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [0.4196, 0.6509, 1],
      markerColor: [1, 0, 0],
      glowColor: [0.2745, 0.5765, 0.898],
      opacity: 1,
      offset: [0, 0],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: Record<string, any>) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.\
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center z-10">
      <canvas
        ref={canvasRef}
        style={{
          width: 300,
          height: 300,
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
};

export default MobileGlobe;
