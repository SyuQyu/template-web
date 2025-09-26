import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>{t('hero.title')}</CustomOverTitle>
        <Heading>PT Mitra Kawan Bersama</Heading>
        <Description>
          {t('hero.subtitle')}
        </Description>
        <CustomButtonGroup>
          <NextLink href="/contact" passHref>
            <Button>
              {t('hero.cta.consultation')}
            </Button>
          </NextLink>
          {/* <NextLink href="/fleet" passHref>
            <OutlinedButton transparent>
              {t('hero.cta.fleet')}
            </OutlinedButton>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  text-align: center;
  min-height: 100vh; 
  padding-top: 0; 
`;


const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  padding-top: 20rem;
  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  justify-content: center; 
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.6);

  .next-light-theme & {
    color: #000;
    text-shadow:  2px 2px 6px rgba(0, 0, 0, 0.6),  
    0 0 12px rgba(0, 0, 0, 0.4);
  }

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  
  color: #fff;
  text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.6);

  .next-light-theme & {
    color: #000;
    text-shadow:  2px 2px 6px rgba(0, 0, 0, 0.6), 
    0 0 12px rgba(0, 0, 0, 0.4);
  }

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
