import Head from 'next/head';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import Link from 'components/Link';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage({ posts }: any) {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>PT. Mitra Kawan Bersama - Heavy Equipment Rental & Construction Support</title>
        <meta
          name="description"
          content="PT. Mitra Kawan Bersama adalah perusahaan heavy equipment rental terpercaya dengan 150+ completed projects. Crane rental, heavy lift operations, dan construction support untuk oil & gas, power plant, dan industrial projects."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
        </WhiteBackgroundContainer>

        <CoreStrengthsSection>
          <Container>
            <SectionHeader>
              <OverTitle>{t('strengths.overtitle')}</OverTitle>
              <SectionTitle>{t('strengths.title')}</SectionTitle>
            </SectionHeader>
            <StrengthsGrid>
              <StrengthCard>
                <StrengthIcon>🏗️</StrengthIcon>
                <StrengthTitle>{t('strengths.experience.title')}</StrengthTitle>
                <StrengthDescription>
                  {t('strengths.experience.desc')}
                </StrengthDescription>
              </StrengthCard>
              
              <StrengthCard>
                <StrengthIcon>🔧</StrengthIcon>
                <StrengthTitle>{t('strengths.fleet.title')}</StrengthTitle>
                <StrengthDescription>
                  {t('strengths.fleet.desc')}
                </StrengthDescription>
              </StrengthCard>
              
              <StrengthCard>
                <StrengthIcon>🛡️</StrengthIcon>
                <StrengthTitle>{t('strengths.safety.title')}</StrengthTitle>
                <StrengthDescription>
                  {t('strengths.safety.desc')}
                </StrengthDescription>
              </StrengthCard>
              
              <StrengthCard>
                <StrengthIcon>⭐</StrengthIcon>
                <StrengthTitle>{t('strengths.trusted.title')}</StrengthTitle>
                <StrengthDescription>
                  {t('strengths.trusted.desc')}
                </StrengthDescription>
              </StrengthCard>
            </StrengthsGrid>
          </Container>
        </CoreStrengthsSection>

        <KeyProjectsSection>
          <Container>
            <SectionHeader>
              <OverTitle>{t('projects.overtitle')}</OverTitle>
              <SectionTitle>{t('projects.title')}</SectionTitle>
            </SectionHeader>
            <ProjectsGrid>
              <ProjectCard>
                <ProjectImage src="/demo-illustration-1.svg" alt="LNG Tangguh Project" />
                <ProjectContent>
                  <ProjectTitle>LNG Plant Expansion - Tangguh Papua</ProjectTitle>
                  <ProjectClient>BP Indonesia</ProjectClient>
                  <ProjectDescription>
                    Heavy lift operations untuk LNG plant expansion menggunakan 
                    crawler cranes hingga 750 ton capacity.
                  </ProjectDescription>
                  <ProjectValue>USD 45 Million</ProjectValue>
                </ProjectContent>
              </ProjectCard>
              
              <ProjectCard>
                <ProjectImage src="/demo-illustration-2.svg" alt="PLTU Jawa Project" />
                <ProjectContent>
                  <ProjectTitle>Power Plant Construction - PLTU Jawa-7</ProjectTitle>
                  <ProjectClient>PT. PLN (Persero)</ProjectClient>
                  <ProjectDescription>
                    Rig move dan heavy equipment support untuk pembangunan 
                    power plant 1000 MW capacity.
                  </ProjectDescription>
                  <ProjectValue>USD 38 Million</ProjectValue>
                </ProjectContent>
              </ProjectCard>
              
              <ProjectCard>
                <ProjectImage src="/demo-illustration-3.png" alt="Pertamina Refinery" />
                <ProjectContent>
                  <ProjectTitle>Oil Refinery Expansion - Kilang Cilacap</ProjectTitle>
                  <ProjectClient>PT. Pertamina (Persero)</ProjectClient>
                  <ProjectDescription>
                    Equipment rental dan maintenance support untuk refinery 
                    capacity expansion project.
                  </ProjectDescription>
                  <ProjectValue>USD 52 Million</ProjectValue>
                </ProjectContent>
              </ProjectCard>
            </ProjectsGrid>
            
            <ProjectsCTA>
              <Link href="/projects">
                <Button>{t('projects.cta')}</Button>
              </Link>
            </ProjectsCTA>
          </Container>
        </KeyProjectsSection>

        <QuickContactSection>
          <Container>
            <ContactCard>
              <ContactContent>
                <ContactTitle>{t('contact.title')}</ContactTitle>
                <ContactSubtitle>
                  {t('contact.subtitle')}
                </ContactSubtitle>
                
                <ContactOptions>
                  <ContactOption href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    <ContactIcon>📱</ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{t('contact.whatsapp')}</ContactLabel>
                      <ContactValue>+62 812 3456 7890</ContactValue>
                    </ContactDetails>
                  </ContactOption>
                  
                  <ContactOption href="mailto:info@mkb.co.id">
                    <ContactIcon>📧</ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{t('contact.email')}</ContactLabel>
                      <ContactValue>info@mkb.co.id</ContactValue>
                    </ContactDetails>
                  </ContactOption>
                  
                  <ContactOption href="tel:+622155550123">
                    <ContactIcon>📞</ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{t('contact.call')}</ContactLabel>
                      <ContactValue>+62 21 5555 0123</ContactValue>
                    </ContactDetails>
                  </ContactOption>
                </ContactOptions>
                
                <ContactCTA>
                  <Link href="/contact">
                    <Button>{t('contact.cta')}</Button>
                  </Link>
                </ContactCTA>
              </ContactContent>
            </ContactCard>
          </Container>
        </QuickContactSection>

        <DarkerBackgroundContainer>
          <Features />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: url('/bg.webp') center center/cover no-repeat;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
    
  }
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  
  .next-dark-theme & {
    &::before {
      background: rgba(0, 0, 0, 0.6);
    }
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
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

const KeyProjectsSection = styled.div`
  padding: 8rem 0;
  background: rgb(var(--secondBackground));
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: var(--cardBackground);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: rgb(var(--text));
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const ProjectClient = styled.div`
  font-size: 1.4rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ProjectValue = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--primary);
`;

const ProjectsCTA = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const QuickContactSection = styled.div`
  padding: 8rem 0;
  background: rgb(var(--background));
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  padding: 5rem 4rem;
  text-align: center;
  color: white;
  
  ${media('<=tablet')} {
    padding: 4rem 2rem;
  }
`;

const ContactContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  ${media('<=tablet')} {
    font-size: 2.8rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 4rem;
  opacity: 0.9;
`;

const ContactOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const ContactOption = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  text-decoration: none;
  color: white;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
`;

const ContactDetails = styled.div`
  text-align: left;
`;

const ContactLabel = styled.div`
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const ContactCTA = styled.div`
  margin-top: 3rem;
`;

