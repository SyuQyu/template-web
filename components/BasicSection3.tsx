import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import RichText from './RichText';

export interface BasicSection3Props {
  imageUrl: string;
  title: string;
}

export default function BasicSection3({ imageUrl, title, children }: PropsWithChildren<BasicSection3Props>) {
  return (
    <BasicSection3Wrapper>
      <Title>{title}</Title>
      <ImageContainer>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ContentContainer>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSection3Wrapper>
  );
}

const BasicSection3Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
  margin-top: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  ${media('<=tablet')} {
    font-size: 2.8rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin-bottom: 2rem;

  &:before {
    content: '';
    display: block;
    padding-top: 56.25%; /* 16:9 ratio */
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: left;

  ${media('<=tablet')} {
    text-align: center;
  }
`;
