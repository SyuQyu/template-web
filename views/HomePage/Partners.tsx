import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'big.png',
  'SJRR.png',
  'PEA.png',
];

type logo = string;

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>MKB Group</Title>
      <LogosWrapper>
        {PARTNER_LOGOS.map((logo, index) => (
          <LogoContainer key={index}>
            <LogoImage
              src={`/MKB Group/${logo}`}
              alt={normalizePartnerLogoName(logo)}
              width={200}
              height={150}
            />
          </LogoContainer>
        ))}
      </LogosWrapper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo:string) {
  return logo.replace(/\.(png|svg)$/, '');
}

// Styled Components
const PartnersWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.h3`
  margin: 0 0 4rem 0;
  padding: 1rem;
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.8;
  
  ${media('<=desktop')} {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  
  ${media('<=tablet')} {
    font-size: 3rem;
    margin-bottom: 2.5rem;
  }
  
  ${media('<=phone')} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1250px;
  width: 100%;
  padding: 4rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.12),
      0 4px 16px rgba(0, 0, 0, 0.08);
  }
  
  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    padding: 3rem 1.5rem;
    max-width: 700px;
  }
  
  ${media('<=phone')} {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
    max-width: 400px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  padding: 2rem;
  border-radius: 0.8rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
  
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  ${media('<=phone')} {
    height: 140px;
    padding: 1.5rem;
  }
`;

const LogoImage = styled(NextImage)`
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain;
  filter: brightness(0.9) contrast(1.1);
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    filter: brightness(1) contrast(1.2);
    transform: scale(1.05);
  }
`;