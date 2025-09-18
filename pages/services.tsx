import Head from 'next/head';
import styled from 'styled-components';
import { SetStateAction, useEffect, useState } from 'react';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function ServicesPage() {
  const { t, language } = useLanguage();

  // Photo slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    { id: 1, src: "/operational/1.jpg", title: "Mobile Crane Operation", category: "Equipment" },
    { id: 2, src: "/operational/2.jpg", title: "Safety Briefing Session", category: "Team" },
    { id: 3, src: "/operational/3.jpg", title: "Heavy Lift Operation", category: "Process" },
    { id: 4, src: "/operational/4.jpg", title: "Rig Moving Project", category: "Process" },
    { id: 5, src: "/operational/5.jpg", title: "Equipment Maintenance", category: "Equipment" },
    { id: 6, src: "/operational/6.jpg", title: "Team Coordination", category: "Team" },
    { id: 7, src: "/operational/7.jpg", title: "Crane Fleet", category: "Equipment" },
    { id: 8, src: "/operational/8.jpg", title: "On-site Supervision", category: "Team" }, 
    { id: 9, src: "/operational/9.jpg", title: "Logistics Planning", category: "Process" },
    { id: 10, src: "/operational/10.jpg", title: "Heavy Equipment Transport", category: "Process" },
    { id: 11, src: "/operational/11.jpg", title: "Rig Assembly", category: "Process" },
    { id: 12, src: "/operational/12.jpg", title: "Crane Inspection", category: "Equipment" },
    { id: 13, src: "/operational/13.jpg", title: "Team Training", category: "Team" },
    { id: 14, src: "/operational/14.jpg", title: "Project Kick-off Meeting", category: "Team" },
    { id: 15, src: "/operational/15.jpg", title: "Heavy Lift with Mobile Crane", category: "Process" },
    { id: 16, src: "/operational/16.jpg", title: "Equipment Staging Area", category: "Equipment" },
    { id: 17, src: "/operational/17.jpg", title: "Rig Transport Preparation", category: "Process" },
    { id: 18, src: "/operational/18.jpg", title: "Team Safety Drill", category: "Team" },
    { id: 19, src: "/operational/19.jpg", title: "Crane Operator at Work", category: "Equipment" },
    { id: 20, src: "/operational/20.jpg", title: "Project Completion Celebration", category: "Team" },
    { id: 21, src: "/operational/21.jpg", title: "Heavy Lift Planning", category: "Process" },
    { id: 22, src: "/operational/22.jpg", title: "Equipment Loading", category: "Process" },
    { id: 23, src: "/operational/23.jpg", title: "Team Meeting", category: "Team" },
  ];

  


  // If you want to filter photos by category or other logic, do it here.
  // For now, show all photos.
  const filteredPhotos = photos;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };


  return (
    <>
      <Head>
        <title>{language === 'id' ? 'Layanan Heavy Equipment | Sewa Crane, Heavy Lift, Support Konstruksi | PT. Mitra Kawan Bersama' : 'Heavy Equipment Services | Crane Rental, Heavy Lift, Construction Support | PT. Mitra Kawan Bersama'}</title>
        <meta
          name="description"
          content={language === 'id' ? 'Layanan heavy equipment komprehensif di Indonesia: sewa crane, operasi heavy lift, transportasi equipment, maintenance support, rigging services. Support profesional 24/7 untuk proyek oil & gas, mining, power plant & konstruksi.' : 'Comprehensive heavy equipment services in Indonesia: crane rental, heavy lift operations, equipment transportation, maintenance support, rigging services. 24/7 professional support for oil & gas, mining, power plant & construction projects.'}
        />
        <meta name="keywords" content={language === 'id' ? 'layanan sewa crane, operasi heavy lift, transportasi equipment, rigging services, maintenance support, layanan konstruksi, support oil gas, layanan mining, konstruksi power plant' : 'crane rental services, heavy lift operations, equipment transportation, rigging services, maintenance support, construction services, oil gas support, mining services, power plant construction'} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={language === 'id' ? 'Layanan Heavy Equipment | Sewa Crane & Operasi Heavy Lift | PT. MKB' : 'Heavy Equipment Services | Crane Rental & Heavy Lift Operations | PT. MKB'} />
        <meta property="og:description" content={language === 'id' ? 'Layanan heavy equipment komprehensif: sewa crane, operasi heavy lift, transportasi equipment dengan support profesional 24/7 di seluruh Indonesia.' : 'Comprehensive heavy equipment services: crane rental, heavy lift operations, equipment transportation with 24/7 professional support across Indonesia.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitrakawanbersama.co.id/services" />
        <meta property="og:image" content="https://mitrakawanbersama.co.id/demo-illustration-2.svg" />
        <meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'id' ? 'Layanan Heavy Equipment | PT. Mitra Kawan Bersama' : 'Heavy Equipment Services | PT. Mitra Kawan Bersama'} />
        <meta name="twitter:description" content={language === 'id' ? 'Sewa crane profesional, operasi heavy lift & transportasi equipment dengan support 24/7.' : 'Professional crane rental, heavy lift operations & equipment transportation services with 24/7 support.'} />
        <meta name="twitter:image" content="https://mitrakawanbersama.co.id/demo-illustration-2.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT. Mitra Kawan Bersama" />
        <link rel="canonical" href="https://mitrakawanbersama.co.id/services" />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Heavy Equipment Rental Services",
              "description": "Comprehensive heavy equipment rental and support services including crane rental, heavy lift operations, equipment transportation, and maintenance support.",
              "provider": {
                "@type": "Organization",
                "name": "PT. Mitra Kawan Bersama",
                "url": "https://mkb.co.id"
              },
              "areaServed": {
                "@type": "Country", 
                "name": "Indonesia"
              },
              "serviceType": [
                "Crane Rental",
                "Heavy Lift Operations", 
                "Equipment Transportation",
                "Maintenance Support",
                "Rigging Services",
                "Construction Support"
              ],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "validFrom": "2010-01-01"
              }
            })
          }}
        />
      </Head>
      
      <ServicesWrapper>
        <PhotoSliderSection>
          <Container>
            <SliderHeader>
              <OverTitle>Operational Gallery</OverTitle>
              <SectionTitle>Our Work in Action</SectionTitle>
              <SliderDescription>
                Dokumentasi lengkap operasional dan fasilitas PT. Mitra Kawan Bersama
              </SliderDescription>
            </SliderHeader>

            <SliderContainer>
              <SliderWrapper>
                <SliderTrack currentSlide={currentSlide}>
                  {filteredPhotos.map((photo, index) => (
                    <SliderSlide key={photo.id}>
                      <SlideImage src={photo.src} alt={photo.title} />
                      <SlideOverlay>
                        <SlideTitle>{photo.title}</SlideTitle>
                        <SlideCategory>{photo.category}</SlideCategory>
                      </SlideOverlay>
                    </SliderSlide>
                  ))}
                </SliderTrack>
                
                <NavButton left onClick={prevSlide}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </NavButton>
                <NavButton right onClick={nextSlide}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </NavButton>
              </SliderWrapper>

              {/* Dots Indicator */}
            <DotsContainer>
                {filteredPhotos.slice(0, Math.min(filteredPhotos.length, 10)).map((_, index) => (
                  <Dot
                    key={index}
                    $active={currentSlide === index}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </DotsContainer>
            </SliderContainer>
          </Container>
        </PhotoSliderSection>

        <Container>
          <HeaderSection>
            <OverTitle>{t('services.title')}</OverTitle>
            <SectionTitle>Heavy Duty Equipment Services</SectionTitle>
            <Description>
              {t('services.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/Trucks.png" 
          title={t('services.rental.title')} 
          overTitle="Core Service"
        >
          <ServiceDescription>
            <h4>{t('services.rental.title')}</h4>
            <ServiceList>
              <li>{t('services.rental.desc')}</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title="Rig Moving & Relocation Support" 
          overTitle="Specialized Service"
          reversed
        >
          <ServiceDescription>
            <h4>Professional Rig Moving Services</h4>
            <ServiceList>
              <li>Rig dismantle, transportation, dan re-assembly services</li>
              <li>Route survey dan engineering analysis untuk safe transport</li>
              <li>Heavy lift operations dengan specialized cranes</li>
              <li>Multi-modal transportation: land, sea, dan barge transport</li>
              <li>Project management dan coordination dengan authorities</li>
              <li>Emergency rig move services 24/7 availability</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-3.png" 
          title="Maintenance & Repair Services" 
          overTitle="Support Service"
        >
          <ServiceDescription>
            <h4>Comprehensive Maintenance Solutions</h4>
            <ServiceList>
              <li>Preventive maintenance programs untuk equipment longevity</li>
              <li>Emergency repair services dengan response time &lt; 4 hours</li>
              <li>On-site field service team dengan mobile workshop</li>
              <li>Genuine spare parts supply dan inventory management</li>
              <li>Equipment overhaul dan refurbishment services</li>
              <li>Condition monitoring dan predictive maintenance</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <Container>
          <AdditionalServicesSection>
            <OverTitle>Additional Services</OverTitle>
            <SectionTitle>Manpower & Quality Assurance</SectionTitle>
            
            <ServicesGrid>
              <ServiceCard>
                <ServiceIcon>👨‍🔧</ServiceIcon>
                <ServiceTitle>Manpower Supply</ServiceTitle>
                <ServiceDetails>
                  <li>Certified crane operators dengan pengalaman 10+ tahun</li>
                  <li>Skilled technicians dan mechanics untuk maintenance</li>
                  <li>Professional drivers untuk heavy equipment transportation</li>
                  <li>Safety officers dan project supervisors</li>
                  <li>Training dan certification programs untuk crew</li>
                </ServiceDetails>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceIcon>📋</ServiceIcon>
                <ServiceTitle>CCPM / QAQC System Management</ServiceTitle>
                <ServiceDetails>
                  <li>Construction Project Management (CCPM) support</li>
                  <li>Quality Assurance & Quality Control (QAQC) implementation</li>
                  <li>HSE (Health, Safety, Environment) management system</li>
                  <li>Project documentation dan progress reporting</li>
                  <li>Compliance monitoring dan regulatory support</li>
                </ServiceDetails>
              </ServiceCard>
            </ServicesGrid>
          </AdditionalServicesSection>

          <AdvantagesSection>
            <OverTitle>Why Choose Our Services</OverTitle>
            <SectionTitle>Keunggulan Layanan Kami</SectionTitle>
            
            <AdvantagesGrid>
              <AdvantageCard>
                <AdvantageIcon>🛡️</AdvantageIcon>
                <AdvantageTitle>Safety First</AdvantageTitle>
                <AdvantageDescription>
                  Zero accident policy dengan comprehensive safety management system dan certified crew
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>⚡</AdvantageIcon>
                <AdvantageTitle>Rapid Response</AdvantageTitle>
                <AdvantageDescription>
                  Emergency response team siap 24/7 dengan mobilization time kurang dari 4 jam
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🔧</AdvantageIcon>
                <AdvantageTitle>Expert Team</AdvantageTitle>
                <AdvantageDescription>
                  Tim operator dan teknisi bersertifikat dengan pengalaman puluhan tahun
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🌐</AdvantageIcon>
                <AdvantageTitle>Nationwide Coverage</AdvantageTitle>
                <AdvantageDescription>
                  Coverage area seluruh Indonesia dengan logistics network yang kuat
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>📊</AdvantageIcon>
                <AdvantageTitle>Quality Assurance</AdvantageTitle>
                <AdvantageDescription>
                  ISO certified quality management system dengan continuous improvement
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>💼</AdvantageIcon>
                <AdvantageTitle>Project Management</AdvantageTitle>
                <AdvantageDescription>
                  End-to-end project management dengan dedicated project coordinator
                </AdvantageDescription>
              </AdvantageCard>
            </AdvantagesGrid>
          </AdvantagesSection>
        </Container>
      </ServicesWrapper>
    </>
  );
}

// Photo Slider Styles
const PhotoSliderSection = styled.div`
  color:(--primary);
  padding: 2rem 0;
  margin-bottom: 5rem;
`;

const SliderHeader = styled.div`
  text-align: center;
  max-width: 80rem;
  margin: 0 auto 4rem;
`;

const SliderDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 2rem 0;
  color: var(--text-secondary);
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 200rem;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SliderTrack = styled.div<{ currentSlide: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

const SliderSlide = styled.div`
  min-width: 100%;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 55rem;
  object-fit: cover;
  display: block;

  ${media('<=tablet')} {
    height: 35rem;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 4rem 3rem 2rem;
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;

  ${media('<=tablet')} {
    font-size: 2rem;
  }
`;

const SlideCategory = styled.p`
  font-size: 1.4rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

interface NavButtonProps {
  left?: boolean;
  right?: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.left ? 'left: 2rem;' : props.right ? 'right: 2rem;' : ''}
  background: rgb(var(--border));
  border: none;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--primary);

  &:hover {
    background: rgb(var(--cardBackground));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  ${media('<=tablet')} {
    width: 4rem;
    height: 4rem;
    ${props => props.left ? 'left: 1rem;' : props.right ? 'right: 1rem;' : ''}
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 4rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? 'rgb(var(--primary))' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(var(--primary));
  }
`;

// Existing styles...
const ServicesWrapper = styled.div`
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
  color: var(--text-secondary);
`;

const ServiceDescription = styled.div`
  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary);
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    line-height: 1.5;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

const AdvantagesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AdvantageCard = styled.div`
  background: rgb(var(--cardBackground));
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const AdvantageIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const AdvantageTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const AdvantageDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const AdditionalServicesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: rgb(var(--cardBackground));
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const ServiceDetails = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.5;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
    }
  }
`;