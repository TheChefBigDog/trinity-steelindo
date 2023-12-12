import React from 'react';
import './index.css';
import {Body, Header} from '@trinity-steelindo/ui/organisms';
import {
  IconLogoTrinityBlack,
  IconLogoTrinityTrans,
  IconLogoTrinityWhite,
  IconLogoTrinityWhiteTrans,
  TruckTrinityPng,
} from './assets';

export default function App() {
  return (
    // Cover Background with color image and max width screen
    <div className="max-w-screen relative flex h-screen flex-col bg-colorBackground">
      <div className="relative">
        {/* ImageShadows */}
        <img
          src={TruckTrinityPng}
          className="h-full w-full bg-fixed object-cover"
        />
        {/* Gradient Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-colorPrimary" />
        {/* Curtain Shadows */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <Header
        logoBlack={IconLogoTrinityTrans}
        logoWhite={IconLogoTrinityWhiteTrans}
      />
      <Body>
        <div className="rounded-md bg-gray-200 p-6 px-10 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Hello, React with Tailwind CSS!
          </h1>
          <p className="text-gray-700">
            This is a basic React component styled with Tailwind CSS.
          </p>
        </div>
        <div className="rounded-md bg-gray-200 p-6 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Hello, React with Tailwind CSS!
          </h1>
          <p className="text-gray-700">
            This is a basic React component styled with Tailwind CSS.
          </p>
        </div>
      </Body>
    </div>
  );
}
