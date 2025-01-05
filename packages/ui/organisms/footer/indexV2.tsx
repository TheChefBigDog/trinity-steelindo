// src/components/organisms/FooterContent.tsx
import {ContactInfo} from '../molecules/ContactInfo';
import React from 'react';

export const FooterContent = () => (
  <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-16">
    <div className="w-full md:w-1/2">
      <MapLocation />
    </div>
    <div className="w-full md:w-1/2">
      <ContactInfo />
    </div>
  </div>
);
