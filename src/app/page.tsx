"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import FlashCreator from "./components/FlashCreator";
import RenderFlash, { type FlashData } from "./components/RenderFlash";

const Home = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  const [inf, setInf] = useState<FlashData[]>([]);

  return (
    <div className="flex flex-col items-center h-full w-full bg-white">
      <Header />

      <FlashCreator setInf={setInf} />

      {inf.map((item, index) => (
        <RenderFlash
          key={index}
          data={item}
          onDelete={() => {
            setInf((prev) => prev.filter((_, i) => i !== index));
          }}
        />
      ))}
    </div>
  );
};

export default Home;
