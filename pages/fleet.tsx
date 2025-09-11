import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const EQUIPMENT_CATEGORIES = [
  {
    category: 'Mobile Cranes',
    description: 'Heavy duty mobile cranes untuk lifting dan material handling',
    equipment: [
      { model: 'Grove GMK5250L', tonnage: '250 Ton', quantity: 8, manual: '/manuals/grove-gmk5250l.pdf' },
      { model: 'Liebherr LTM1200-5.1', tonnage: '200 Ton', quantity: 12, manual: '/manuals/liebherr-ltm1200.pdf' },
      { model: 'Tadano ATF130G-5', tonnage: '130 Ton', quantity: 15, manual: '/manuals/tadano-atf130g.pdf' },
      { model: 'Grove RT890E', tonnage: '90 Ton', quantity: 20, manual: '/manuals/grove-rt890e.pdf' },
    ]
  },
  {
    category: 'Crawler Cranes',
    description: 'Crawler cranes untuk proyek konstruksi heavy duty',
    equipment: [
      { model: 'Liebherr LR1750', tonnage: '750 Ton', quantity: 4, manual: '/manuals/liebherr-lr1750.pdf' },
      { model: 'Kobelco CKE2500G', tonnage: '250 Ton', quantity: 6, manual: '/manuals/kobelco-cke2500g.pdf' },
      { model: 'Hitachi KH700-3', tonnage: '70 Ton', quantity: 10, manual: '/manuals/hitachi-kh700.pdf' },
    ]
  },
  {
    category: 'Lowbed Trucks',
    description: 'Specialized lowbed trucks untuk heavy equipment transportation',
    equipment: [
      { model: 'Goldhofer STHP/XLE', tonnage: '150 Ton', quantity: 25, manual: '/manuals/goldhofer-sthp.pdf' },
      { model: 'Nicholas MFGD', tonnage: '100 Ton', quantity: 30, manual: '/manuals/nicholas-mfgd.pdf' },
      { model: 'Faymonville MegaMAX', tonnage: '80 Ton', quantity: 35, manual: '/manuals/faymonville-megamax.pdf' },
    ]
  },
  {
    category: 'Bulldozers',
    description: 'Heavy duty bulldozers untuk earthwork dan land clearing',
    equipment: [
      { model: 'Caterpillar D11T', tonnage: '104 Ton', quantity: 8, manual: '/manuals/cat-d11t.pdf' },
      { model: 'Caterpillar D9T', tonnage: '48 Ton', quantity: 12, manual: '/manuals/cat-d9t.pdf' },
      { model: 'Komatsu D375A-8', tonnage: '78 Ton', quantity: 10, manual: '/manuals/komatsu-d375a.pdf' },
    ]
  },
  {
    category: 'Excavators',
    description: 'Heavy excavators untuk mining dan construction projects',
    equipment: [
      { model: 'Caterpillar 390F L', tonnage: '90 Ton', quantity: 15, manual: '/manuals/cat-390fl.pdf' },
      { model: 'Komatsu PC800LC-8', tonnage: '80 Ton', quantity: 18, manual: '/manuals/komatsu-pc800lc.pdf' },
      { model: 'Hitachi ZX870LCH-6', tonnage: '87 Ton', quantity: 12, manual: '/manuals/hitachi-zx870lch.pdf' },
    ]
  },
  {
    category: 'Specialized Equipment',
    description: 'Specialized heavy equipment untuk aplikasi khusus',
    equipment: [
      { model: 'Manitowoc 31000', tonnage: '2300 Ton', quantity: 2, manual: '/manuals/manitowoc-31000.pdf' },
      { model: 'Demag CC8800-1', tonnage: '1600 Ton', quantity: 3, manual: '/manuals/demag-cc8800.pdf' },
      { model: 'SPMT Self-Propelled', tonnage: '500 Ton', quantity: 20, manual: '/manuals/spmt-self-propelled.pdf' },
    ]
  }
];

export default function FleetPage() {
  const totalEquipment = EQUIPMENT_CATEGORIES.reduce((total, category) => 
    total + category.equipment.reduce((catTotal, eq) => catTotal + eq.quantity, 0), 0
  );

  return (
    <>
      <Head>
        <title>Fleet / Equipment - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content="Fleet heavy equipment terlengkap PT. Mitra Kawan Bersama dengan 200+ unit cranes, lowbed trucks, bulldozers, excavators dan specialized equipment."
        />
      </Head>
      
      <FleetWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>Fleet / Equipment</OverTitle>
            <SectionTitle>Heavy Equipment Terlengkap di Indonesia</SectionTitle>
            <Description>
              PT. Mitra Kawan Bersama memiliki fleet heavy equipment terlengkap dengan {totalEquipment}+ unit 
              dari berbagai kategori dan kapasitas. Semua equipment terawat dengan baik dan siap mendukung 
              proyek konstruksi dan infrastruktur Anda.
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title="Fleet Overview" 
          overTitle="Our Fleet"
        >
          <FleetStats>
            <StatItem>
              <StatNumber>{totalEquipment}+</StatNumber>
              <StatLabel>Total Units</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{EQUIPMENT_CATEGORIES.length}</StatNumber>
              <StatLabel>Categories</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2300</StatNumber>
              <StatLabel>Max Tonnage</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support</StatLabel>
            </StatItem>
          </FleetStats>
        </BasicSection>

        <Container>
          <EquipmentSection>
            <OverTitle>Equipment Categories</OverTitle>
            <SectionTitle>Kategorized Heavy Equipment</SectionTitle>
            
            {EQUIPMENT_CATEGORIES.map((category, idx) => (
              <CategoryCard key={category.category}>
                <CategoryHeader>
                  <CategoryTitle>{category.category}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CategoryHeader>
                
                <EquipmentGrid>
                  {category.equipment.map((equipment, equipIdx) => (
                    <EquipmentCard key={equipment.model}>
                      <EquipmentInfo>
                        <EquipmentModel>{equipment.model}</EquipmentModel>
                        <EquipmentSpecs>
                          <SpecItem>
                            <SpecLabel>Capacity:</SpecLabel>
                            <SpecValue>{equipment.tonnage}</SpecValue>
                          </SpecItem>
                          <SpecItem>
                            <SpecLabel>Available:</SpecLabel>
                            <SpecValue>{equipment.quantity} units</SpecValue>
                          </SpecItem>
                        </EquipmentSpecs>
                      </EquipmentInfo>
                      <DownloadButton href={equipment.manual} target="_blank" rel="noopener noreferrer">
                        📄 Download Manual
                      </DownloadButton>
                    </EquipmentCard>
                  ))}
                </EquipmentGrid>
              </CategoryCard>
            ))}
          </EquipmentSection>

          <CTASection>
            <OverTitle>Need Our Equipment?</OverTitle>
            <SectionTitle>Ready to Support Your Project</SectionTitle>
            <CTADescription>
              Semua equipment kami tersedia untuk rental dengan operator berpengalaman dan dukungan 
              maintenance 24/7. Hubungi tim kami untuk konsultasi kebutuhan proyek Anda.
            </CTADescription>
            <ContactButton href="/contact">
              Hubungi Kami Sekarang
            </ContactButton>
          </CTASection>
        </Container>
      </FleetWrapper>
    </>
  );
}

const FleetWrapper = styled.div`
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

const FleetStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--cardBackground);
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.4rem;
  color: var(--text-secondary);
`;

const EquipmentSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const CategoryCard = styled.div`
  background: var(--cardBackground);
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const CategoryDescription = styled.p`
  font-size: 1.6rem;
  color: var(--text-secondary);
  margin-bottom: 0;
`;

const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const EquipmentCard = styled.div`
  background: rgb(var(--background));
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const EquipmentInfo = styled.div`
  flex: 1;
`;

const EquipmentModel = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const EquipmentSpecs = styled.div`
  margin-bottom: 1.5rem;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SpecLabel = styled.span`
  color: var(--text-secondary);
  font-size: 1.4rem;
`;

const SpecValue = styled.span`
  font-weight: bold;
  color: rgb(var(--text));
  font-size: 1.4rem;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: rgba(var(--primary), 0.8);
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

const ContactButton = styled.a`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 0.8rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: rgba(var(--primary), 0.8);
  }
`;
