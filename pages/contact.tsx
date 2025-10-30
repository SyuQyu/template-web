import Head from 'next/head';
import styled from 'styled-components';
import Container from 'components/Container';
import GoogleMaps from 'components/GoogleMaps';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  const { t, language } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{language === 'id' ? 'Kontak Kami - Hubungi PT. Mitra Kawan Bersama untuk Sewa Heavy Equipment' : 'Contact Us - Reach PT. Mitra Kawan Bersama for Heavy Equipment Rental'}</title>
        <meta
          name="description"
          content={language === 'id' ? 'Hubungi PT. Mitra Kawan Bersama untuk kebutuhan sewa heavy equipment. Kantor Jakarta di The East Building, Mega Kuningan. Telp: +62-21-578-0505. Emergency support 24/7 tersedia untuk semua proyek.' : 'Contact PT. Mitra Kawan Bersama for heavy equipment rental needs. Jakarta office at The East Building, Mega Kuningan. Tel: +62-21-578-0505. 24/7 emergency support available for all projects.'}
        />
        <meta name="keywords" content={language === 'id' ? 'kontak mkb, hubungi mitra kawan bersama, sewa crane jakarta, kontak heavy equipment, alamat mkb jakarta, telpon mkb, emergency crane support' : 'contact mkb, reach mitra kawan bersama, crane rental jakarta, heavy equipment contact, mkb jakarta address, mkb phone, emergency crane support'} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={language === 'id' ? 'Kontak Kami - PT. Mitra Kawan Bersama | Heavy Equipment Rental' : 'Contact Us - PT. Mitra Kawan Bersama | Heavy Equipment Rental'} />
        <meta property="og:description" content={language === 'id' ? 'Hubungi PT. Mitra Kawan Bersama untuk kebutuhan sewa heavy equipment. Kantor Jakarta, support 24/7.' : 'Contact PT. Mitra Kawan Bersama for heavy equipment rental needs. Jakarta office, 24/7 support.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitrakawanbersama.co.id/contact" />
        <meta property="og:image" content="https://mitrakawanbersama.co.id/mkb_logo_png_new.png" />
        <meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'id' ? 'Kontak PT. Mitra Kawan Bersama | Heavy Equipment Rental' : 'Contact PT. Mitra Kawan Bersama | Heavy Equipment Rental'} />
        <meta name="twitter:description" content={language === 'id' ? 'Hubungi kami untuk kebutuhan sewa heavy equipment. Support 24/7.' : 'Contact us for heavy equipment rental needs. 24/7 support available.'} />
        <meta name="twitter:image" content="https://mitrakawanbersama.co.id/mkb_logo_png_new.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT. Mitra Kawan Bersama" />
        <link rel="canonical" href="https://mitrakawanbersama.co.id/contact" />
        
        {/* Structured Data - Organization Contact */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PT. Mitra Kawan Bersama",
              "url": "https://mitrakawanbersama.co.id",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "The East Building Lt.39 Unit 3912-3914, Jl. Dr. Ide Anak Agung Gde Agung Lot 8.6-8.7 Kawasan Mega Kuningan",
                "addressLocality": "Jakarta Selatan",
                "addressRegion": "DKI Jakarta",
                "postalCode": "28785",
                "addressCountry": "ID"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+62-21-578-0505",
                  "contactType": "customer service",
                  "areaServed": "ID"
                },
                {
                  "@type": "ContactPoint", 
                  "telephone": "+62-812-3456-7890",
                  "contactType": "emergency",
                  "areaServed": "ID"
                }
              ],
              "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
              "sameAs": [
                "https://www.linkedin.com/company/pt-mitra-kawan-bersama"
              ]
            })
          }}
        />
      </Head>
      
      <ContactWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('contact.page.title')}</OverTitle>
            <SectionTitle>{t('contact.get.touch')}</SectionTitle>
            <Description>
              {t('contact.page.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <Container>
          <ContactGrid>
            <InformationSection />
            <FormSection />
          </ContactGrid>
        </Container>

        <MapSection>
          <Container>
            <SectionTitle>{t('contact.location')}</SectionTitle>
            <MapWrapper>
              <GoogleMaps 
                width="100%"
                height="450px"
              />
            </MapWrapper>
          </Container>
        </MapSection>
      </ContactWrapper>
    </>
  );
}

const ContactWrapper = styled.div`
  padding: 5rem 0;
  
  & > *:not(:first-child) {
    margin-top: 6rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 80rem;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-top: 2rem;
  color: var(--text-secondary);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem 0;
  
  ${media('<=desktop')} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MapSection = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

const MapWrapper = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const MapPlaceholder = styled.div`
  height: 400px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MapText = styled.div`
  text-align: center;
  color: var(--text-secondary);
`;

const MapAddress = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const OfficesSection = styled.div`
  margin: 6rem 0;
  text-align: center;
`;

const OfficesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const OfficeCard = styled.div`
  background: var(--cardBackground);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
`;

const OfficeTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const OfficeAddress = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const OfficeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailItem = styled.div`
  font-size: 1.4rem;
  color: rgb(var(--text));
  
  strong {
    color: var(--primary);
  }
`;

const EmergencySection = styled.div`
  margin: 6rem 0;
`;

const EmergencyCard = styled.div`
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  border-radius: 1.5rem;
  padding: 4rem;
  text-align: center;
  
  ${media('<=tablet')} {
    padding: 3rem 2rem;
  }
`;

const EmergencyContent = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const EmergencyTitle = styled.h3`
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  
  ${media('<=tablet')} {
    font-size: 2.4rem;
  }
`;

const EmergencyText = styled.p`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const EmergencyContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const EmergencyPhone = styled.a`
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const EmergencyEmail = styled.a`
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
