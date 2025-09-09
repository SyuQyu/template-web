import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content="PT. Mitra Kawan Bersama adalah perusahaan distribusi produk industri terpercaya sejak 2010. Pelajari lebih lanjut tentang visi, misi, dan komitmen kami."
        />
      </Head>
      
      <AboutWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>About PT. Mitra Kawan Bersama</OverTitle>
            <SectionTitle>Your Trusted Partner in Industrial Solutions</SectionTitle>
            <Description>
              PT. Mitra Kawan Bersama (MKB) adalah perusahaan yang bergerak di bidang perdagangan dan distribusi 
              produk-produk industri. Didirikan pada tahun 2010, kami telah membangun reputasi sebagai mitra 
              terpercaya dalam menyediakan solusi berkualitas tinggi untuk berbagai kebutuhan industri.
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title="Visi Kami" 
          overTitle="Vision"
          reversed
        >
          <p>
            Menjadi perusahaan distribusi terdepan yang memberikan solusi terbaik dan berkelanjutan 
            untuk kemajuan industri Indonesia.
          </p>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title="Misi Kami" 
          overTitle="Mission"
        >
          <MissionList>
            <li>Menyediakan produk berkualitas tinggi dengan standar internasional</li>
            <li>Memberikan pelayanan terbaik kepada seluruh pelanggan</li>
            <li>Membangun kemitraan jangka panjang yang saling menguntungkan</li>
            <li>Berkontribusi dalam pengembangan industri nasional</li>
          </MissionList>
        </BasicSection>

        <Container>
          <ValuesSection>
            <OverTitle>Company Values</OverTitle>
            <SectionTitle>Nilai-Nilai Perusahaan</SectionTitle>
            
            <ValuesGrid>
              <ValueCard>
                <ValueTitle>Kualitas</ValueTitle>
                <ValueDescription>
                  Komitmen terhadap produk dan layanan berkualitas tinggi dengan standar internasional.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueTitle>Integritas</ValueTitle>
                <ValueDescription>
                  Menjalankan bisnis dengan kejujuran, transparansi, dan etika yang tinggi.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueTitle>Inovasi</ValueTitle>
                <ValueDescription>
                  Terus berinovasi dalam memberikan solusi terbaik untuk kebutuhan industri.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueTitle>Kemitraan</ValueTitle>
                <ValueDescription>
                  Membangun hubungan jangka panjang yang saling menguntungkan dengan semua stakeholder.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-3.png" 
          title="Pengalaman & Keahlian" 
          overTitle="Experience"
          reversed
        >
          <p>
            Dengan lebih dari 13 tahun pengalaman dalam industri distribusi, PT. Mitra Kawan Bersama 
            telah melayani berbagai sektor industri di seluruh Indonesia. Tim profesional kami yang 
            berpengalaman siap memberikan solusi terbaik untuk kebutuhan spesifik perusahaan Anda.
          </p>
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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ValueCard = styled.div`
  background: var(--cardBackground);
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ValueTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const ValueDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;
