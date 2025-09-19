import React, { ReactNode } from "react";
import { Darkmode } from "./Darkmode";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <Darkmode>{children}</Darkmode>;
};

export default AppProviders;
