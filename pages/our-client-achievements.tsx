// ...existing imports...


import Head from 'next/head';
import styled from 'styled-components';
import BasicSection4 from 'components/BasicSection4';
import BasicSection from 'components/BasicSection';
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

	return (
		<>
			<Head>
				<title>
					{language === 'id'
						? 'Klien & Pencapaian | Heavy Equipment Partner Terpercaya | PT. Mitra Kawan Bersama'
						: 'Our Clients & Achievements | Trusted Heavy Equipment Partner | PT. Mitra Kawan Bersama'}
				</title>
				<meta
					name="description"
					content={
						language === 'id'
							? 'Partner terpercaya 50+ klien major: BP Indonesia, Pertamina, PLN, Freeport. pengalaman, safety record, USD 500M+ total project value. Lihat testimoni dan pencapaian kami.'
							: 'Trusted partner of 50+ major clients: BP Indonesia, Pertamina, PLN, Freeport. experience, safety record, USD 500M+ total project value. See our testimonials and achievements.'
					}
				/>
				<meta
					name="keywords"
					content={
						language === 'id'
							? 'klien heavy equipment indonesia, partner bp indonesia, klien pertamina, klien pln, klien freeport, pencapaian heavy equipment, testimoni klien, safety record, partner terpercaya'
							: 'heavy equipment clients indonesia, bp indonesia partner, pertamina client, pln client, freeport client, heavy equipment achievements, client testimonials, safety record, trusted partner'
					}
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content={
						language === 'id'
							? 'Klien & Pencapaian | Heavy Equipment Partner Terpercaya | PT. MKB'
							: 'Our Clients & Achievements | Trusted Heavy Equipment Partner | PT. MKB'
					}
				/>
				<meta
					property="og:description"
					content={
						language === 'id'
							? 'Partner terpercaya 50+ klien major. pengalaman, safety record, USD 500M+ project value.'
							: 'Trusted partner of 50+ major clients. 15+ years experience, 99.8% safety record, USD 500M+ total project value.'
					}
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
				<meta name="twitter:title" content="Our Clients & Achievements | PT. Mitra Kawan Bersama" />
				<meta name="twitter:description" content="Trusted partner of 50+ major clients including BP Indonesia, Pertamina, PLN, Freeport. 15+ years proven track record." />
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
						<OverTitle>
							{language === 'id'
								? 'Klien & Pencapaian Kami'
								: 'Our Clients & Achievements'}
						</OverTitle>
						<SectionTitle>Trusted Partnership Excellence</SectionTitle>
						<Description>
							{language === 'id'
								? 'Kami membangun kemitraan yang kuat dan berjangka panjang berdasarkan kepercayaan, keandalan, dan kinerja yang terbukti. Kolaborasi berkelanjutan kami dengan Greatwall Drilling Asia Pacific mencerminkan komitmen kami untuk memberikan kualitas yang konsisten dan layanan yang dapat diandalkan.'
								: 'We build strong, long-term partnerships based on trust, reliability, and proven performance. Our ongoing collaboration with Greatwall Drilling Asia Pacific reflects our commitment to delivering consistent quality and dependable service.'}
						</Description>
					</HeaderSection>
				</Container>

				<BasicSection4 
					imageUrl="/Iso/iso-1.jpg" 
					title="Certification of ISO 9001:2015" 
					>
					<ServiceDescription>
						<h4>Certification of ISO 9001:2015</h4>
						<ServiceList>
							<li>DLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
						</ServiceList>
					</ServiceDescription>
				</BasicSection4>				

				<BasicSection4 
					imageUrl="/Iso/iso-2.jpg" 
					title="Certification of ISO 14001:2015"
					reversed 
					>
					<ServiceDescription>
						<h4>Certification of ISO 14001:2015</h4>
						<ServiceList>
							<li>DLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
						</ServiceList>
					</ServiceDescription>
				</BasicSection4>	

				<BasicSection4 
					imageUrl="/Iso/iso-3.jpg" 
					title="Certification of ISO 45001:2018" 
					>
					<ServiceDescription>
						<h4>Certification of ISO 45001:2018</h4>
						<ServiceList>
							<li>DLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
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
						  imageUrl="/rigmoving.JPG" 
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
						  imageUrl="/maintenance.webp" 
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
						<OverTitle>
							{language === 'id' ? 'Daftar Pekerjaan' : 'Project List'}
						</OverTitle>
						<SectionTitle>{language === 'id' ? 'Pekerjaan yang Telah Dilakukan' : 'Completed Projects'}</SectionTitle>
						<ProjectsGrid>
							{[
								"HDE Services for Land Drilling Rig 550HP - 336",
								"HDE Services for Land Drilling Rig 550HP - 337",
								"HDE Services for Land Drilling Rig 550HP - 338",
								"HDE Services for Land Drilling Rig 550HP - 339",
								"HDE Services for Workover Rig 450HP - 363",
								"HDE Services for Workover Rig 450HP - 364",
								"HDE Services for Workover Rig 450HP - 365",
								"HDE Services for Workover Rig 450HP - 366",
								"HDE Services for Workover Rig 450HP - 367",
								"Rig Land Transport Services",
								"Rig Sea Transport Services",
								"Light Vehicle and Bus Rent Services for Drilling Project",
								"Light Vehicle and Bus Rent Services for Workover Project"
							].map((project, idx) => (
								<ProjectGridItem key={idx}>{project}</ProjectGridItem>
							))}
						</ProjectsGrid>
					</ClientsSection>

					<ClientLogosSection>
						<OverTitle>
							{language === 'id' ? 'Klien Kami' : 'Our Clients'}
						</OverTitle>
						<SectionTitle>Trusted by Industry Leaders</SectionTitle>

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