import React from "react";
import MobileTemplate from "./MobileTemplate";
import DesktopTemplate from "./DesktopTemplate";
import { useIsMobile } from "./../../hooks/useIsMobile.jsx";

export default function BaseTemplate({ children }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileTemplate>{children}</MobileTemplate>
  ) : (
    <DesktopTemplate>{children}</DesktopTemplate>
  );
}
