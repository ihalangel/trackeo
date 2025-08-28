// src/components/BackgroundImage.jsx

import React from 'react';
import puertoImg from './../assets/images/backgroundLogin.png';

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0">
      <img
        src={puertoImg}
        alt="Container yard background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/80" />
    </div>
  );
}