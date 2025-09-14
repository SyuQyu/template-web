import React from 'react';

interface GoogleMapsProps {
  width?: string;
  height?: string;
  zoom?: number;
  location?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({
  width = '100%',
  height = '450px',
  zoom = 17,
  location = 'The East, Jl. Dr. Ide Anak Agung Gde Agung, Kuningan Barat Raya No.1, Jakarta Selatan'
}) => {
  // Use Google Maps embed URL with search query to show pin for The East building
  const embedUrl = "https://www.google.com/maps/embed/v1/place?key=&q=The+East+Kuningan+Jakarta&center=-6.209465,106.830833&zoom=17";
  
  // Alternative URL without API key that shows The East with pin
  const directEmbedUrl = "https://maps.google.com/maps?q=The+East,+Jl.+Dr.+Ide+Anak+Agung+Gde+Agung,+Kuningan+Barat+Raya+No.1,+Jakarta+Selatan&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <div style={{ width, height, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
      <iframe
        src={directEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PT. Mitra Kawan Bersama Office Location - The East Building"
      />
    </div>
  );
};

export default GoogleMaps;