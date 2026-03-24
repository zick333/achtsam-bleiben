'use client';

import { useState } from 'react';

const MAP_SRC = 'https://maps.google.com/maps?q=Bornheim,+60385+Frankfurt+am+Main&output=embed&z=14';

// Static preview tile from OpenStreetMap — no API key required
const PREVIEW_URL =
  'https://staticmap.openstreetmap.de/staticmap.php?center=50.1235,8.7068&zoom=14&size=800x600&maptype=mapnik';

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600, boxShadow: '0 8px 32px rgba(28,20,16,0.10)' }}
    >
      {!loaded ? (
        /* Facade: static preview + click-to-load */
        <button
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Karte laden"
        >
          {/* Static map image */}
          <img
            src={PREVIEW_URL}
            alt="Kartenvorschau Frankfurt-Bornheim"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-105">
                <svg className="w-6 h-6 text-[#1C1410] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium tracking-wide drop-shadow">
                Karte laden
              </span>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={MAP_SRC}
          width="100%"
          height="600"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Frankfurt-Bornheim auf Google Maps"
        />
      )}
    </div>
  );
}
