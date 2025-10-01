import Head from 'next/head';
import styled from 'styled-components';
import BasicSection2 from 'components/BasicSection2';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Head>
        <title>{language === 'id' ? 'Tentang PT. Mitra Kawan Bersama | Perusahaan Sewa Heavy Equipment Indonesia | Pengalaman 15+ Tahun' : 'About PT. Mitra Kawan Bersama | Heavy Equipment Rental Company Indonesia | 15+ Years Experience'}</title>
        <meta
          name="description"
          content={language === 'id' ? 'PT. Mitra Kawan Bersama - Perusahaan sewa heavy equipment terpercaya sejak 2010. Pengalaman 15+ tahun, 150+ proyek selesai, operator bersertifikat. Penyedia terkemuka untuk proyek oil & gas, mining, power plant & konstruksi di seluruh Indonesia.' : 'PT. Mitra Kawan Bersama - Established heavy equipment rental company since 2010. 15+ years experience, 150+ completed projects, certified operators. Leading provider for oil & gas, mining, power plant & construction projects across Indonesia.'}
        />
        <meta name="keywords" content={language === 'id' ? 'tentang mkb indonesia, perusahaan heavy equipment, perusahaan sewa crane, jasa konstruksi indonesia, kontraktor oil gas, penyedia equipment mining, support power plant' : 'about mkb indonesia, heavy equipment company, crane rental company, construction services indonesia, oil gas contractor, mining equipment provider, power plant support'} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={language === 'id' ? 'Tentang PT. Mitra Kawan Bersama | Perusahaan Sewa Heavy Equipment Indonesia' : 'About PT. Mitra Kawan Bersama | Heavy Equipment Rental Company Indonesia'} />
        <meta property="og:description" content={language === 'id' ? 'Perusahaan sewa heavy equipment terpercaya sejak 2010. Pengalaman 15+ tahun, 150+ proyek selesai dengan operator bersertifikat di seluruh Indonesia.' : 'Established heavy equipment rental company since 2010. 15+ years experience, 150+ completed projects with certified operators across Indonesia.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitrakawanbersama.co.id/about" />
        <meta property="og:image" content="https://mitrakawanbersama.co.id/mkb_logo_png_new.png" />
        <meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'id' ? 'Tentang PT. Mitra Kawan Bersama | Perusahaan Heavy Equipment' : 'About PT. Mitra Kawan Bersama | Heavy Equipment Company'} />
        <meta name="twitter:description" content={language === 'id' ? 'Perusahaan sewa heavy equipment terpercaya sejak 2010. Pengalaman 15+ tahun.' : 'Established heavy equipment rental company since 2010. 15+ years experience.'} />
        <meta name="twitter:image" content="https://mitrakawanbersama.co.id/mkb_logo_png_new.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT. Mitra Kawan Bersama" />
        <link rel="canonical" href="https://mitrakawanbersama.co.id/about" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PT. Mitra Kawan Bersama",
              "foundingDate": "2010",
              "description": language === 'id' ? "Perusahaan sewa heavy equipment terkemuka di Indonesia dengan pengalaman 15+ tahun spesialisasi dalam sewa crane, operasi heavy lift, dan layanan support konstruksi." : "Leading heavy equipment rental company in Indonesia with 15+ years of experience specializing in crane rental, heavy lift operations, and construction support services.",
              "url": "https://mitrakawanbersama.co.id/about",
              "logo": "https://mitrakawanbersama.co.id/mkb_logo_png_new.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "The East Building Lt.39 Unit 3912-3914, Jl. Dr. Ide Anak Agung Gde Agung Lot 8.6-8.7 Kawasan Mega Kuningan",
                "addressLocality": "Jakarta Selatan",
                "addressRegion": "DKI Jakarta", 
                "postalCode": "12950",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-21-578-0505",
                "contactType": "customer service"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Indonesia"
              },
              "knowsAbout": [
                "Heavy Equipment Rental",
                "Crane Operations",
                "Construction Support", 
                "Oil & Gas Services",
                "Mining Equipment",
                "Power Plant Construction"
              ]
            })
          }}
        />
      </Head>
      
      <AboutWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('about.title')}</OverTitle>
            <SectionTitle>Your Trusted Heavy Duty Equipment Partner</SectionTitle>
            <Description>
           {t('about.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection2 
          title={t('about.vision.title')} 
          overTitle="Vision"
          reversed
        >
          <VissionList>
            <li>{t('about.vision.content')}</li>
          </VissionList>
        </BasicSection2>

        <BasicSection2 
          title={t('about.mission.title')} 
          overTitle="Mission"
        >
          <MissionList>
            <li>{t('about.mission.content')}</li>
          </MissionList>
        </BasicSection2>

        <Container>
          {/* <ManagementSection>
            <OverTitle>{t('about.management.title')}</OverTitle>
            <SectionTitle>Tim Management Berpengalaman</SectionTitle>
            
            <ManagementGrid>
              <ManagementCard>
                <ManagementPhoto src="/testimonials/author-photo-1.jpeg" alt="CEO" />
                <ManagementName>Budi Santoso</ManagementName>
                <ManagementPosition>Chief Executive Officer</ManagementPosition>
                <ManagementDescription>
                  15+ tahun pengalaman di industri heavy equipment dan konstruksi. 
                  Memimpin pengembangan strategi bisnis dan ekspansi perusahaan.
                </ManagementDescription>
              </ManagementCard>
              
              <ManagementCard>
                <ManagementPhoto src="/testimonials/author-photo-2.jpeg" alt="COO" />
                <ManagementName>Sari Wijaya</ManagementName>
                <ManagementPosition>Chief Operating Officer</ManagementPosition>
                <ManagementDescription>
                  12+ tahun pengalaman dalam operasional heavy equipment. 
                  Bertanggung jawab atas fleet management dan service quality.
                </ManagementDescription>
              </ManagementCard>
              
              <ManagementCard>
                <ManagementPhoto src="/testimonials/author-photo-3.jpeg" alt="Technical Director" />
                <ManagementName>Ahmad Rahman</ManagementName>
                <ManagementPosition>Technical Director</ManagementPosition>
                <ManagementDescription>
                  20+ tahun pengalaman sebagai technical expert heavy equipment. 
                  Memimpin tim maintenance dan quality assurance.
                </ManagementDescription>
              </ManagementCard>
            </ManagementGrid>
          </ManagementSection> */}

          {/* <PartnersSection>
            <OverTitle>{t('about.partners.title')}</OverTitle>
            <SectionTitle>Partner Logo Wall</SectionTitle>
            
            <PartnersGrid>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-1.svg" alt="Partner 1" />
              </PartnerLogo>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-2.svg" alt="Partner 2" />
              </PartnerLogo>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-3.svg" alt="Partner 3" />
              </PartnerLogo>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-4.svg" alt="Partner 4" />
              </PartnerLogo>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-5.svg" alt="Partner 5" />
              </PartnerLogo>
              <PartnerLogo>
                <img src="/partners/logoipsum-logo-6.svg" alt="Partner 6" />
              </PartnerLogo>
            </PartnersGrid>
          </PartnersSection> */}
        </Container>

        <BasicSection2 
          title="Core Strengths" 
          overTitle="Our Strength"
          reversed
        >
          <CoreStrengthsList>
            <li><strong>Fleet Terlengkap:</strong> 200+ unit heavy equipment dari berbagai kategori dan kapasitas</li>
            <li><strong>Tim Berpengalaman:</strong> Operator, teknisi, dan engineer bersertifikat dan berpengalaman</li>
            <li><strong>Coverage Area Luas:</strong> Melayani seluruh Indonesia dengan base operation di Jakarta dan Duri</li>
            <li><strong>Quality Assurance:</strong> Sistem QAQC terintegrasi untuk memastikan standar kualitas terbaik</li>
            <li><strong>24/7 Support:</strong> Layanan maintenance dan emergency response siap 24 jam</li>
          </CoreStrengthsList>
        </BasicSection2>
      </AboutWrapper>
    </>
  );
}

const AboutWrapper = styled.div`
  padding: 5rem 0;
  
  & > *:not(:first-child) {
    margin-top: 8rem;
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
  color: rgb(var(--text-secondary));
`;

const VissionList = styled.p`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.7rem;
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 90rem;
    text-align: center;
  }
`;

const MissionList = styled.p`
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.7rem;
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 90rem;
    text-align: center;
  }
`;


const PartnersSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  align-items: center;
  
  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const PartnerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
  }
`;

const CoreStrengthsList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    line-height: 1.6;
    
    &:before {
      content: '⚡';
      position: absolute;
      left: 0;
      color: rgb(var(--primary));
      font-size: 1.5rem;
    }
    
    strong {
      color: rgb(var(--primary));
    }
  }
`;


