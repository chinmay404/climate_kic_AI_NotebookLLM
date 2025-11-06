"use client";

import { useContext } from "react";
import { SettingsContext } from "../settings/SettingsProvider";
import { OnyxIcon } from "../icons/icons";

export function Logo({
  height,
  width,
  className,
  size = "default",
}: {
  height?: number;
  width?: number;
  className?: string;
  size?: "small" | "default" | "large";
}) {
  const settings = useContext(SettingsContext);

  const sizeMap = {
    small: { height: 24, width: 22 },
    default: { height: 32, width: 30 },
    large: { height: 48, width: 45 },
  };

  const { height: defaultHeight, width: defaultWidth } = sizeMap[size];
  height = height || defaultHeight;
  width = width || defaultWidth;

  // Always use custom logo if configured
  const logoSrc = (settings?.enterpriseSettings?.use_custom_logo) 
    ? "/api/enterprise-settings/logo"
    : "/climate-kic-logo.png";

  return (
    <div
      style={{ height, width }}
      className={`flex-none relative ${className}`}
    >
      <img
        src={logoSrc}
        alt="Climate KIC Logo"
        style={{ objectFit: "contain", height, width }}
      />
    </div>
  );
}
