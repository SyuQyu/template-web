import React from 'react';
import { useLanguage } from 'contexts/language.context';
import { NavItems } from 'types';
import Navbar from './Navbar';

export default function DynamicNavbar() {
  const { t } = useLanguage();

  const navItems: NavItems = [
    { title: t('nav.about'), href: '/about' },
    // { title: t('nav.fleet'), href: '/fleet' },
    { title: t('nav.services'), href: '/services' },
    { title: t('nav.projects'), href: '/projects' },
    { title: t('nav.news'), href: '/news' },
    { title: t('nav.contact'), href: '/contact', outlined: true },
  ];

  return <Navbar items={navItems} />;
}
