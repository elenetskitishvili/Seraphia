"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonWrapperProps {
  children: ReactNode;
}

const SkeletonWrapper: FC<SkeletonWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const baseColor = isDarkMode ? "#2b2b2b" : "#e2e8f0";
  const highlightColor = isDarkMode ? "#3c3c3c" : "#f1f5f9";

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonWrapper;
