import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import RichText from './RichText';

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  reversed?: boolean;
}

export default function BasicSection({ imageUrl, title, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper reversed={reversed}>
      <MobileTitle>{title}</MobileTitle>
      <ImageContainer>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-top: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }

  /* Hide desktop title on small screens; we use MobileTitle there */
  ${media('<=desktop')} {
    display: none;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 24rem; /* ensure non-zero height by default */

  /* Next.js <Image> (legacy layout="fill") wraps with a span; make it fill container */
  & > span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Ensure the underlying img covers */
  img {
    object-fit: cover;
  }

  ${media('<=desktop')} {
    width: 100%;
    height: 28rem; /* visible height on stacked layout */
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const MobileTitle = styled(Title)`
  display: none;

  ${media('<=desktop')} {
    display: block;
    margin-top: 1.5rem;
  }
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: stretch; /* stretch both columns to same height */
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${MobileTitle} {
      order: 1;
    }

    ${ImageContainer} {
      order: 2; /* place image under the text */
      margin: 2rem 0 0 0;
      height: 28rem; /* ensure visible height on phones */
    }

    ${ContentContainer} {
      order: 3;
    }
  }
`;
