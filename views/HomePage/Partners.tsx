import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'gwdc.png',
  'Pertamina.png',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>MKB Group</Title>
      <LogosWrapper>
        {PARTNER_LOGOS.map((logo) => (
          <LogoImage
            key={logo}
            src={'/partners/' + logo}
            alt={normalizePartnerLogoName(logo)}
            width={200}
            height={200}
          />
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

const LogoImage = styled(NextImage)`
  opacity: 1;
  transition: opacity 0.2s;
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;

  &:hover {
    opacity: 1;
  }
`;
