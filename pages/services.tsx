import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import BasicSection3 from 'components/BasicSection3';
import Container from 'components/Container';
import SectionsWrapper from 'components/SectionsWrapper';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function ServicesPage() {
  const { t, language } = useLanguage();

  const seoTitle = t('seo.services.title');
  const seoDescription = t('seo.services.description');
  const seoKeywords = t('seo.services.keywords');
  const twitterTitle = t('seo.services.title');
  const twitterDescription = t('seo.services.description');
  const serviceIncludesLabel = t('services.mobilization.includes');


  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={seoDescription}
        />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitrakawanbersama.co.id/services" />
        <meta property="og:image" content="https://mitrakawanbersama.co.id/demo-illustration-2.svg" />
        <meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
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
            <SectionTitle>{t('services.header.title')}</SectionTitle>
            <Description>
              {t('services.subtitle')}
            </Description>
          </HeaderSection>
        </Container>


        <SectionsWrapper>
          <BasicSection3 
            imageUrl="/services/lattice.jpg" 
            title="Lattice Crawler Crane" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.lattice.brands')}</em></p>
              <h4>{t('services.rental.lattice.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

          <BasicSection3 
            imageUrl="/services/telescopicc.jpg" 
            title="Telescopic Crawler Crane" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.telescopic.brands')}</em></p>
              <h4>{t('services.rental.telescopic.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

          <BasicSection3 
            imageUrl="/services/cranee.jpg" 
            title="Mobile Crane" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.mobile.brands')}</em></p>
              <h4>{t('services.rental.mobile.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

          <BasicSection3 
            imageUrl="/operational/27.JPG" 
            title="Bulldozer" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.bulldozer.brands')}</em></p>
              <h4>{t('services.rental.bulldozer.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

          <BasicSection3 
            imageUrl="/operational/25.JPG" 
            title="Foco Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.foco.brands')}</em></p>
              <h4>{t('services.rental.foco.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

          <BasicSection3 
            imageUrl="/operational/6.JPG" 
            title="Lowbed Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.lowbed.brands')}</em></p>
              <h4>{t('services.rental.lowbed.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

        <BasicSection3 
<<<<<<< HEAD
            imageUrl="/operational/28.JPG" 
=======
            imageUrl="/services/highbed.JPG" 
>>>>>>> b7d97d90530a47a4efabb875c37f38793305a681
            title="Highbed Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.highbed.brands')}</em></p>
              <h4>{t('services.rental.highbed.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>

         <BasicSection3 
            imageUrl="/operational/19.JPG" 
            title="Vacuum Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.vacuum.brands')}</em></p>
              <h4>{t('services.rental.vacuum.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>
           <BasicSection3 
            imageUrl="/services/cargo.JPG" 
            title="Cargo Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.cargo.brands')}</em></p>
              <h4>{t('services.rental.cargo.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>
          <BasicSection3 
            imageUrl="/operational/26.JPG" 
            title="Tandem Truck" 
          >
            <ServiceDescription>
              <p><em>{t('services.rental.tandem.brands')}</em></p>
              <h4>{t('services.rental.tandem.desc')}</h4>
            </ServiceDescription>
          </BasicSection3>
        </SectionsWrapper>
          

        {/* <Container>
          <HeaderSection>
            <SectionTitle>{t('services.header.title')}</SectionTitle>
            <Description>
              {t('services.subtitle')}
            </Description>
          </HeaderSection>
        </Container> */}

        <BasicSection 
          imageUrl="/services/field.jpg" 
          title={t('services.fieldops.title')} 
          reversed={true}
        >
          <ServiceDescription>
            <SectionBlock>
              <p>{t('services.fieldops.intro')}</p>
              <p>{t('services.fieldops.scopeTitle')}</p>
              <BulletList>
                <li>{t('services.fieldops.item1')}</li>
                <li>{t('services.fieldops.item2')}</li>
                <li>{t('services.fieldops.item3')}</li>
                <li>{t('services.fieldops.item4')}</li>
              </BulletList>
            </SectionBlock>
          </ServiceDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/services/manpower.jpg" 
          title={t('services.manpower.title')} 
        >
          <ServiceDescription>
          <SectionBlock>
              <p>{t('services.manpower.desc')}</p>
              <p>{t('services.manpower.scopeTitle')}</p>
              <BulletList>
                <li>{t('services.manpower.item1')}</li>
                <li>{t('services.manpower.item2')}</li>
                <li>{t('services.manpower.item3')}</li>
                <li>{t('services.manpower.item4')}</li>
              </BulletList>
            </SectionBlock>
          </ServiceDescription>
        </BasicSection>

        <Container>
          <AdditionalServicesSection>
            <SectionTitle>{t('services.lightvehicle.title')}</SectionTitle>
            <ServicesGrid>
              <ServiceCard>
                <ServiceDetails>
                  <p>{t('services.lightvehicle.desc')}</p>
                </ServiceDetails>
              </ServiceCard>
            </ServicesGrid>
          </AdditionalServicesSection>

            <AdvantagesSection>
            <SectionTitle>{t('services.mobilization.title')}</SectionTitle>
            <h4>{t('services.mobilization.desc')}</h4>
            <h4>{serviceIncludesLabel}</h4>
            <AdvantagesGrid>
              <AdvantageCard>
                <AdvantageIcon>⚡</AdvantageIcon>
                <AdvantageTitle>{t('services.mobilization.item1.title')}</AdvantageTitle>
                <AdvantageDescription>{t('services.mobilization.item1.desc')}</AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🔧</AdvantageIcon>
                <AdvantageTitle>{t('services.mobilization.item2.title')}</AdvantageTitle>
                <AdvantageDescription>{t('services.mobilization.item2.desc')}</AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🌐</AdvantageIcon>
                <AdvantageTitle>{t('services.mobilization.item3.title')}</AdvantageTitle>
                <AdvantageDescription>{t('services.mobilization.item3.desc')}</AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>💼</AdvantageIcon>
                <AdvantageTitle>{t('services.mobilization.item4.title')}</AdvantageTitle>
                <AdvantageDescription>{t('services.mobilization.item4.desc')}</AdvantageDescription>
              </AdvantageCard>
            </AdvantagesGrid>
          </AdvantagesSection>
        </Container>
      </ServicesWrapper>
    </>
  );
}

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
    font-size: 1.5rem;
    color: var(--primary);
  }
`;

const AdvantagesSection = styled.div`
  text-align: center;
  margin: 8rem 0;

  h4 {
    font-size: 1.5rem;
    margin-top: 1rem;
    width: 80%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const SectionBlock = styled.div`
  p {
    font-size: 1.6rem;
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    color: var(--text-secondary);
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;

  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    line-height: 1.6;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: 700;
    }
  }
`;

const AdditionalServicesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
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

const ServiceDetails = styled.div`
  list-style: none;
  padding: 0;
  text-align: left;
  
  p {
    font-size: 1.5rem;
    text-align: center;
    color: var(--text-secondary);
    
  }
`;
