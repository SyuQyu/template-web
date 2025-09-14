import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function ServicesPage() {
  const { t, language } = useLanguage();

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
        <Container>
          <HeaderSection>
            <OverTitle>{t('services.title')}</OverTitle>
            <SectionTitle>Comprehensive Heavy Equipment Services</SectionTitle>
            <Description>
              {t('services.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
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
          title="Rig Move & Relocation Support" 
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
