import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content="Layanan terpadu PT. Mitra Kawan Bersama meliputi trading & distribution, technical support, dan custom solutions untuk kebutuhan industri Anda."
        />
      </Head>
      
      <ServicesWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>Our Services</OverTitle>
            <SectionTitle>Layanan Terpadu untuk Industri</SectionTitle>
            <Description>
              PT. Mitra Kawan Bersama menyediakan layanan komprehensif untuk memenuhi berbagai kebutuhan 
              industri dengan standar kualitas dan pelayanan terbaik.
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title="Trading & Distribution" 
          overTitle="Core Service"
        >
          <ServiceDescription>
            <h4>Distribusi Produk Industri Berkualitas Tinggi</h4>
            <ServiceList>
              <li>Distribusi produk-produk industri dengan standar internasional</li>
              <li>Jaringan distribusi yang luas dan terpercaya di seluruh Indonesia</li>
              <li>Manajemen supply chain yang efisien dan terorganisir</li>
              <li>Sistem inventory management yang terintegrasi</li>
              <li>Delivery tracking dan monitoring real-time</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title="Technical Support" 
          overTitle="Professional Service"
          reversed
        >
          <ServiceDescription>
            <h4>Dukungan Teknis Profesional</h4>
            <ServiceList>
              <li>Konsultasi teknis dari tim ahli berpengalaman</li>
              <li>After-sales service yang responsif dan berkualitas</li>
              <li>Training dan edukasi produk untuk klien</li>
              <li>Troubleshooting dan maintenance support</li>
              <li>Technical documentation dan user manual</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-3.png" 
          title="Custom Solutions" 
          overTitle="Tailored Service"
        >
          <ServiceDescription>
            <h4>Solusi Khusus Sesuai Kebutuhan</h4>
            <ServiceList>
              <li>Analisis kebutuhan industri yang mendalam</li>
              <li>Rekomendasi produk yang tepat dan optimal</li>
              <li>Project management support end-to-end</li>
              <li>Custom packaging dan labeling solutions</li>
              <li>Flexible payment terms dan financing options</li>
            </ServiceList>
          </ServiceDescription>
        </BasicSection>

        <Container>
          <AdvantagesSection>
            <OverTitle>Why Choose Us</OverTitle>
            <SectionTitle>Keunggulan Layanan Kami</SectionTitle>
            
            <AdvantagesGrid>
              <AdvantageCard>
                <AdvantageIcon>🎯</AdvantageIcon>
                <AdvantageTitle>Pengalaman Terpercaya</AdvantageTitle>
                <AdvantageDescription>
                  Lebih dari 13 tahun pengalaman dalam industri distribusi produk industri
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>⚡</AdvantageIcon>
                <AdvantageTitle>Respon Cepat</AdvantageTitle>
                <AdvantageDescription>
                  Tim customer service yang responsif dengan response time kurang dari 2 jam
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🔧</AdvantageIcon>
                <AdvantageTitle>Tim Profesional</AdvantageTitle>
                <AdvantageDescription>
                  Didukung oleh tim technical yang berpengalaman dan tersertifikasi
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🌐</AdvantageIcon>
                <AdvantageTitle>Jaringan Luas</AdvantageTitle>
                <AdvantageDescription>
                  Coverage area yang mencakup seluruh Indonesia dengan distribution center strategis
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>✅</AdvantageIcon>
                <AdvantageTitle>Kualitas Terjamin</AdvantageTitle>
                <AdvantageDescription>
                  Produk berkualitas tinggi dengan sertifikasi internasional dan garansi resmi
                </AdvantageDescription>
              </AdvantageCard>
              
              <AdvantageCard>
                <AdvantageIcon>🤝</AdvantageIcon>
                <AdvantageTitle>Partnership Oriented</AdvantageTitle>
                <AdvantageDescription>
                  Membangun hubungan jangka panjang yang saling menguntungkan dengan semua klien
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
