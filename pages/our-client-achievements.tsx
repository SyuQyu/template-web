import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

const CLIENT_PROFILES = [
	{
		id: 1,
		name: 'BP Indonesia',
		sector: 'Oil & Gas',
		partnership: '2015 - Present',
		location: 'Jakarta & Papua',
		description:
			'Strategic partner dalam LNG operations dan upstream oil & gas activities di Indonesia',
		services: [
			'Heavy Lift Operations',
			'Marine Equipment Rental',
			'Project Management',
		],
		achievements: [
			'150+ successful operations',
			'Zero accident record',
			'99.8% equipment uptime',
		],
		image: '/demo-illustration-1.svg',
		testimonial: {
			text: 'PT. MKB telah menjadi partner terpercaya dalam mendukung operasi LNG kami. Professional service dan commitment terhadap safety excellence.',
			author: 'John Anderson',
			position: 'Operations Director, BP Indonesia',
		},
	},
	{
		id: 2,
		name: 'PT. PLN (Persero)',
		sector: 'Power Generation',
		partnership: '2018 - Present',
		location: 'Seluruh Indonesia',
		description:
			'Supporting power plant construction dan maintenance operations dengan heavy equipment rental',
		services: [
			'Mobile Crane Rental',
			'Transportation Services',
			'Maintenance Support',
		],
		achievements: [
			'25+ power plant projects',
			'2.5GW total capacity supported',
			'100% on-time delivery',
		],
		image: '/demo-illustration-2.svg',
		testimonial: {
			text: 'Reliability dan professional service dari MKB sangat membantu kelancaran pembangunan pembangkit listrik nasional.',
			author: 'Ir. Bambang Sutrisno',
			position: 'Construction Director, PLN',
		},
	},
	{
		id: 3,
		name: 'PT. Pertamina (Persero)',
		sector: 'Oil Refinery',
		partnership: '2012 - Present',
		location: 'Cilacap, Balongan, Balikpapan',
		description:
			'Long-term partnership dalam refinery expansion dan maintenance operations',
		services: [
			'Heavy Equipment Rental',
			'Specialized Transportation',
			'Technical Support',
		],
		achievements: [
			'3 major refinery expansions',
			'USD 150M+ project value',
			'12 years partnership',
		],
		image: '/demo-illustration-3.png',
		testimonial: {
			text: 'MKB telah membuktikan konsistensi dalam memberikan service excellence untuk berbagai project refinery kami.',
			author: 'Drs. Ahmad Mulyadi',
			position: 'Project Director, Pertamina',
		},
	},
	{
		id: 4,
		name: 'PT. Freeport Indonesia',
		sector: 'Mining',
		partnership: '2019 - Present',
		location: 'Papua',
		description:
			'Supporting mining operations dengan specialized heavy equipment untuk kondisi ekstrem',
		services: [
			'Mining Equipment Rental',
			'Maintenance Services',
			'Logistics Support',
		],
		achievements: [
			'5+ years mining support',
			'Extreme weather operations',
			'24/7 availability',
		],
		image: '/demo-illustration-4.png',
		testimonial: {
			text: 'Dalam kondisi operasi mining yang challenging, MKB selalu deliver dengan service quality yang exceptional.',
			author: 'Michael Johnson',
			position: 'Operations Manager, Freeport Indonesia',
		},
	},
];

const ACHIEVEMENTS = [
	{ number: '50+', label: 'Satisfied Clients' },
	{ number: '15+', label: 'Years Experience' },
	{ number: '99.8%', label: 'Safety Record' },
	{ number: 'USD 500M+', label: 'Total Project Value' },
];

const MAJOR_CLIENTS = [
	{ name: 'BP Indonesia', logo: '/partners/gdap.png', sector: 'Oil & Gas' },
	{ name: 'PT. Pertamina', logo: '/partners/gdap.png', sector: 'Oil & Gas' },
	{ name: 'PT. PLN', logo: '/partners/gdap.png', sector: 'Power Generation' },
	{ name: 'PT. Freeport', logo: '/partners/gdap.png', sector: 'Mining' },
	{ name: 'Chevron Indonesia', logo: '/partners/gdap.png', sector: 'Oil & Gas' },
	{ name: 'ExxonMobil', logo: '/partners/gdap.png', sector: 'Oil & Gas' },
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
							? 'Partner terpercaya 50+ klien major: BP Indonesia, Pertamina, PLN, Freeport. 15+ tahun pengalaman, 99.8% safety record, USD 500M+ total project value. Lihat testimoni dan pencapaian kami.'
							: 'Trusted partner of 50+ major clients: BP Indonesia, Pertamina, PLN, Freeport. 15+ years experience, 99.8% safety record, USD 500M+ total project value. See our testimonials and achievements.'
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
							? 'Partner terpercaya 50+ klien major. 15+ tahun pengalaman, 99.8% safety record, USD 500M+ project value.'
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
								? 'Membanggakan kerjasama dengan 50+ klien terkemuka di Indonesia. Pengalaman 15+ tahun melayani sektor Oil & Gas, Power Generation, dan Mining dengan standar safety 99.8% dan total project value USD 500M+'
								: 'Proud to partner with 50+ leading clients across Indonesia. 15+ years of experience serving Oil & Gas, Power Generation, and Mining sectors with 99.8% safety standards and USD 500M+ total project value.'}
						</Description>
					</HeaderSection>
				</Container>

				<BasicSection
					imageUrl="/demo-illustration-1.svg"
					title="Company Achievements"
				>
					<StatsGrid>
						{ACHIEVEMENTS.map((achievement, idx) => (
							<StatCard key={idx}>
								<StatNumber>{achievement.number}</StatNumber>
								<StatLabel>{achievement.label}</StatLabel>
							</StatCard>
						))}
					</StatsGrid>
				</BasicSection>

				<Container>
					<ClientsSection>
						<OverTitle>
							{language === 'id' ? 'Klien Utama' : 'Major Clients'}
						</OverTitle>
						<SectionTitle>Industry Leaders We Serve</SectionTitle>

						{CLIENT_PROFILES.map((client, idx) => (
							<ClientCard key={client.id} reverse={idx % 2 === 1}>
								<ClientImageWrapper reverse={idx % 2 === 1}>
									<ClientImage src={client.image} alt={client.name} />
								</ClientImageWrapper>

								<ClientContent reverse={idx % 2 === 1}>
									<ClientHeader>
										<ClientMeta>
											<MetaItem>
												<MetaLabel>Sector:</MetaLabel>
												<MetaValue>{client.sector}</MetaValue>
											</MetaItem>
											<MetaItem>
												<MetaLabel>Partnership:</MetaLabel>
												<MetaValue>{client.partnership}</MetaValue>
											</MetaItem>
											<MetaItem>
												<MetaLabel>Location:</MetaLabel>
												<MetaValue>{client.location}</MetaValue>
											</MetaItem>
										</ClientMeta>

										<ClientTitle>{client.name}</ClientTitle>
										<ClientDescription>
											{client.description}
										</ClientDescription>
									</ClientHeader>

									<ClientDetails>
										<DetailSection>
											<DetailTitle>Services Provided:</DetailTitle>
											<ServicesList>
												{client.services.map((service, serviceIdx) => (
													<ServiceItem key={serviceIdx}>
														{service}
													</ServiceItem>
												))}
											</ServicesList>
										</DetailSection>

										<ClientAchievements>
											<DetailTitle>Key Achievements:</DetailTitle>
											<AchievementsList>
												{client.achievements.map(
													(achievement, achIdx) => (
														<AchievementItem key={achIdx}>
															✓ {achievement}
														</AchievementItem>
													)
												)}
											</AchievementsList>
										</ClientAchievements>
									</ClientDetails>

									<TestimonialSection>
										<TestimonialText>
											&ldquo;{client.testimonial.text}&rdquo;
										</TestimonialText>
										<TestimonialAuthor>
											<AuthorName>{client.testimonial.author}</AuthorName>
											<AuthorPosition>
												{client.testimonial.position}
											</AuthorPosition>
										</TestimonialAuthor>
									</TestimonialSection>
								</ClientContent>
							</ClientCard>
						))}
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
									<ClientSector>{client.sector}</ClientSector>
								</ClientLogo>
							))}
						</ClientsGrid>
					</ClientLogosSection>
				</Container>
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

const ClientCard = styled.div<{ reverse?: boolean }>`
	display: grid;
	grid-template-columns: ${(props) => (props.reverse ? '1fr 1fr' : '1fr 1fr')};
	gap: 4rem;
	align-items: center;
	margin: 6rem 0;
	padding: 4rem;
	background: rgb(var(--cardBackground));
	;
	border-radius: 1rem;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

	${media('<=tablet')} {
		grid-template-columns: 1fr;
		gap: 3rem;
		padding: 3rem 2rem;
	}
`;

const ClientImageWrapper = styled.div<{ reverse?: boolean }>`
	${media('<=tablet')} {
		order: 1;
	}
`;

const ClientImage = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
	border-radius: 0.8rem;
`;

const ClientContent = styled.div<{ reverse?: boolean }>`
	text-align: left;

	${media('<=tablet')} {
		order: 2;
	}
`;

const ClientHeader = styled.div`
	margin-bottom: 2rem;
`;

const ClientMeta = styled.div`
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

const ClientTitle = styled.h3`
	font-size: 2.2rem;
	margin-bottom: 1rem;
	color: rgb(var(--text));
`;

const ClientDescription = styled.p`
	font-size: 1.6rem;
	line-height: 1.6;
	color: var(--text-secondary);
`;

const ClientDetails = styled.div`
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

const ServicesList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const ServiceItem = styled.span`
	background: var(--tertiary);
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	font-size: 1.3rem;
	color: var(--primary);
`;

const ClientAchievements = styled.div`
	margin-top: 2rem;
`;

const AchievementsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const AchievementItem = styled.div`
	font-size: 1.4rem;
	color: var(--text-secondary);
	display: flex;
	align-items: center;
	gap: 0.5rem;
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

const ClientLogosSection = styled.div`
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
