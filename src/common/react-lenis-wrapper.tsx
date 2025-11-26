"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

function ReactLenisWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  );
}

export default ReactLenisWrapper;
