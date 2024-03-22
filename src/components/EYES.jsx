import React, { useEffect, useState } from "react";

function EYES() {
  useEffect(() => {
    const eyeball = document.querySelectorAll(".eyeball");

    window.addEventListener("mousemove", (e) => {
      eyeball.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - x;
        let delteY = mouseY - y;

        var angle = Math.atan2(delteY, deltaX) * (180 / Math.PI);

        eye.style.transform = `translate(-50%, -50%)rotate(${angle - 180}deg)`;
      });
    });
  });
  return (
    <div className="flex">
      <div className="relative w-[15vw] h-[15vw] block bg-white mx-[20px] rounded-full">
        <div className="eyeball w-1/2 h-1/2 bg-black absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-full">
          <div className="absolute left-0 top-[50%] -translate-y-[50%] w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
        </div>
      </div>
      <div className="relative w-[15vw] h-[15vw] block bg-white mx-[20px] rounded-full">
        <div className="eyeball w-1/2 h-1/2 bg-black absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-full">
          <div className="absolute left-0 top-[50%] -translate-y-[50%] w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
export default EYES;
