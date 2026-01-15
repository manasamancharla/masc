import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import React, { PropsWithChildren, useRef, useState } from "react";
import type { Ref } from "react";
import { useIsDarkTheme } from "@/hooks/useTheme";

import { cn } from "../../lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  children: React.ReactNode;
  isDarkMode?: boolean;
  ref?: Ref<HTMLInputElement>;
}

const DEFAULT_SIZE = 35;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-lg",
);

const Dock = ({
  className,
  children,
  iconSize = DEFAULT_SIZE,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  isDarkMode,
  ref,
  ...props
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (
        React.isValidElement<DockIconProps>(child) &&
        child.type === DockIcon
      ) {
        return React.cloneElement(child as React.ReactElement<DockIconProps>, {
          ...child.props,
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(
        dockVariants(),
        isDarkMode
          ? "supports-backdrop-blur:bg-black/10 bg-black/75 border-[#232B34]"
          : "supports-backdrop-blur:bg-background/10 bg-background/75 border-[#93a1a1]",
        className,
      )}
    >
      {renderChildren()}
    </motion.div>
  );
};

Dock.displayName = "Dock";

export interface DockIconProps extends Omit<
  MotionProps & React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  label?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  label,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);
  const [hovered, setHovered] = useState(false);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const heightTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, 40, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightSize = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const getWidth = () => {
    return {
      width: isMobile ? size : scaleSize,
      height: isMobile ? size : heightSize,
      padding,
    };
  };

  const isDarkMode = useIsDarkTheme();

  return (
    <motion.div
      ref={ref}
      style={getWidth()}
      className={cn("aspect-square", className)}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      {...props}
    >
      {children}

      {label && !isMobile && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 2,
              }}
              transition={{
                duration: 0.2,
              }}
              className={cn(
                (className =
                  "absolute text-xs left-1/2 -translate-x-1/2 -top-9 px-2 py-0.5 whitespace-pre w-fit border-1 rounded-md"),
                isDarkMode
                  ? "supports-backdrop-blur:bg-black/10 bg-black/75 border-[#232B34]"
                  : "supports-backdrop-blur:bg-background/10 bg-background/75 border-[#93a1a1]",
              )}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
