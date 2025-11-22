import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type ListItemProps = {
  title: string;
  href: string;
};

const footerLinks = [
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Career', href: 'https://www.jobstreet.co.id/en/companies/mkb' },
  { title: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        {/* Langsung render list item tanpa judul dan kolom */}
        <ListContainer>
          {footerLinks.map((link) => (
            <ListItem key={link.href} {...link} />
          ))}
        </ListContainer>
        
        <BottomBar>
          <ShareBar className='flex flex-row justify-start items-center'>
            <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2021 My Saas Startup</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function ListItem({ title, href }: ListItemProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  
  if (isExternal) {
    return (
      <ListItemWrapper>
        <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>
      </ListItemWrapper>
    );
  }
  
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; // Pusatkan link di tengah
  gap: 3rem; // Beri jarak antar link
  margin-bottom: 6rem; // Beri jarak ke bottom bar

  ${media('<=phone')} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

// ListHeader dan ListWrapper sudah tidak diperlukan lagi

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
    transition: color 0.2s;

    &:hover {
        color: rgb(var(--textSecondary));
    }
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${media('<=tablet')} {
    flex-direction: column;
    justify-content: center; // Pusatkan saat di mobile

    & > *:first-child {
        margin-bottom: 2rem;
    }
  }
`;