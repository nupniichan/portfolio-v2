"use client";

import { useThemeLanguage } from "./ThemeLanguageProvider";
import ParticlesBackground from "./ParticlesBackground";
import Header from "./Header";
import ClientAudioPlayer from "./ClientAudioPlayer";
import LoadingOverlay from "./LoadingOverlay";
import AOSInit from "./AOSInit";
import ScrollToTop from "./ScrollToTop";
import { withBasePath } from "../utils/paths";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const { theme, mounted, isLoading } = useThemeLanguage();

  return (
    <div className="relative flex-1 overflow-hidden">
      <AOSInit />
      <LoadingOverlay isVisible={isLoading} />
      
      {mounted && theme === "light" && (
        <video
          className="background-video absolute inset-0 h-full w-full object-cover z-0"
          src={withBasePath("/Images/Background/background.webm")}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {mounted && theme === "dark" && (
        <ParticlesBackground theme={theme} />
      )}

      <Header />

      <main className="relative z-10 flex-1 flex flex-col justify-center">
        {children}
      </main>

      <ScrollToTop />
      <ClientAudioPlayer />
    </div>
  );
}