import React, { useEffect, useRef } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface OpenStreetMapProps {
  coordinates?: Coordinates;
  zoom?: number;
  height?: string;
  showMarker?: boolean;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({
  coordinates = { lat: -6.209465, lng: 106.830833 }, // The East building coordinates
  zoom = 18,
  height = '400px',
  showMarker = true,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !mapRef.current) return;

    // Import Leaflet dynamically
    import('leaflet').then((L) => {
      // Fix default icon issue
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Create map
      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView([coordinates.lat, coordinates.lng], zoom);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);

        // Add marker if enabled
        if (showMarker) {
          const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(mapInstanceRef.current);
          
          // Add popup with address details
          marker.bindPopup(`
            <div style="min-width: 250px;">
              <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px; font-weight: bold;">PT. Mitra Kawan Bersama</h3>
              <div style="margin-bottom: 8px;">
                <strong>Address:</strong><br>
                The East Building, 18th Floor<br>
                Jl. Dr. Ide Anak Agung Gde Agung<br>
                Kuningan Barat Raya No.1<br>
                Jakarta Selatan 12950
              </div>
              <div style="margin-bottom: 8px;">
                <strong>Phone:</strong> +62 21 5799 0701
              </div>
              <div style="margin-bottom: 8px;">
                <strong>Email:</strong> info@mkb.co.id
              </div>
              <div style="margin-top: 10px;">
                <a href="https://maps.app.goo.gl/shbUsqXvsW7ZXCbh7" target="_blank" 
                   style="color: #1666F7; text-decoration: none; font-size: 14px;">
                  📍 View on Google Maps
                </a>
              </div>
            </div>
          `);
        }
      }
    }).catch((error) => {
      console.error('Error loading Leaflet:', error);
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates.lat, coordinates.lng, zoom, showMarker]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height, 
        width: '100%', 
        borderRadius: '8px',
        backgroundColor: '#f3f4f6'
      }} 
    />
  );
};

export default OpenStreetMap;
