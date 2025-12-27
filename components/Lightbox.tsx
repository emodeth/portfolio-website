"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface LightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  setSelectedIndex: (index: number) => void;
}

const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  setSelectedIndex,
}: LightboxProps) => {
  const showNext = useCallback(() => {
    setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

  const showPrev = useCallback(() => {
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length, setSelectedIndex]);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full cursor-pointer bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
      >
        <LuX className="h-6 w-6" />
      </button>

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
        className="relative h-full w-full max-h-[90vh] max-w-7xl animate-in zoom-in-95 duration-300 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[selectedIndex]}
          alt={`Project screenshot ${selectedIndex + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
          priority
          quality={100}
        />
        <div
          className="absolute inset-y-0 left-0 w-1/4 md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            showPrev();
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1/4 md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            showNext();
          }}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
