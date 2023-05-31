import React from "react";
import "./logo.scss";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: "400"
});

const Logo: React.FC = () => {

    const BASE_CLASS = "logo";

    return (
        <span className={BASE_CLASS} style={{
            ...audiowide.style
        }}>
            R2N
        </span>
    );
};

export { Logo }