import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('about.title')} - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content={t('about.subtitle')}
        />
      </Head>
      
      <AboutWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('about.title')}</OverTitle>
            <SectionTitle>Your Trusted Heavy Equipment Partner</SectionTitle>
            <Description>
              {t('about.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title={t('about.vision.title')} 
          overTitle="Vision"
          reversed
        >
          <p>
            {t('about.vision.content')}
          </p>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title={t('about.mission.title')} 
          overTitle="Mission"
        >
          <MissionList>
            <li>{t('about.mission.content')}</li>
          </MissionList>
        </BasicSection>

        <Container>
          <ManagementSection>
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
          </ManagementSection>

          <PartnersSection>
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
          </PartnersSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-3.png" 
          title="Core Strengths" 
          overTitle="Our Strength"
          reversed
        >
          <CoreStrengthsList>
            <li><strong>Fleet Terlengkap:</strong> 200+ unit heavy equipment dari berbagai kategori dan kapasitas</li>
            <li><strong>Tim Berpengalaman:</strong> Operator, teknisi, dan engineer bersertifikat dengan pengalaman 10+ tahun</li>
            <li><strong>Coverage Area Luas:</strong> Melayani seluruh Indonesia dengan base operation di Jakarta dan Duri</li>
            <li><strong>Quality Assurance:</strong> Sistem QAQC terintegrasi untuk memastikan standar kualitas terbaik</li>
            <li><strong>24/7 Support:</strong> Layanan maintenance dan emergency response siap 24 jam</li>
          </CoreStrengthsList>
        </BasicSection>
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
  color: var(--text-secondary);
`;

const MissionList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
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

const ValuesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ManagementSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ManagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ManagementCard = styled.div`
  background: var(--cardBackground);
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ManagementPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const ManagementName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const ManagementPosition = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-weight: normal;
`;

const ManagementDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
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
  background: var(--cardBackground);
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
      color: var(--primary);
      font-size: 1.5rem;
    }
    
    strong {
      color: var(--primary);
    }
  }
`;


