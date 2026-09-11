import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StyledBg from "./StyledBg";
import PageScrollBtn from "../components/common/PageScrollBtn";

export default function Layout() {
  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    const root = document.documentElement;
    let currentX = 68;
    let currentY = 42;
    let targetX = currentX;
    let targetY = currentY;
    let frameId;

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      root.style.setProperty("--glow-x", `${currentX}%`);
      root.style.setProperty("--glow-y", `${currentY}%`);

      const hasSettled =
        Math.abs(targetX - currentX) < 0.01 &&
        Math.abs(targetY - currentY) < 0.01;

      if (hasSettled) {
        root.style.setProperty("--glow-x", `${targetX}%`);
        root.style.setProperty("--glow-y", `${targetY}%`);
        frameId = undefined;
        return;
      }

      frameId = window.requestAnimationFrame(animateGlow);
    };

    const handlePointerMove = ({ clientX, clientY }) => {
      targetX = 58 + (clientX / window.innerWidth) * 20;
      targetY = 34 + (clientY / window.innerHeight) * 16;

      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(animateGlow);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }

      root.style.removeProperty("--glow-x");
      root.style.removeProperty("--glow-y");
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StyledBg />
      <PageScrollBtn />
    </>
  );
}
