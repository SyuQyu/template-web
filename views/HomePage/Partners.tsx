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

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>MKB Group</Title>
      <LogosWrapper>
        {PARTNER_LOGOS.map((logo) => (
        <LogoContainer wide={logo.includes('SJR')}>
          <LogoImage
            src={'/MKB Group/' + logo}
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

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  font-weight: 600;
 
  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

// Container untuk setiap logo dengan ukuran tetap
const LogoContainer = styled.div<{ wide?: boolean }>`
  width: ${(props) => (props.wide ? '140px' : '120px')};
  height: 12.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoImage = styled(NextImage)`
  opacity: 1;
  transition: opacity 0.2s;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
  position: relative !important;

  &:hover {
    opacity: 0.8;
  }
`;
