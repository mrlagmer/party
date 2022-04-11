import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Thanks() {
  useEffect(() => {
    confetti.create(document.getElementById("canvas"), {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 200 });
  });

  return (
    <div className="h-screen flex items-center mx-9">
      <h1 className="text-4xl tracking-tight font-extrabold text-red-500 sm:text-5xl md:text-9xl lg:text-9xl xl:text-9xl">
        Thanks see you at the Party!
      </h1>
    </div>
  );
}
