import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { LuX, LuChevronLeft, LuChevronRight, LuLoader } from "react-icons/lu";

interface LightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  setSelectedIndex: (index: number) => void;
}

const LightboxImage = ({ src, alt, onLoad }: { src: string; alt: string, onLoad?: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LuLoader className="h-10 w-10 animate-spin text-white/50" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="90vw"
        className={cn(
          "object-contain transition-all duration-300",
          isLoading ? "blur-md scale-95 opacity-50" : "blur-0 scale-100 opacity-100"
        )}
        priority
        quality={100}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
      />
    </>
  );
};

const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  setSelectedIndex,
}: LightboxProps) => {
  // Swipe handling state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const showNext = useCallback(() => {
    setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

  const showPrev = useCallback(() => {
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

  // Handle Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      showNext();
    }
    if (isRightSwipe) {
      showPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          showNext();
          break;
        case "ArrowLeft":
          showPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNext, showPrev, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black p-0 md:p-4 animate-in fade-in duration-300 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full cursor-pointer bg-black/50 md:bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
      >
        <LuX className="h-6 w-6" />
      </button>

      {/* Desktop Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
        className="absolute left-4 z-50 rounded-full cursor-pointer bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors disabled:opacity-50 hidden md:block"
      >
        <LuChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
        className="absolute right-4 z-50 rounded-full cursor-pointer bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors disabled:opacity-50 hidden md:block"
      >
        <LuChevronRight className="h-8 w-8" />
      </button>

      <div
        className="relative h-full w-full max-h-[100dvh] md:max-h-[90vh] max-w-7xl animate-in zoom-in-95 duration-300 select-none flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <LightboxImage
          key={selectedIndex}
          src={images[selectedIndex]}
          alt={`Project screenshot ${selectedIndex + 1}`}
        />

        {/* Mobile Bottom Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 z-50 md:hidden pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="rounded-full bg-zinc-800/80 p-3 text-white border border-zinc-700 pointer-events-auto active:scale-95 transition-transform"
          >
            <LuChevronLeft className="h-6 w-6" />
          </button>

          <div className="rounded-full bg-zinc-800/80 px-4 py-2 text-sm text-white border border-zinc-700 font-medium">
            {selectedIndex + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="rounded-full bg-zinc-800/80 p-3 text-white border border-zinc-700 pointer-events-auto active:scale-95 transition-transform"
          >
            <LuChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm z-50 hidden md:block">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
