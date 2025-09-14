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
  const { t } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('contact.page.title')} - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content={t('contact.page.subtitle')}
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
