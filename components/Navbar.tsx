import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ScrollPositionEffectProps, useScrollPosition } from 'hooks/useScrollPosition';
import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Container from './Container';
import Drawer from './Drawer';
import { HamburgerIcon } from './HamburgerIcon';
import LanguageSwitcher from './LanguageSwitcher';

const ColorSwitcher = dynamic(() => import('../components/ColorSwitcher'), { ssr: false });

type NavbarProps = { items: NavItems };
type ScrollingDirections = 'up' | 'down' | 'none';

export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] = useState<ScrollingDirections>('none');

  let lastScrollY = useRef(0);
  const lastRoute = useRef('');
  const stepSize = useRef(50);

  useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);

  
  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection('none');
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none');
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down');
    lastScrollY.current = currentScrollY;
  }


  return (
    <NavbarContainer >
      <Content>
        <NextLink href="/" passHref>
          <div className='flex justify-start items-center cursor-pointer mr-auto gap-2'>
            <NextImage src={"/mkb_logo_png_new.png"} alt={"logo"} width={40} height={40} objectFit="cover" />
             <NavItemWrapper>
              <NextLink href="/"  passHref>
                <h1 className='xl:!block !hidden'>Mitra Kawan Bersama</h1>
              </NextLink>
            </NavItemWrapper>
          </div>
        </NextLink>
        <NavItemList>
          {items.map((singleItem) => (
            <NavItem key={singleItem.href} {...singleItem} />
          ))}
        </NavItemList>
        <LanguageSwitcherContainer>
          <LanguageSwitcher />
        </LanguageSwitcherContainer>
        <ColorSwitcherContainer>
          <ColorSwitcher />
        </ColorSwitcherContainer>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const router = useRouter();
  const isActive = router.asPath === href;

  if (outlined) {
    
  }

  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
         <a className={isActive ? 'active' : ''}>{title}</a>
      </NextLink>
    </NavItemWrapper>
  );
}

const NavItemList = styled.div`
  display: flex;
  list-style: none;


  ${media('<=desktop')} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media('<=desktop')} {
    display: block;
  }

  ${media('>desktop')} {
    display: none;
  }
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: ${(p) => (p.outlined ? '#174313' : 'transparent')};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;
  items-align: center;
  white-space: nowrap;

  &:hover {
    background-color: ${(p) => (p.outlined ? '#08325c' : 'transparent')};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p) =>
      p.outlined
        ? 'rgb(var(--textSecondary))'
        : 'rgba(var(--text), 0.75)'};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
    transition: color 0.2s;
  }

  /* Light mode override: only on hover or active */
  .next-light-theme & a:hover,
  .next-light-theme & a.active {
    color: black;
  }

  a:hover,
  a.active {
    color: rgb(var(--textSecondary));
  }

  h1 {
    display: flex;
    color: ${(p) =>
      p.outlined
        ? 'rgb(var(--textSecondary))'
        : 'rgba(var(--text), 0.75)'};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
    transition: color 0.2s;
  }

  .next-light-theme & h1:hover,
  .next-light-theme & h1.active {
    color: black;
  }

  &:not(:last-child) {
    margin-right: 6rem;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: #1A202C;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  
    .next-light-theme & {
    background-color: #fff;
  }

  transition-property: height, box-shadow;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;



const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;

const LanguageSwitcherContainer = styled.div`
  margin: 0 1rem;
`;
