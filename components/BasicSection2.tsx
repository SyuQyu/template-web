import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function BasicSection({  title, overTitle, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper reversed={reversed}>
      <ContentContainer>
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
    font-size: 5.2rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 4rem;
    letter-spacing: -0.03em;
    text-align: center;

    ${media('<=tablet')} {
        font-size: 4.6rem;
        margin-bottom: 2rem;
    }
`;

const CustomOverTitle = styled(OverTitle)`
    margin-bottom: 2rem;
    text-align: center;
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
    display: flex;
    align-items: center;
    flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

    ${media('<=desktop')} {
        flex-direction: column;
    }
`;
