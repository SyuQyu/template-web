import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

const EQUIPMENT_CATEGORIES = [
  {
    category: 'Mobile Cranes',
    description: 'All Terrain dan Rough Terrain mobile cranes untuk berbagai aplikasi lifting',
    equipment: [
      { model: 'Tadano ATF130G-5', tonnage: '130 Ton', quantity: 5, manual: '/manuals/tadano-atf130g.pdf', status: 'Available' },
      { model: 'Grove GMK5220', tonnage: '220 Ton', quantity: 3, manual: '/manuals/grove-gmk5220.pdf', status: 'Available' },
      { model: 'Liebherr LTM1100-5.2', tonnage: '100 Ton', quantity: 8, manual: '/manuals/liebherr-ltm1100.pdf', status: 'Available' },
      { model: 'Kato NK-500E-V', tonnage: '50 Ton', quantity: 12, manual: '/manuals/kato-nk500e.pdf', status: 'Available' },
      { model: 'Grove RT890E', tonnage: '90 Ton', quantity: 6, manual: '/manuals/grove-rt890e.pdf', status: 'Available' },
    ]
  },
  {
    category: 'Crawler Cranes',
    description: 'Heavy duty crawler cranes untuk proyek konstruksi dan heavy lifting',
    equipment: [
      { model: 'Liebherr LR1750/2', tonnage: '750 Ton', quantity: 2, manual: '/manuals/liebherr-lr1750.pdf', status: 'Available' },
      { model: 'Manitowoc 18000', tonnage: '680 Ton', quantity: 1, manual: '/manuals/manitowoc-18000.pdf', status: 'Available' },
      { model: 'Kobelco CKE2500G', tonnage: '250 Ton', quantity: 4, manual: '/manuals/kobelco-cke2500g.pdf', status: 'Available' },
      { model: 'Hitachi KH700-3', tonnage: '70 Ton', quantity: 6, manual: '/manuals/hitachi-kh700.pdf', status: 'Available' },
      { model: 'Sany SCC8500', tonnage: '550 Ton', quantity: 2, manual: '/manuals/sany-scc8500.pdf', status: 'Available' },
    ]
  },
  {
    category: 'Lowbed Trucks',
    description: 'Specialized lowbed dan heavy haul trucks untuk equipment transportation',
    equipment: [
      { model: 'Goldhofer STHP/XLE 4-8-12', tonnage: '150 Ton', quantity: 15, manual: '/manuals/goldhofer-sthp.pdf', status: 'Available' },
      { model: 'Faymonville MegaMAX', tonnage: '120 Ton', quantity: 20, manual: '/manuals/faymonville-megamax.pdf', status: 'Available' },
      { model: 'Nicolas MFGD 9-12', tonnage: '200 Ton', quantity: 8, manual: '/manuals/nicolas-mfgd.pdf', status: 'Available' },
      { model: 'Hino FM 260 JW', tonnage: '40 Ton', quantity: 25, manual: '/manuals/hino-fm260.pdf', status: 'Available' },
    ]
  },
  {
    category: 'Bulldozers',
    description: 'Heavy duty bulldozers untuk earthwork, land clearing dan site preparation',
    equipment: [
      { model: 'Caterpillar D9T', tonnage: '48 Ton', quantity: 8, manual: '/manuals/cat-d9t.pdf', status: 'Available' },
      { model: 'Caterpillar D8T', tonnage: '36 Ton', quantity: 10, manual: '/manuals/cat-d8t.pdf', status: 'Available' },
      { model: 'Komatsu D375A-8', tonnage: '78 Ton', quantity: 4, manual: '/manuals/komatsu-d375a.pdf', status: 'Available' },
      { model: 'Caterpillar D6R', tonnage: '18 Ton', quantity: 12, manual: '/manuals/cat-d6r.pdf', status: 'Available' },
    ]
  },
  {
    category: 'Excavators',
    description: 'Heavy excavators untuk mining, construction dan material handling',
    equipment: [
      { model: 'Caterpillar 390F L', tonnage: '90 Ton', quantity: 8, manual: '/manuals/cat-390fl.pdf', status: 'Available' },
      { model: 'Komatsu PC800LC-8', tonnage: '80 Ton', quantity: 6, manual: '/manuals/komatsu-pc800lc.pdf', status: 'Available' },
      { model: 'Hitachi ZX870LCH-6', tonnage: '87 Ton', quantity: 5, manual: '/manuals/hitachi-zx870lch.pdf', status: 'Available' },
      { model: 'Caterpillar 320D', tonnage: '20 Ton', quantity: 15, manual: '/manuals/cat-320d.pdf', status: 'Available' },
      { model: 'Komatsu PC200', tonnage: '20 Ton', quantity: 12, manual: '/manuals/komatsu-pc200.pdf', status: 'Available' },
    ]
  },
  {
    category: 'Specialized Equipment',
    description: 'Specialized heavy equipment untuk aplikasi khusus dan super heavy lifting',
    equipment: [
      { model: 'SPMT Self-Propelled 24 Axle', tonnage: '600 Ton', quantity: 4, manual: '/manuals/spmt-24axle.pdf', status: 'Available' },
      { model: 'Hydraulic Gantry 500T', tonnage: '500 Ton', quantity: 2, manual: '/manuals/hydraulic-gantry-500t.pdf', status: 'Available' },
      { model: 'Strand Jack System', tonnage: '300 Ton', quantity: 8, manual: '/manuals/strand-jack-300t.pdf', status: 'Available' },
      { model: 'Rigging Equipment Set', tonnage: '200 Ton', quantity: 20, manual: '/manuals/rigging-equipment.pdf', status: 'Available' },
    ]
  }
];

export default function FleetPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCategories = EQUIPMENT_CATEGORIES.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.category === selectedCategory;
  }).filter(category => {
    if (!searchTerm) return true;
    return category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
           category.equipment.some(eq => eq.model.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  
  const totalEquipment = EQUIPMENT_CATEGORIES.reduce((total, category) => 
    total + category.equipment.reduce((catTotal, eq) => catTotal + eq.quantity, 0), 0
  );

  const maxTonnage = Math.max(...EQUIPMENT_CATEGORIES.flatMap(cat => 
    cat.equipment.map(eq => parseInt(eq.tonnage))
  ));

  return (
    <>
      <Head>
        <title>{t('fleet.title')} - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content={t('fleet.subtitle')}
        />
      </Head>
      
      <FleetWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('fleet.title')}</OverTitle>
            <SectionTitle>Heavy Equipment Fleet Terlengkap</SectionTitle>
            <Description>
              {t('fleet.subtitle')}
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
              <StatNumber>{maxTonnage}</StatNumber>
              <StatLabel>Max Tonnage</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support</StatLabel>
            </StatItem>
          </FleetStats>
        </BasicSection>

        <Container>
          <FilterSection>
            <FilterContainer>
              <SearchBox>
                <SearchInput
                  type="text"
                  placeholder="🔍 Search equipment or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchBox>
              <CategoryFilter>
                <FilterButton 
                  active={selectedCategory === 'all'} 
                  onClick={() => setSelectedCategory('all')}
                >
                  All Categories
                </FilterButton>
                {EQUIPMENT_CATEGORIES.map((category) => (
                  <FilterButton
                    key={category.category}
                    active={selectedCategory === category.category}
                    onClick={() => setSelectedCategory(category.category)}
                  >
                    {category.category}
                  </FilterButton>
                ))}
              </CategoryFilter>
            </FilterContainer>
          </FilterSection>

          <EquipmentSection>
            <OverTitle>Equipment Categories</OverTitle>
            <SectionTitle>Heavy Equipment by Category</SectionTitle>
            
            {filteredCategories.map((category, idx) => (
              <CategoryCard key={category.category}>
                <CategoryHeader>
                  <CategoryTitle>{category.category}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                  <CategoryStats>
                    <CategoryStat>
                      {category.equipment.reduce((sum, eq) => sum + eq.quantity, 0)} Units Available
                    </CategoryStat>
                  </CategoryStats>
                </CategoryHeader>
                
                <EquipmentGrid>
                  {category.equipment.map((equipment, equipIdx) => (
                    <EquipmentCard key={equipment.model}>
                      <EquipmentHeader>
                        <StatusIndicator status={equipment.status}>
                          {equipment.status}
                        </StatusIndicator>
                      </EquipmentHeader>
                      <EquipmentInfo>
                        <EquipmentModel>{equipment.model}</EquipmentModel>
                        <EquipmentSpecs>
                          <SpecItem>
                            <SpecLabel>💪 Capacity:</SpecLabel>
                            <SpecValue>{equipment.tonnage}</SpecValue>
                          </SpecItem>
                          <SpecItem>
                            <SpecLabel>📦 Available:</SpecLabel>
                            <SpecValue>{equipment.quantity} units</SpecValue>
                          </SpecItem>
                          <SpecItem>
                            <SpecLabel>🔧 Status:</SpecLabel>
                            <SpecValue className={equipment.status.toLowerCase()}>
                              {equipment.status}
                            </SpecValue>
                          </SpecItem>
                        </EquipmentSpecs>
                      </EquipmentInfo>
                      <EquipmentActions>
                        <DownloadButton href={equipment.manual} target="_blank" rel="noopener noreferrer">
                          📄 Download Manual
                        </DownloadButton>
                        <ContactButton href="/contact">
                          📞 Request Quote
                        </ContactButton>
                      </EquipmentActions>
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
            <CTAActions>
              <ContactButton href="/contact" primary>
                🚀 Get Quote Now
              </ContactButton>
              <ContactButton href="/projects">
                📋 View Projects
              </ContactButton>
            </CTAActions>
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
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
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

const FilterSection = styled.div`
  margin: 4rem 0;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  
  ${media('<=tablet')} {
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 2rem;
  border: 2px solid var(--border);
  border-radius: 2rem;
  font-size: 1.6rem;
  background: var(--cardBackground);
  color: var(--text);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  ${media('<=tablet')} {
    justify-content: flex-start;
  }
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: 1rem 2rem;
  border: 2px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 2rem;
  background: ${props => props.active ? 'var(--primary)' : 'var(--cardBackground)'};
  color: ${props => props.active ? 'white' : 'var(--text)'};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`;

const EquipmentSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const CategoryCard = styled.div`
  background: var(--cardBackground);
  border-radius: 1.5rem;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
  font-weight: bold;
`;

const CategoryDescription = styled.p`
  font-size: 1.6rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const CategoryStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const CategoryStat = styled.span`
  background: var(--primary);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const EquipmentCard = styled.div`
  background: rgb(var(--background));
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: all 0.3s ease;
  border: 2px solid var(--border);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }
`;

const EquipmentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const StatusIndicator = styled.span<{ status: string }>`
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${props => 
    props.status === 'Available' ? '#10b981' : 
    props.status === 'Rented' ? '#f59e0b' : '#ef4444'
  };
  color: white;
`;

const EquipmentInfo = styled.div`
  flex: 1;
`;

const EquipmentModel = styled.h4`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  font-weight: bold;
`;

const EquipmentSpecs = styled.div`
  margin-bottom: 2rem;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
`;

const SpecLabel = styled.span`
  color: var(--text-secondary);
  font-size: 1.4rem;
  font-weight: 500;
`;

const SpecValue = styled.span`
  font-weight: bold;
  color: rgb(var(--text));
  font-size: 1.4rem;
  
  &.available {
    color: #10b981;
  }
  
  &.rented {
    color: #f59e0b;
  }
  
  &.maintenance {
    color: #ef4444;
  }
`;

const EquipmentActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(var(--primaryRgb), 0.8);
    transform: translateY(-2px);
  }
`;

const ContactButton = styled.a<{ primary?: boolean }>`
  display: inline-block;
  background: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary)'};
  border: 2px solid var(--primary);
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin: 8rem 0;
  padding: 5rem;
  background: linear-gradient(135deg, var(--cardBackground) 0%, rgba(var(--primaryRgb), 0.05) 100%);
  border-radius: 2rem;
  border: 2px solid var(--border);
`;

const CTADescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 2rem 0 3rem;
  color: var(--text-secondary);
`;

const CTAActions = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  
  ${media('<=tablet')} {
    flex-direction: column;
    align-items: center;
  }
`;