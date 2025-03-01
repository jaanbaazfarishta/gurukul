"use client";

import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";

export default function Plustox() {
    const [rotated, setRotated] = useState(false);

    return (
        <div
            className={`transition-transform duration-300 ${rotated ? "rotate-0" : "rotate-45"}`}
            onClick={() => setRotated(!rotated)}
        >
            <RxCross1 />
        </div>
    );
}
