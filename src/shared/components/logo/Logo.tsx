import React from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const Logo: React.FC = () => {
  return <span className={`${audiowide.className}`}>R2N</span>;
};

export { Logo };
