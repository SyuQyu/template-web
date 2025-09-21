import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

const PROJECT_CASES = [
  {
    id: 1,
    title: 'LNG Plant Construction - Tangguh Papua',
    client: 'BP Indonesia',
    year: '2023',
    location: 'Teluk Bintuni, Papua Barat',
    description: 'Heavy lift operations untuk LNG plant expansion menggunakan crawler cranes hingga 750 ton capacity',
    equipment: ['Liebherr LR1750 (750T)', 'Grove GMK5250L (250T)', 'Goldhofer STHP Lowbed'],
    duration: '18 months',
    value: 'USD 45 Million',
    image: '/demo-illustration-1.svg',
    testimonial: {
      text: 'PT. MKB memberikan service yang exceptional untuk project LNG expansion kami. Equipment quality dan operator expertise sangat memuaskan.',
      author: 'John Anderson',
      position: 'Project Manager, BP Indonesia'
    }
  },
  {
    id: 2,
    title: 'Power Plant Construction - PLTU Jawa-7',
    client: 'PT. PLN (Persero)',
    year: '2023',
    location: 'Serang, Banten',
    description: 'Rig move dan heavy equipment support untuk pembangunan power plant 1000 MW',
    equipment: ['Manitowoc 31000 (2300T)', 'Demag CC8800-1 (1600T)', 'SPMT Self-Propelled'],
    duration: '24 months',
    value: 'USD 38 Million',
    image: '/demo-illustration-2.svg',
    testimonial: {
      text: 'Kerjasama dengan MKB sangat profesional. Schedule delivery tepat waktu dan zero accident record.',
      author: 'Ir. Bambang Sutrisno',
      position: 'Construction Manager, PLN'
    }
  },
  {
    id: 3,
    title: 'Oil Refinery Expansion - Kilang Cilacap',
    client: 'PT. Pertamina (Persero)',
    year: '2022',
    location: 'Cilacap, Jawa Tengah',
    description: 'Equipment rental dan maintenance support untuk refinery capacity expansion project',
    equipment: ['Mobile Cranes 90-250T', 'Bulldozers D11T', 'Lowbed Trucks'],
    duration: '36 months',
    value: 'USD 52 Million',
    image: '/demo-illustration-3.png',
    testimonial: {
      text: 'MKB telah menjadi partner strategis kami dalam multiple projects. Reliability dan service quality yang konsisten.',
      author: 'Drs. Ahmad Mulyadi',
      position: 'Project Director, Pertamina'
    }
  },
  {
    id: 4,
    title: 'Petrochemical Complex - Balongan Refinery',
    client: 'PT. Pertamina RU VI',
    year: '2022',
    location: 'Indramayu, Jawa Barat',
    description: 'Heavy lift dan transportation untuk petrochemical plant construction',
    equipment: ['Crawler Cranes 250-750T', 'Specialized Trailers', 'Mobile Cranes'],
    duration: '30 months',
    value: 'USD 41 Million',
    image: '/demo-illustration-4.png',
    testimonial: {
      text: 'Outstanding performance dari team MKB. Project completion on schedule dengan quality yang excellent.',
      author: 'Ing. Sari Dewi',
      position: 'Operations Manager, Pertamina RU VI'
    }
  }
];

const STATISTICS = [
  { number: '150+', label: 'Completed Projects' },
  { number: '50+', label: 'Major Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '99.8%', label: 'Safety Record' }
];

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Head>
        <title>{language === 'id' ? 'Portfolio Proyek Heavy Equipment | Oil & Gas, Mining, Power Plant | PT. Mitra Kawan Bersama' : 'Major Projects Portfolio | Oil & Gas, Mining, Power Plant | PT. Mitra Kawan Bersama'}</title>
        <meta
          name="description"
          content={language === 'id' ? '150+ proyek heavy equipment berhasil diselesaikan di seluruh Indonesia. Klien utama: BP Indonesia, Pertamina, PLN, Freeport. LNG plant, power plant, operasi mining, oil refinery. Lihat track record & case studies kami.' : '150+ successfully completed heavy equipment projects across Indonesia. Major clients: BP Indonesia, Pertamina, PLN, Freeport. LNG plants, power plants, mining operations, oil refineries. View our proven track record & case studies.'}
        />
        <meta name="keywords" content={language === 'id' ? 'proyek heavy equipment indonesia, konstruksi lng plant, proyek power plant, ekspansi oil refinery, operasi mining, proyek pertamina, bp indonesia, proyek pln, case studies konstruksi' : 'heavy equipment projects indonesia, lng plant construction, power plant projects, oil refinery expansion, mining operations, pertamina projects, bp indonesia, pln projects, construction case studies'} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={language === 'id' ? 'Portfolio Proyek Heavy Equipment | Oil & Gas, Mining, Power Plant | PT. MKB' : 'Major Projects Portfolio | Oil & Gas, Mining, Power Plant | PT. MKB'} />
        <meta property="og:description" content={language === 'id' ? '150+ proyek heavy equipment berhasil diselesaikan. Klien utama: BP Indonesia, Pertamina, PLN, Freeport. Lihat proven track record kami.' : '150+ successfully completed heavy equipment projects. Major clients: BP Indonesia, Pertamina, PLN, Freeport. View our proven track record.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitrakawanbersama.co.id/projects" />
        <meta property="og:image" content="https://mitrakawanbersama.co.id/demo-illustration-3.png" />
        <meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
        <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Major Projects Portfolio | PT. Mitra Kawan Bersama" />
        <meta name="twitter:description" content="150+ completed projects for BP Indonesia, Pertamina, PLN, Freeport. Proven track record in heavy equipment operations." />
        <meta name="twitter:image" content="https://mkb.co.id/demo-illustration-3.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT. Mitra Kawan Bersama" />
        <link rel="canonical" href="https://mkb.co.id/projects" />
        
        {/* Structured Data - Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Heavy Equipment Projects Portfolio",
              "description": "Portfolio of major heavy equipment rental projects including LNG plants, power plants, oil refineries, and mining operations across Indonesia.",
              "creator": {
                "@type": "Organization",
                "name": "PT. Mitra Kawan Bersama"
              },
              "url": "https://mkb.co.id/projects",
              "workExample": [
                {
                  "@type": "CreativeWork",
                  "name": "LNG Plant Construction - Tangguh Papua",
                  "client": "BP Indonesia", 
                  "description": "Heavy lift operations using 750-ton crawler cranes for LNG plant expansion",
                  "dateCompleted": "2023"
                },
                {
                  "@type": "CreativeWork", 
                  "name": "Power Plant Construction - PLTU Jawa-7",
                  "client": "PT. PLN (Persero)",
                  "description": "Equipment rental and rig move support for 1000 MW power plant construction",
                  "dateCompleted": "2023"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Oil Refinery Expansion - Kilang Cilacap", 
                  "client": "PT. Pertamina (Persero)",
                  "description": "Heavy equipment rental and maintenance support for refinery capacity expansion",
                  "dateCompleted": "2022"
                }
              ]
            })
          }}
        />
      </Head>
      
      <ProjectsWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>{t('projects.page.title')}</OverTitle>
            <SectionTitle>Proven Excellence in Major Projects</SectionTitle>
            <Description>
              {t('projects.page.subtitle')}
            </Description>
          </HeaderSection>
        </Container>

        <BasicSection 
          imageUrl="/demo-illustration-1.svg" 
          title="Project Statistics" 
          overTitle="Our Achievement"
        >
          <StatsGrid>
            {STATISTICS.map((stat, idx) => (
              <StatCard key={idx}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </BasicSection>

        <Container>
          <ProjectsSection>
            <OverTitle>Featured Projects</OverTitle>
            <SectionTitle>Major Project Cases</SectionTitle>
            
            {PROJECT_CASES.map((project, idx) => (
              <ProjectCard key={project.id} reverse={idx % 2 === 1}>
                <ProjectImageWrapper reverse={idx % 2 === 1}>
                  <ProjectImage src={project.image} alt={project.title} />
                </ProjectImageWrapper>
                
                <ProjectContent reverse={idx % 2 === 1}>
                  <ProjectHeader>
                    <ProjectMeta>
                      <MetaItem>
                        <MetaLabel>Client:</MetaLabel>
                        <MetaValue>{project.client}</MetaValue>
                      </MetaItem>
                      <MetaItem>
                        <MetaLabel>Year:</MetaLabel>
                        <MetaValue>{project.year}</MetaValue>
                      </MetaItem>
                      <MetaItem>
                        <MetaLabel>Location:</MetaLabel>
                        <MetaValue>{project.location}</MetaValue>
                      </MetaItem>
                    </ProjectMeta>
                    
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                  </ProjectHeader>
                  
                  <ProjectDetails>
                    <DetailSection>
                      <DetailTitle>Equipment Used:</DetailTitle>
                      <EquipmentList>
                        {project.equipment.map((eq, eqIdx) => (
                          <EquipmentItem key={eqIdx}>{eq}</EquipmentItem>
                        ))}
                      </EquipmentList>
                    </DetailSection>
                    
                    <ProjectMetrics>
                      <MetricItem>
                        <MetricLabel>Duration:</MetricLabel>
                        <MetricValue>{project.duration}</MetricValue>
                      </MetricItem>
                      <MetricItem>
                        <MetricLabel>Project Value:</MetricLabel>
                        <MetricValue>{project.value}</MetricValue>
                      </MetricItem>
                    </ProjectMetrics>
                  </ProjectDetails>
                  
                  <TestimonialSection>
                    <TestimonialText>&ldquo;{project.testimonial.text}&rdquo;</TestimonialText>
                    <TestimonialAuthor>
                      <AuthorName>{project.testimonial.author}</AuthorName>
                      <AuthorPosition>{project.testimonial.position}</AuthorPosition>
                    </TestimonialAuthor>
                  </TestimonialSection>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsSection>

          <ClientsSection>
            <OverTitle>Our Clients</OverTitle>
            <SectionTitle>Trusted by Industry Leaders</SectionTitle>
            
            <ClientsGrid>
              <ClientLogo>
                <img src="/partners/gdap.png" alt="BP Indonesia" />
              </ClientLogo>
            </ClientsGrid>
          </ClientsSection>
        </Container>
      </ProjectsWrapper>
    </>
  );
}

const ProjectsWrapper = styled.div`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: rgb(var(--cardBackground));;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const StatLabel = styled.div`
  font-size: 1.6rem;
  color: var(--text-secondary);
`;

const ProjectsSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ProjectCard = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: 4rem;
  align-items: center;
  margin: 6rem 0;
  padding: 4rem;
  background: rgb(var(--cardBackground));;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 2rem;
  }
`;

const ProjectImageWrapper = styled.div<{ reverse?: boolean }>`
  ${media('<=tablet')} {
    order: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.8rem;
`;

const ProjectContent = styled.div<{ reverse?: boolean }>`
  text-align: left;
  
  ${media('<=tablet')} {
    order: 2;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MetaLabel = styled.span`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.4rem;
`;

const MetaValue = styled.span`
  color: var(--text-secondary);
  font-size: 1.4rem;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: rgb(var(--text));
`;

const ProjectDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const ProjectDetails = styled.div`
  margin: 2rem 0;
`;

const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

const DetailTitle = styled.h4`
  font-size: 1.6rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const EquipmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const EquipmentItem = styled.span`
  background: var(--tertiary);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: var(--primary);
`;

const ProjectMetrics = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const MetricItem = styled.div``;

const MetricLabel = styled.div`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.div`
  font-size: 1.6rem;
  color: rgb(var(--text));
  font-weight: bold;
`;

const TestimonialSection = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: var(--tertiary);
  border-radius: 0.8rem;
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const TestimonialAuthor = styled.div``;

const AuthorName = styled.div`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.4rem;
`;

const AuthorPosition = styled.div`
  font-size: 1.3rem;
  color: var(--text-secondary);
`;

const ClientsSection = styled.div`
  text-align: center;
  margin: 8rem 0;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const ClientLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgb(var(--cardBackground));;
  border-radius: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

const ClientName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(var(--text));
  text-align: center;
`;
