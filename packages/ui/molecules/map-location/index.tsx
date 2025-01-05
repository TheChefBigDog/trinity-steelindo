import React from 'react';
import {Heading} from '@trinity-steelindo/ui/atoms/heading';

export const MapLocation: React.FC = () => (
  <div>
    <Heading level={3} className="mb-4 text-xl font-semibold">
      You can locate us at:
    </Heading>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.877248712583!2d107.0077522!3d-6.409809500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6997d7bd2a93c7%3A0xb4fdd8ba31c72c99!2sTrinity%20Steelindo!5e0!3m2!1sen!2sid!4v1734946060631!5m2!1sen!2sid"
        className="h-64 w-full border-0"
        allowFullScreen
        loading="lazy"></iframe>
    </div>
  </div>
);
