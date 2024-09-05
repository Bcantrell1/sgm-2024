"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { memo, useEffect, useRef, useState } from "react";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  const handleInteractionMove = (clientX: number) => {
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    setWidthPercentage(0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleInteractionMove(event.clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    const touch = event.touches[0];
    if (touch) {
      handleInteractionMove(touch.clientX);
    }
  };

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onMouseMove={handleMouseMove}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchMove={handleTouchMove}
      ref={cardRef}
      className={cn(
        "w-full rounded-lg h-full p-4 md:p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-full relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
            overflow: 'hidden'
          }}
          animate={
            isInteracting
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isInteracting ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-[#252525] z-20 overflow-hidden will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-center text-2xl md:text-[4rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isInteracting ? { duration: 0 } : { duration: 0.4 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-yellow-600 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-2xl text-center md:text-[4rem] py-10 font-bold bg-clip-text text-transparent bg-[#4caf50]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

interface Star {
  id: string;
  initialTop: number;
  initialLeft: number;
  duration: number;
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (): Star[] => {
      return [...Array(80)].map((_, i) => ({
        id: `star-${i}`,
        initialTop: Math.random() * 100,
        initialLeft: Math.random() * 100,
        duration: Math.random() * 20 + 10,
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          animate={{
            top: [
              `${star.initialTop}%`,
              `${(star.initialTop + 2) % 100}%`,
              `${(star.initialTop - 2 + 100) % 100}%`,
              `${star.initialTop}%`,
            ],
            left: [
              `${star.initialLeft}%`,
              `${(star.initialLeft + 2) % 100}%`,
              `${(star.initialLeft - 2 + 100) % 100}%`,
              `${star.initialLeft}%`,
            ],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
