import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function PartnershipPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('partnership.page.title')} - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content={t('partnership.page.subtitle')}
        />
      </Head>
      
      <PartnershipWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('partnership.page.title')}</OverTitle>
            <SectionTitle>{t('partnership.strategic.title')}</SectionTitle>
            <Description>
              {t('partnership.page.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title={t('partnership.global.title')} 
        >
          <PartnershipDescription>
            <h4>{t('partnership.global.title')}</h4>
            <p>
              {t('partnership.global.subtitle')}
            </p>
            <PartnershipList>
              <li>{t('partnership.list.principals')}</li>
              <li>{t('partnership.list.manufacturers')}</li>
              <li>{t('partnership.list.suppliers')}</li>
              <li>{t('partnership.list.technology')}</li>
              <li>{t('partnership.list.distributors')}</li>
            </PartnershipList>
          </PartnershipDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title="Local Strategic Partners" 
          reversed
        >
          <PartnershipDescription>
            <h4>Mitra Strategis Lokal</h4>
            <p>
              Kemitraan dengan perusahaan lokal untuk memperkuat supply chain dan memberikan 
              dukungan yang lebih dekat dengan klien di seluruh Indonesia.
            </p>
            <PartnershipList>
              <li>Local manufacturer dan fabricator</li>
              <li>Regional distributor dan agent</li>
              <li>Service provider dan maintenance partner</li>
              <li>Logistics dan transportation partner</li>
              <li>Financial institution untuk payment solution</li>
            </PartnershipList>
          </PartnershipDescription>
        </BasicSection>

        <Container>
          <BenefitsSection>
            <OverTitle>Partnership Benefits</OverTitle>
            <SectionTitle>Keuntungan Bermitra dengan MKB</SectionTitle>
            
            <BenefitsGrid>
              <BenefitCard>
                <BenefitIcon>🎯</BenefitIcon>
                <BenefitTitle>Market Access</BenefitTitle>
                <BenefitDescription>
                  Akses ke pasar Indonesia yang luas dengan jaringan distribusi yang kuat dan established customer base
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>🤝</BenefitIcon>
                <BenefitTitle>Long-term Partnership</BenefitTitle>
                <BenefitDescription>
                  Hubungan kemitraan jangka panjang yang saling menguntungkan dengan komitmen mutual growth
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>📈</BenefitIcon>
                <BenefitTitle>Business Growth</BenefitTitle>
                <BenefitDescription>
                  Pertumbuhan bisnis yang sustainable melalui strategi pemasaran dan sales yang terintegrasi
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>🔧</BenefitIcon>
                <BenefitTitle>Technical Support</BenefitTitle>
                <BenefitDescription>
                  Dukungan teknis professional untuk product training, installation, dan after-sales service
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>💼</BenefitIcon>
                <BenefitTitle>Professional Team</BenefitTitle>
                <BenefitDescription>
                  Tim sales dan technical yang berpengalaman dengan understanding yang mendalam tentang market lokal
                </BenefitDescription>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>📊</BenefitIcon>
                <BenefitTitle>Market Intelligence</BenefitTitle>
                <BenefitDescription>
                  Market feedback dan business intelligence untuk product development dan market strategy optimization
                </BenefitDescription>
              </BenefitCard>
            </BenefitsGrid>
          </BenefitsSection>

          <RequirementsSection>
            <OverTitle>Partnership Requirements</OverTitle>
            <SectionTitle>Syarat Kemitraan</SectionTitle>
            
            <RequirementsContent>
              <RequirementCategory>
                <CategoryTitle>Untuk Principal/Manufacturer</CategoryTitle>
                <RequirementList>
                  <li>Produk berkualitas dengan sertifikasi internasional</li>
                  <li>Competitive pricing dan margin yang reasonable</li>
                  <li>Dukungan technical dan marketing materials</li>
                  <li>Komitmen untuk long-term partnership</li>
                  <li>Product training dan certification program</li>
                </RequirementList>
              </RequirementCategory>
              
              <RequirementCategory>
                <CategoryTitle>Untuk Local Partners</CategoryTitle>
                <RequirementList>
                  <li>Legal business entity dengan track record yang baik</li>
                  <li>Infrastructure dan capability yang memadai</li>
                  <li>Komitmen terhadap quality dan service excellence</li>
                  <li>Geographic coverage yang strategis</li>
                  <li>Financial stability dan business sustainability</li>
                </RequirementList>
              </RequirementCategory>
            </RequirementsContent>
          </RequirementsSection>

          <CTASection>
            <OverTitle>Join Our Network</OverTitle>
            <SectionTitle>Mari Bermitra dengan Kami</SectionTitle>
            <CTADescription>
              Bergabunglah dengan jaringan kemitraan PT. Mitra Kawan Bersama dan kembangkan 
              bisnis Anda bersama mitra terpercaya di industri Indonesia.
            </CTADescription>
            <ContactInfo>
              <ContactItem>
                <ContactLabel>Business Development:</ContactLabel>
                <ContactValue>partnership@mitrakawanbersama.co.id</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Phone:</ContactLabel>
                <ContactValue>+62 21 1234 5678</ContactValue>
              </ContactItem>
            </ContactInfo>
          </CTASection>
        </Container>
      </PartnershipWrapper>
    </>
  );
}

const PartnershipWrapper = styled.div`
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

const PartnershipDescription = styled.div`
  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }
`;

const PartnershipList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
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

const BenefitsSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BenefitCard = styled.div`
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

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const BenefitDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const RequirementsSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const RequirementsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  margin-top: 4rem;
  text-align: left;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const RequirementCategory = styled.div`
  background: var(--cardBackground);
  padding: 3rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary);
  text-align: center;
`;

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
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

const CTASection = styled.div`
  text-align: center;
  margin: 8rem 0;
  padding: 4rem;
  background: var(--cardBackground);
  border-radius: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 2rem 0 3rem;
  color: var(--text-secondary);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  ${media('<=phone')} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactLabel = styled.span`
  font-weight: bold;
  color: var(--primary);
`;

const ContactValue = styled.span`
  color: var(--text-secondary);
`;
