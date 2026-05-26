"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Accurate lat/lng for each Edmonton-area service city
export const EDMONTON_MARKERS: NonNullable<COBEOptions["markers"]> = [
  { location: [53.5461, -113.4938], size: 0.1  }, // Edmonton           — hub
  { location: [53.5344, -113.3213], size: 0.06 }, // Sherwood Park
  { location: [53.6306, -113.6253], size: 0.06 }, // St. Albert
  { location: [53.5450, -113.9003], size: 0.06 }, // Spruce Grove
  { location: [53.2585, -113.5500], size: 0.06 }, // Leduc
  { location: [53.3556, -113.4150], size: 0.06 }, // Beaumont
  { location: [53.3636, -113.7378], size: 0.06 }, // Devon
  { location: [53.8006, -113.6450], size: 0.06 }, // Morinville
  { location: [53.7145, -113.2153], size: 0.06 }, // Fort Saskatchewan
  { location: [53.5261, -114.0008], size: 0.06 }, // Stony Plain
  { location: [53.3381, -113.5044], size: 0.06 }, // Nisku
  { location: [53.5583, -113.8722], size: 0.06 }, // Acheson
];

interface GlobeProps {
  className?: string;
  /** −1.98 rad ≈ 113.5°W — centers on Edmonton at startup */
  initialPhi?: number;
  /** 0.5 rad ≈ 53°N — tilts to show Edmonton latitude */
  initialTheta?: number;
  markers?: NonNullable<COBEOptions["markers"]>;
  speed?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

export function Globe({
  className,
  initialPhi = -1.98,
  initialTheta = 0.5,
  markers = EDMONTON_MARKERS,
  speed = 0.002,
  baseColor  = [0.88, 0.90, 0.95],
  markerColor = [0.91, 0.12, 0.14],
  glowColor  = [0.75, 0.78, 0.88],
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef    = useRef(initialPhi);
  const widthRef  = useRef(0);
  const dragging  = useRef(false);
  const lastX     = useRef(0);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) widthRef.current = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const w = widthRef.current || 400;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      phi: initialPhi,
      theta: initialTheta,
      dark: 0,
      diffuse: 2.2,
      mapSamples: 16000,
      mapBrightness: 1.8,
      baseColor,
      markerColor,
      glowColor,
      markers,
      width: w * 2,
      height: w * 2,
    });

    let rafId: number;
    const tick = () => {
      if (!dragging.current) phiRef.current += speed;
      globe.update({
        phi: phiRef.current,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          dragging.current = true;
          lastX.current    = e.clientX;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerOut={() => { dragging.current = false; }}
        onMouseMove={(e) => {
          if (!dragging.current) return;
          phiRef.current += (e.clientX - lastX.current) / 300;
          lastX.current = e.clientX;
        }}
        onTouchMove={(e) => {
          if (!dragging.current || !e.touches[0]) return;
          phiRef.current += (e.touches[0].clientX - lastX.current) / 300;
          lastX.current = e.touches[0].clientX;
        }}
      />
    </div>
  );
}
