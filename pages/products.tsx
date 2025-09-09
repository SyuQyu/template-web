import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content="Produk-produk industri berkualitas tinggi dari PT. Mitra Kawan Bersama meliputi Industrial Equipment, Chemical Products, dan Safety Equipment."
        />
      </Head>
      
      <ProductsWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>Our Products</OverTitle>
            <SectionTitle>Produk Industri Berkualitas Tinggi</SectionTitle>
            <Description>
              PT. Mitra Kawan Bersama menyediakan berbagai kategori produk industri dengan standar 
              kualitas internasional untuk memenuhi kebutuhan operasional perusahaan Anda.
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title="Industrial Equipment" 
          overTitle="Category 1"
        >
          <ProductDescription>
            <h4>Peralatan Industri & Mesin</h4>
            <p>
              Menyediakan berbagai peralatan industri berkualitas tinggi untuk mendukung operasional 
              yang efisien dan produktif.
            </p>
            <ProductList>
              <li>Mesin dan peralatan industri terbaru</li>
              <li>Komponen dan spare parts original</li>
              <li>Tools dan accessories professional grade</li>
              <li>Automation equipment dan control systems</li>
              <li>Material handling equipment</li>
            </ProductList>
          </ProductDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-2.svg" 
          title="Chemical Products" 
          overTitle="Category 2"
          reversed
        >
          <ProductDescription>
            <h4>Produk Kimia Industri</h4>
            <p>
              Distribusi bahan kimia industri dengan standar keamanan tinggi dan sertifikasi 
              internasional untuk berbagai aplikasi industri.
            </p>
            <ProductList>
              <li>Bahan kimia industri berkualitas tinggi</li>
              <li>Specialty chemicals untuk aplikasi khusus</li>
              <li>Raw materials untuk proses produksi</li>
              <li>Cleaning chemicals dan solvents</li>
              <li>Laboratory chemicals dan reagents</li>
            </ProductList>
          </ProductDescription>
        </BasicSection>

        <BasicSection 
          imageUrl="/demo-illustration-3.png" 
          title="Safety Equipment" 
          overTitle="Category 3"
        >
          <ProductDescription>
            <h4>Peralatan Keselamatan Kerja</h4>
            <p>
              Peralatan keselamatan kerja lengkap dengan sertifikasi internasional untuk melindungi 
              karyawan dan memastikan lingkungan kerja yang aman.
            </p>
            <ProductList>
              <li>Personal Protective Equipment (PPE) lengkap</li>
              <li>Safety systems dan emergency equipment</li>
              <li>Fire protection dan detection systems</li>
              <li>Gas detection dan monitoring equipment</li>
              <li>Safety training materials dan signage</li>
            </ProductList>
          </ProductDescription>
        </BasicSection>

        <Container>
          <FeaturesSection>
            <OverTitle>Product Features</OverTitle>
            <SectionTitle>Keunggulan Produk Kami</SectionTitle>
            
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🏆</FeatureIcon>
                <FeatureTitle>Kualitas Premium</FeatureTitle>
                <FeatureDescription>
                  Semua produk telah melalui quality control ketat dan memenuhi standar internasional
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>📜</FeatureIcon>
                <FeatureTitle>Sertifikasi Resmi</FeatureTitle>
                <FeatureDescription>
                  Produk bersertifikat resmi dari manufacturer dengan garansi dan dukungan penuh
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>⚡</FeatureIcon>
                <FeatureTitle>Ready Stock</FeatureTitle>
                <FeatureDescription>
                  Ketersediaan stock yang konsisten dengan sistem inventory management terintegrasi
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>💰</FeatureIcon>
                <FeatureTitle>Harga Kompetitif</FeatureTitle>
                <FeatureDescription>
                  Harga yang kompetitif dengan value terbaik tanpa mengorbankan kualitas produk
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </FeaturesSection>

          <CategoriesSection>
            <OverTitle>Product Categories</OverTitle>
            <SectionTitle>Kategori Produk Lengkap</SectionTitle>
            
            <CategoriesGrid>
              <CategoryCard>
                <CategoryTitle>Pumps & Valves</CategoryTitle>
                <CategoryItems>
                  <li>Centrifugal Pumps</li>
                  <li>Diaphragm Pumps</li>
                  <li>Control Valves</li>
                  <li>Safety Valves</li>
                </CategoryItems>
              </CategoryCard>
              
              <CategoryCard>
                <CategoryTitle>Instrumentation</CategoryTitle>
                <CategoryItems>
                  <li>Flow Meters</li>
                  <li>Pressure Transmitters</li>
                  <li>Temperature Sensors</li>
                  <li>Level Indicators</li>
                </CategoryItems>
              </CategoryCard>
              
              <CategoryCard>
                <CategoryTitle>Electrical Components</CategoryTitle>
                <CategoryItems>
                  <li>Motors & Drives</li>
                  <li>Control Panels</li>
                  <li>Switchgear</li>
                  <li>Cable & Accessories</li>
                </CategoryItems>
              </CategoryCard>
              
              <CategoryCard>
                <CategoryTitle>Safety Systems</CategoryTitle>
                <CategoryItems>
                  <li>Emergency Shutdown</li>
                  <li>Fire & Gas Detection</li>
                  <li>Personal Protective</li>
                  <li>Safety Barriers</li>
                </CategoryItems>
              </CategoryCard>
            </CategoriesGrid>
          </CategoriesSection>
        </Container>
      </ProductsWrapper>
    </>
  );
}

const ProductsWrapper = styled.div`
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

const ProductDescription = styled.div`
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

const ProductList = styled.ul`
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

const FeaturesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
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

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const FeatureDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const CategoriesSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CategoryCard = styled.div`
  background: var(--cardBackground);
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--primary);
  text-align: center;
`;

const CategoryItems = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.5rem 0;
    font-size: 1.4rem;
    color: var(--text-secondary);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;
