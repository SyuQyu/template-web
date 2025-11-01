// ...existing imports...


import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import BasicSection4 from 'components/BasicSection4';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin: 3rem 0 0 0;
	padding: 0;
	font-size: 1.5rem;
	color: var(--text-secondary);
	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const ProjectGridItem = styled.div`
	background: rgb(var(--cardBackground));
	border-radius: 0.8rem;
	padding: 1.5rem;
	box-shadow: 0 2px 8px rgba(0,0,0,0.07);
	text-align: center;
	font-size: 1.4rem;
	line-height: 1.5;
	transition: transform 0.25s cubic-bezier(.4,2,.3,1), box-shadow 0.25s cubic-bezier(.4,2,.3,1);
	cursor: pointer;
	&:hover {
		transform: translateY(-6px) scale(1.03);
		box-shadow: 0 8px 24px rgba(0,0,0,0.12);
		background: rgb(var(--cardBackground), 0.98);
	}
`;


const MAJOR_CLIENTS = [
	{ name: 'Great Wall Drilling Asia', logo: '/partners/gdap.png' }
];

export default function ClientsAchievementsPage() {
	const { t, language } = useLanguage();

	const metaTitle = t('clients.meta.title');
	const metaDescription = t('clients.meta.description');
	const metaKeywords = t('clients.meta.keywords');
	const metaOgTitle = t('clients.meta.ogTitle');
	const metaOgDescription = t('clients.meta.ogDescription');
	const metaTwitterTitle = t('clients.meta.twitterTitle');
	const metaTwitterDescription = t('clients.meta.twitterDescription');
	const headerOverTitle = t('clients.header.overtitle');
	const headerTitle = t('clients.header.title');
	const headerDescription = t('clients.header.description');
	const projectItems = t('clients.projects.items').split('|');
	const projectsOverTitle = t('clients.projects.overtitle');
	const projectsTitle = t('clients.projects.title');
	const clientsOverTitle = t('clients.clients.overtitle');
	const clientsTitle = t('clients.clients.title');

	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta
					name="description"
					content={metaDescription}
				/>
				<meta
					name="keywords"
					content={metaKeywords}
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content={metaOgTitle}
				/>
				<meta
					property="og:description"
					content={metaOgDescription}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://mitrakawanbersama.co.id/clients" />
				<meta
					property="og:image"
					content="https://mitrakawanbersama.co.id/demo-illustration-1.svg"
				/>
				<meta property="og:site_name" content="PT. Mitra Kawan Bersama" />
				<meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />

				{/* Twitter Card Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metaTwitterTitle} />
				<meta name="twitter:description" content={metaTwitterDescription} />
				<meta name="twitter:image" content="https://mkb.co.id/demo-illustration-1.svg" />

				{/* Additional SEO Meta Tags */}
				<meta name="robots" content="index, follow" />
				<meta name="author" content="PT. Mitra Kawan Bersama" />
				<link rel="canonical" href="https://mkb.co.id/clients" />

				{/* Structured Data - Organization */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'PT. Mitra Kawan Bersama',
							description:
								'Leading heavy equipment rental company serving major clients in Oil & Gas, Power Generation, and Mining sectors across Indonesia.',
							url: 'https://mkb.co.id',
							foundingDate: '2009',
							numberOfEmployees: '500+',
							industry: 'Heavy Equipment Rental',
							serviceArea: {
								'@type': 'Place',
								name: 'Indonesia',
							},
							award: [
								'99.8% Safety Record',
								'15+ Years Experience',
								'50+ Satisfied Clients',
								'USD 500M+ Total Project Value',
							],
							client: [
								'BP Indonesia',
								'PT. Pertamina (Persero)',
								'PT. PLN (Persero)',
								'PT. Freeport Indonesia',
							],
						}),
					}}
				/>
			</Head>

			<ClientsWrapper>
				<Container>
					<HeaderSection>
						<OverTitle>{headerOverTitle}</OverTitle>
						<SectionTitle>{headerTitle}</SectionTitle>
						<Description>{headerDescription}</Description>
					</HeaderSection>
				</Container>

				<BasicSection4 
					imageUrl="/Iso/iso-1.jpg" 
					title={t('certification.iso9001.title')}
					>
					<ServiceDescription>
						<h4>{t('certification.iso9001.title')}</h4>
						<ServiceList>
							<li>{t('certification.iso9001.desc')}</li>
						</ServiceList>
					</ServiceDescription>
				</BasicSection4>				

				<BasicSection4 
					imageUrl="/Iso/iso-2.jpg" 
					title={t('certification.iso14001.title')}
					reversed 
					>
					<ServiceDescription>
						<h4>{t('certification.iso14001.title')}</h4>
						<ServiceList>
							<li>{t('certification.iso14001.desc')}</li>
						</ServiceList>
					</ServiceDescription>
				</BasicSection4>	

				<BasicSection4 
					imageUrl="/Iso/iso-3.jpg" 
					title={t('certification.iso45001.title')}
					>
					<ServiceDescription>
						<h4>{t('certification.iso45001.title')}</h4>
						<ServiceList>
							<li>{t('certification.iso45001.desc')}</li>
						</ServiceList>
					</ServiceDescription>
				</BasicSection4>

						<Container>
						  <AdditionalServicesSection>
							<SectionTitle>{t('services.achievment.title')}</SectionTitle>
							<ServicesGrid>
							  <ServiceCard>
								<ServiceDetails>
								  <p>{t('services.achievment.desc')}</p>
								</ServiceDetails>
							  </ServiceCard>
							</ServicesGrid>
						  </AdditionalServicesSection>
						</Container>

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
							  <p>{t('services.manpowerachivement.desc')}</p>
							  <p>{t('services.manpowerachivement.scopeTitle')}</p>
							  <BulletList>
								<li>{t('services.manpowerachivement.item1')}</li>
								<li>{t('services.manpowerachivement.item2')}</li>
								<li>{t('services.manpowerachivement.item3')}</li>
							  </BulletList>
							</SectionBlock>
						  </ServiceDescription>
						</BasicSection>
				<Container>

					<ClientsSection>
						<OverTitle>{projectsOverTitle}</OverTitle>
						<SectionTitle>{projectsTitle}</SectionTitle>
						<ProjectsGrid>
							{projectItems.map((project, idx) => (
								<ProjectGridItem key={idx}>{project.trim()}</ProjectGridItem>
							))}
						</ProjectsGrid>
					</ClientsSection>

					<ClientLogosSection>
						<OverTitle>{clientsOverTitle}</OverTitle>
						<SectionTitle>{clientsTitle}</SectionTitle>

						<ClientsGrid>
							{MAJOR_CLIENTS.map((client, idx) => (
								<ClientLogo key={idx}>
									<img src={client.logo} alt={client.name} />
									<ClientName>{client.name}</ClientName>
									{/* <ClientSector>{client.sector}</ClientSector> */}
								</ClientLogo>
							))}
						</ClientsGrid>
					</ClientLogosSection>
				</Container>

						<CoreStrengthsSection>
						  <Container>
							<SectionHeader>
							  <OverTitle>{t('strengths.overtitle')}</OverTitle>
							  <SectionTitle>{t('strengths.title')}</SectionTitle>
							</SectionHeader>
							<StrengthsGrid>
							  <StrengthCard>
								<StrengthIcon>🌍</StrengthIcon>
								<StrengthTitle>{t('strengths.experience.title')}</StrengthTitle>
								<StrengthDescription>
								  {t('strengthsachievment.experience.desc')}
								</StrengthDescription>
							  </StrengthCard>
							  
							  <StrengthCard>
								<StrengthIcon>👷‍♂️</StrengthIcon>
								<StrengthTitle>{t('strengthsachievment.fleet.title')}</StrengthTitle>
								<StrengthDescription>
								  {t('strengthsachievment.fleet.desc')}
								</StrengthDescription>
							  </StrengthCard>
							  
							  <StrengthCard>
								<StrengthIcon>🛡️</StrengthIcon>
								<StrengthTitle>{t('strengthsachievment.safety.title')}</StrengthTitle>
								<StrengthDescription>
								  {t('strengthsachievment.safety.desc')}
								</StrengthDescription>
							  </StrengthCard>
							  
							  <StrengthCard>
								<StrengthIcon>🚚</StrengthIcon>
								<StrengthTitle>{t('strengthsachievment.trusted.title')}</StrengthTitle>
								<StrengthDescription>
								  {t('strengthsachievment.trusted.desc')}
								</StrengthDescription>
							  </StrengthCard>
							</StrengthsGrid>
						  </Container>
						</CoreStrengthsSection>

			</ClientsWrapper>
		</>
	);
}

const ClientsWrapper = styled.div`
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
	background: rgb(var(--cardBackground));
	;
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

const ClientsSection = styled.div`
	text-align: center;
	margin: 8rem 0;
`;


const ClientLogosSection = styled.div`
	text-align: center;
	margin: 8rem 0;
`;

const ClientsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 2rem;
	margin-top: 4rem;
	font-size: 1.5rem;
	color: var(--text-secondary);
`;

const ClientLogo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	background: rgb(var(--cardBackground));
	;
	border-radius: 0.8rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-4px);
	}

	img {
		width: 120px;
		height: 120px;
		object-fit: contain;
		margin-bottom: 1rem;
	}
`;

const ClientName = styled.div`
	font-size: 1.4rem;
	font-weight: bold;
	color: rgb(var(--text));
	text-align: center;
	margin-bottom: 0.5rem;
`;

const ClientSector = styled.div`
	font-size: 1.2rem;
	color: var(--text-secondary);
	text-align: center;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  
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


const ServiceDescription = styled.div`
  h4 {
	font-size: 1.5rem;
	color: var(--primary);
  }
`;

const SectionBlock = styled.div`
  text-align: left;
  margin-top: 1.5rem;
  p {
	font-size: 1.6rem;
	line-height: 1.6;
	color: var(--text-secondary);
	margin: 0 0 1rem 0;
  }
`;

const BulletList = styled.ul`
  list-style: disc;
  padding-left: 1.8rem;
  margin-top: 0.5rem;
  li {
	margin-bottom: 0.75rem;
	font-size: 1.6rem;
	line-height: 1.5;
	color: var(--text-secondary);
  }
`;

const AdditionalServicesSection = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 80rem;
  padding: 2rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.6rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: rgb(var(--cardBackground));
  border-radius: 0.8rem;
  padding: 1.6rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
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


const CoreStrengthsSection = styled.div`
  padding: 8rem 0;
  background: rgb(var(--background));
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const StrengthCard = styled.div`
  background: var(--cardBackground);
  padding: 3rem 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const StrengthIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const StrengthTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const StrengthDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;