import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-gray-900 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">PT. Trinity SteelIndo</h2>
          <p className="mb-8 text-sm">
            We are ready to meet your construction needs!
          </p>
        </div>

        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-16">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold">
              You can locate us at:
            </h3>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.877248712583!2d107.0077522!3d-6.409809500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6997d7bd2a93c7%3A0xb4fdd8ba31c72c99!2sTrinity%20Steelindo!5e0!3m2!1sen!2sid!4v1734946060631!5m2!1sen!2sid"
                className="h-64 w-full border-0"
                allowFullScreen
                loading="lazy"></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>
                <strong>Address:</strong> Jl. Raya Cileungsi, Jonggol -
                Gandoang, RW: 01, 16820 ID, Kec:, Cileungsi, Kab:, Kabupaten
                Bogor, Jawa Barat RT:01
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a
                  href="https://api.whatsapp.com/send/?phone=6281318000824&text&type=phone_number&app_absent=0"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  +62 813-1800-0824
                </a>
              </li>
              <li>
                <strong>Service options:</strong>{' '}
                <p>Offers same-day delivery</p>
              </li>
              <li>
                <strong>Working Hours:</strong> Mon - Fri: 7:00 AM - 17:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-sm">
          © Trinity SteelIndo All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
